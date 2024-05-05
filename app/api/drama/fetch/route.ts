// http://localhost:3000/api/address/fetch/address

import { NextRequest, NextResponse } from "next/server";
import { single, all } from "./logic/movies";

//  Fetch Single Drama
export async function POST(request: NextRequest)
{
    try 
    {
        const data: JSON | any = await request.json();
        const fetch_result: any = await single(data); 
        if(fetch_result.returncode==0)
        {
            
            return NextResponse
            .json(
                {
                    'returncode': 0,
                    'message': fetch_result.message,
                    'output': fetch_result.output
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
                    'returncode': fetch_result.returncode,
                    'message': fetch_result.message,
                    'output': fetch_result.output
                },
                {
                    status: fetch_result.returncode,
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

// Fetch All Dramas
export async function GET()
{
    try 
    {
        const fetch_result: any = await all(); 
        if(fetch_result.returncode==0)
        {
            
            return NextResponse
            .json(
                {
                    'returncode': 0,
                    'message': fetch_result.message,
                    'output': fetch_result.output
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
                    'returncode': fetch_result.returncode,
                    'message': fetch_result.message,
                    'output': fetch_result.output
                },
                {
                    status: fetch_result.returncode,
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
