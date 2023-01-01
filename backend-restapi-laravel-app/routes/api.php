<?php

use App\Http\Controllers\ChartController;
use App\Http\Controllers\ClientReviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

# technology (chart)
Route::get('/getAllTechnologies',[ChartController::class,'getAllTechnologies']);

# client review
Route::get('/getAllClientReviews',[ClientReviewController::class,'getAllClientReviews']);
