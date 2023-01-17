<?php

use App\Http\Controllers\ContactsController;
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

# service
Route::get('/service/show',[ServicesController::class,'show']);
Route::post('/service/store',[ServicesController::class,'store']);
Route::post('/service/delete',[ServicesController::class,'delete']);

# contact
Route::get('/contact/show',[ContactsController::class,'show']);
Route::post('/contact/delete',[ContactsController::class,'delete']);

Route::get('{AnyRoute}', function () {
    return view('index');
})->where('AnyRoute','.*');
