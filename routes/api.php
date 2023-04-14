<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route to get authenticated user's details
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route to get people resource
Route::get('/people', 'App\Http\Controllers\Api\PeopleController@index');

// Route to get planets resource
Route::get('/planets', 'App\Http\Controllers\Api\PlanetsController@index');

// Route to get starships resource
Route::get('/starships', 'App\Http\Controllers\Api\StarshipsController@index');
