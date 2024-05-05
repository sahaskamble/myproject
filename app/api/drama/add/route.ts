import { NextRequest, NextResponse } from "next/server";
import { drama_add } from "./logic/drama";

//  Add a User Address
export async function POST(request: NextRequest)
{
    try 
    {
        const data: JSON | any = await request.json();
        const add_drama: any = await drama_add(data); 
        if(add_drama.returncode==0)
        {
            
            return NextResponse
            .json(
                {
                    'returncode': 0,
                    'message': add_drama.message,
                    'output': add_drama.output
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
                    'returncode': add_drama.returncode,
                    'message': add_drama.message,
                    'output': add_drama.output
                },
                {
                    status: add_drama.returncode,
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