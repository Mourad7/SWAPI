<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PlanetsController extends Controller
{
    public function index()
    {
        // Make an HTTP GET request to the SWAPI planets endpoint
        $response = Http::get('https://swapi.dev/api/planets');
        
        // Return the response data as JSON
        return $response->json();
    }
}

?>
