// /api/address/fetch/address/logic/address.ts
import { getXataClient } from "@/src/xata";

// Database Connection Pool
const connection = getXataClient();

// Fetch a Single Movie Details
export async function single(data: JSON | any) 
{
    try
    {
        if(connection==undefined || connection==null)
        {
            return {
                'returncode': 404,
                'message': "Connection With Xata wasn't established.",
                'output': []
            }
        }

        try 
        {
            const movie_id: String | any = data['movie_id'];
            let movie: any = await connection.db.movies.filter({id: movie_id}).getAll();
            movie = JSON.parse(movie);
            return {
                'returncode': 0,
                'message': "Movie Fetched.",
                'output': movie
            }
        } 
        catch (error: any)
        {
            return {
                'returncode': 500,
                'message': error.message,
                'output': []
            }
        }

    }
    catch(error: any)
    {
        return {
            'returncode': 503,
            'message': error.message,
            'output': []
        }
    }
}

// Fetch a Single Movie Details
export async function all() 
{
    try
    {
        if(connection==undefined || connection==null)
        {
            return {
                'returncode': 404,
                'message': "Connection With Xata wasn't established.",
                'output': []
            }
        }

        try 
        {
            const movie = await connection.db.movies
                .select(["movie", "rating", "imdb_url", "image"])
                .getAll();

            return {
                'returncode': 0,
                'message': "Movies Fetched.",
                'output': movie
            }
        } 
        catch (error: any)
        {
            return {
                'returncode': 500,
                'message': error.message,
                'output': []
            }
        }

    }
    catch(error: any)
    {
        return {
            'returncode': 503,
            'message': error.message,
            'output': []
        }
    }
}