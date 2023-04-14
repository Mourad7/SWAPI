<?php

use Illuminate\Support\Facades\Route;

// Define routes to access different API endpoints
Route::get('/people', 'App\Http\Controllers\Api\PeopleController@index');
Route::get('/planets', 'App\Http\Controllers\Api\PlanetsController@index');
Route::get('/starships', 'App\Http\Controllers\Api\StarshipsController@index');
