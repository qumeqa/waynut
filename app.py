from flask import Flask, request, jsonify,render_template
from flask_cors import CORS
import requests, re

app = Flask(__name__)
CORS(app)

BOT_TOKEN = '8463774221:AAH1iooaBOg9WY88tqBi9Tlds3xDsrMpQDU'
CHAT_ID = '919110804'

NAME_RE = re.compile(r'^[А-Яа-яA-Za-z\s]{2,50}$')
COMPANY_RE = re.compile(r'^[А-Яа-яA-Za-z0-9\s\-]{2,100}$')
EMAIL_RE = re.compile(r'^[^@\s]+@[^@\s]+\.[^@\s]+$')
PHONE_RE = re.compile(r'^\+?[0-9]{7,15}$')

def validate(data):
    errors = {}
    if not NAME_RE.match(data.get('name', '')):
        errors['name'] = 'Имя: только буквы'
    if not COMPANY_RE.match(data.get('company', '')):
        errors['company'] = 'Компания: недопустимые символы'
    if not EMAIL_RE.match(data.get('email', '')):
        errors['email'] = 'Некорректный email'
    if not PHONE_RE.match(data.get('phone', '')):
        errors['phone'] = 'Телефон: только цифры (7–15)'
    if not data.get('comment', '').strip():
        errors['comment'] = 'Описание обязательно'
    return errors

@app.route('/send-form', methods=['POST'])
def send_form():
    data = request.form.to_dict()
    errors = validate(data)
    if errors:
        return jsonify({'status': 'error', 'errors': errors}), 400

    text = (
        "📩 Новая заявка\n\n"
        f"👤 Имя: {data['name']}\n"
        f"🏢 Компания: {data['company']}\n"
        f"📧 Email: {data['email']}\n"
        f"📞 Телефон: {data['phone']}\n"
        f"📝 Описание:\n{data['comment']}"
    )

    r = requests.post(
        f'https://api.telegram.org/bot{BOT_TOKEN}/sendMessage',
        json={'chat_id': CHAT_ID, 'text': text}
    )

    if r.status_code != 200:
        return jsonify({'status': 'error', 'message': 'Telegram error'}), 500

    files = request.files.getlist('files')
    if files:
        for file in files:
            if file and file.filename:
                requests.post(
                    f'https://api.telegram.org/bot{BOT_TOKEN}/sendDocument',
                    data={'chat_id': CHAT_ID},
                    files={'document': (file.filename, file.stream, file.content_type)}
                )

    return jsonify({'status': 'ok'}), 200

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(port=5001, debug=True)
