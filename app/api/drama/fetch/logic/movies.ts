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
            const drama_id: String | any = data['drama_id'];
            let drama: any = await connection.db.drama.filter({id: drama_id}).getAll();
            drama = JSON.parse(drama);
            return {
                'returncode': 0,
                'message': "Drama Fetched.",
                'output': drama
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
            const drama = await connection.db.drama
                .select(["drama", "ratings", "imdb_url", "image"])
                .getAll();

            return {
                'returncode': 0,
                'message': "Drama Fetched.",
                'output': drama
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