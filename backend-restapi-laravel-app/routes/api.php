<?php

use App\Http\Controllers\ChartController;
use App\Http\Controllers\ClientReviewController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\CoursesController;
use App\Http\Controllers\FooterController;
use App\Http\Controllers\LegalCommonsController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\ServicesController;
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

# service
Route::get('/service/getAllService',[ServicesController::class,'getAllService']);

# technology (chart)
Route::get('/getAllTechnologies',[ChartController::class,'getAllTechnologies']);

# project
Route::get('/project/getThreeProject',[ProjectsController::class,'getThreeProject']);
Route::get('/project/getAllProject',[ProjectsController::class,'getAllProject']);
Route::get('/project/details/{id}',[ProjectsController::class,'details']);

# courses
Route::get('/course/getFourCourse',[CoursesController::class,'getFourCourse']);
Route::get('/course/getAllCourse',[CoursesController::class,'getAllCourse']);
Route::get('/course/details/{id}',[CoursesController::class,'details']);

# client review
Route::get('/getAllClientReviews',[ClientReviewController::class,'getAllClientReviews']);

# contact
Route::post('/contact/store',[ContactsController::class,'store']);

# footer
Route::get('/footer/getFooterContent',[FooterController::class,'getFooterContent']);

# legal
Route::get('/legal/getLegalContent',[LegalCommonsController::class,'getLegalContent']);
