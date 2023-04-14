<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class PeopleController extends Controller
{
    public function index(Request $request)
    {
        // Base URL for the Star Wars API
        $url = "https://swapi.dev/api/people/";

        // Get the value of the search query parameter
        $q = $request->query('q');

        // If the search query parameter exists, append it to the base URL
        if ($q) {
            $url .= "?search=" . urlencode($q);
        }

        // Create a new Guzzle HTTP client
        $client = new Client();

        // Make a GET request to the API with the URL constructed above
        $response = $client->get($url);

        // Parse the response JSON into a PHP object
        $data = json_decode($response->getBody());

        // If the search query parameter exists, filter the search results to include
        // only records where the search query matches at least one field of the people
        // resource

        // Note the function has been updated to this version in order to take any value possible, 
        // regardless of the field, but it seems that the API is limited to support searching 
        // made only on the name field
        if ($q) {
            $data->results = array_filter($data->results, function ($item) use ($q) {
                foreach ($item as $field => $value) {
                    if (stripos($value, $q) !== false) {
                        return true;
                    }
                }
                return false;
            });
        }

        // Return the filtered or unfiltered search results as a JSON response
        return response()->json($data);
    }
}
