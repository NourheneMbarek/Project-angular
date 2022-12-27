<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/ajouter_candidat' , 'CandidatController@ajouter');
Route::get('/infos' , 'SeanceController@getInfo');

Route::post('/save_seance' , 'SeanceController@save');

Route::get('/liste_seances' , 'SeanceController@getAll');