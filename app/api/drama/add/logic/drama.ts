// /api/address/insert/logic/add.ts

import { getXataClient } from "@/src/xata";
import { XataFile } from "@xata.io/client"; // Generated with CLI

// Database Connection Pool
const connection = getXataClient();

// Add a Address of a user 
export async function drama_add(data: JSON | any) 
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

        const drama: String | any = data['drama'];
        const rating: any  = data['rating'];
        const imdb_url: String | any = data['imdb_url'];
        const image: ImageData | any = data['image'];
        

        try 
        {
            const drama__add = await connection.db.drama.create(
            {
                drama: drama,
                ratings: rating,
                imdb_url: imdb_url,
                image: [XataFile.fromBase64(image)],
            });

            return {
                'returncode': 0,
                'message': 'Drama Added.',
                'output': drama__add
            }
        } 
        catch (error:any)
        {
            return(
                {
                    'returncode': 500,
                    'message': error.message,
                    'output':[]
                }
            );
        }
        
    } 
    catch (error:any) 
    {
        return(
            {
                'returncode': 500,
                'message': error.message,
                'output':[]
            }
        );
    }    
}