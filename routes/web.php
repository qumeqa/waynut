<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::get('/', function () {
    return view('index');
});

Route::get('/1', function () {
    return view('test');
});

Route::post('/send-form', [ContactController::class, 'sendForm']);