<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class ContactController extends Controller
{
    const BOT_TOKEN = '8463774221:AAHN4Hc2WyoCw20g6QAJvLs3Nez9yKRaigU';
    const CHAT_ID = '919110804';

    /**
     * Validate incoming data (same as Python version)
     */
    private function validate(Request $request)
    {
        $data = $request->all();
        $errors = [];


        // Email validation
        if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = 'Некорректный email';
        }

        // Phone validation
        if (empty($data['phone']) || !preg_match('/^\+?[0-9]{7,15}$/', $data['phone'])) {
            $errors['phone'] = 'Телефон: только цифры (7–15)';
        }

        // Comment validation (required in Python version)
        if (empty($data['comment']) || trim($data['comment']) === '') {
            $errors['comment'] = 'Описание обязательно';
        }

        return $errors;
    }

    /**
     * Send form data to Telegram (same logic as Python version)
     */
    public function sendForm(Request $request)
    {
        $data = $request->all();
        $errors = $this->validate($request);

        // Return validation errors (same format as Python)
        if (!empty($errors)) {
            return response()->json([
                'status' => 'error',
                'errors' => $errors
            ], 400);
        }

        $text = sprintf(
            "📩 Новая заявка\n\n"
            . "👤 Имя: %s\n"
            . "🏢 Компания: %s\n"
            . "📧 Email: %s\n"
            . "📞 Телефон: %s\n"
            . "📝 Описание:\n%s",
            $data['name'],
            $data['company'],
            $data['email'],
            $data['phone'],
            $data['comment']
        );

        try {
            // Send message to Telegram (same as Python: json format)
            $response = Http::asJson()->post(
                sprintf('https://api.telegram.org/bot%s/sendMessage', self::BOT_TOKEN),
                [
                    'chat_id' => self::CHAT_ID,
                    'text' => $text
                ]
            );

            // Check if response is successful (status code 200, same as Python)
            // Telegram API returns {'ok': true} on success
            // Note: Laravel Http response methods may not be recognized by linter
            /** @var \Illuminate\Http\Client\Response $response */
            $responseData = $response->json();
            if (!isset($responseData['ok']) || !$responseData['ok']) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Telegram error'
                ], 500);
            }

            // Handle file uploads if any (same as Python)
            // In Laravel, when multiple files are sent with same name via FormData.append('files', file),
            // they are accessible via $request->file('files') which returns an array
            if ($request->hasFile('files')) {
                $files = $request->file('files');
                
                // Handle both single file and multiple files
                if (!is_array($files)) {
                    $files = [$files];
                }
                
                foreach ($files as $file) {
                    if ($file && $file->isValid()) {
                        try {
                            // Send file to Telegram (same as Python)
                            $fileResponse = Http::asMultipart()
                                ->attach(
                                    'document',
                                    file_get_contents($file->getRealPath()),
                                    $file->getClientOriginalName()
                                )
                                ->post(
                                    sprintf('https://api.telegram.org/bot%s/sendDocument', self::BOT_TOKEN),
                                    ['chat_id' => self::CHAT_ID]
                                );
                            
                            // Check if file was sent successfully
                            /** @var \Illuminate\Http\Client\Response $fileResponse */
                            $fileResponseData = $fileResponse->json();
                            if (!isset($fileResponseData['ok']) || !$fileResponseData['ok']) {
                                Log::warning('Failed to send file to Telegram: ' . ($fileResponseData['description'] ?? 'Unknown error'));
                            }
                        } catch (\Exception $e) {
                            // Log error but don't fail the whole request
                            Log::error('Failed to send file to Telegram: ' . $e->getMessage());
                        }
                    }
                }
            }

            // Return success (same format as Python: {'status': 'ok'})
            return response()->json(['status' => 'ok'], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Ошибка сервера: ' . $e->getMessage()
            ], 500);
        }
    }
}
