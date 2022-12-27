<?php

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
    return view('welcome');
});

Route::get('/moniteurs' , 'MoniteurController@liste_des_moniteurs');

Route::get('/candidats' , 'CandidatController@liste_des_candidats');
Route::get('/voitures' , 'VoitureController@liste_des_voitures');
Route::get('/ajouter_voiture' , 'VoitureController@ajouter');
Route::get('/supprimer_voiture/{id}' , 'VoitureController@supprimer');

Route::get('/supprimer_candidat/{id}' , 'CandidatController@supprimer');
