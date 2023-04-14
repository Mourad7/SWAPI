<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class StarshipsController extends Controller
{
    public function index()
    {
        // Send a GET request to the SWAPI API to retrieve a list of starships
        $response = Http::get('https://swapi.dev/api/starships');
        
        // Return the response body as a JSON-encoded string
        return $response->json();
    }
}

?>
