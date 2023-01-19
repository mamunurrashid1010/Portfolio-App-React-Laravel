<?php

use App\Http\Controllers\ContactsController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ServicesController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

# login
Route::post('/onLogin',[LoginController::class,'onLogin']);
Route::get('/logout',[LoginController::class,'logout']);

# service
Route::get('/service/show',[ServicesController::class,'show'])->middleware('loginCheck');
Route::post('/service/store',[ServicesController::class,'store'])->middleware('loginCheck');
Route::post('/service/delete',[ServicesController::class,'delete'])->middleware('loginCheck');

# contact
Route::get('/contact/show',[ContactsController::class,'show'])->middleware('loginCheck');
Route::post('/contact/delete',[ContactsController::class,'delete'])->middleware('loginCheck');

Route::get('{AnyRoute}', function () {
    return view('index');
})->where('AnyRoute','.*')->middleware('loginCheck');
