import { NextRequest, NextResponse } from "next/server";
import { movie_add } from "./logic/movies";

//  Add a User Address
export async function POST(request: NextRequest)
{
    try 
    {
        const data: JSON | any = await request.json();
        const add_movie: any = await movie_add(data); 
        if(add_movie.returncode==0)
        {
            
            return NextResponse
            .json(
                {
                    'returncode': 0,
                    'message': add_movie.message,
                    'output': add_movie.output
                },
                {
                    status: 200,
                });
        
        }
        else
        {
            return NextResponse
            .json(
                {
                    'returncode': add_movie.returncode,
                    'message': add_movie.message,
                    'output': add_movie.output
                },
                {
                    status: add_movie.returncode,
                });
        
        }

    } 
    catch (error: any) 
    {
        return NextResponse.json(
            {
                'returncode': 400,
                'message': error.message,
                'output':[]
            },
            {
                status: 400
            }
        );
    }
}