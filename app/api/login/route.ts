import { NextRequest, NextResponse } from "next/server"
import { sign_user } from "./logic/user";

export async function POST(request: NextRequest) {
  try {
    
    const data: JSON | any = await request.json();

    const username: String = data["username"];
    const password: any = data["password"];
    let useristrue = true;

    console.log(username, " And ", password)

    if ((username != null || username != undefined) && (password != null || password != undefined)) {

      const user_authenticated = await sign_user(username, password);

      if (user_authenticated.returncode == 0) {  
        
        return NextResponse.json({
          'returncode': 0,
          'message': "User Authenticated",
        },{ status: 200, })

      }else{
        
        return NextResponse.json({
          'returncode': user_authenticated.returncode,
          'message': user_authenticated.message,
        },{ status: user_authenticated.returncode, })

      }

    }else{
      
      return NextResponse.json({
        'returncode': 400,
        'message': "Please enter a valid value of username",
      },{ status: 400, })

    }

  } catch (e:any) {
    return NextResponse.json({
      'returncode': 400,
      'message': e.message,
    },{ status: 400, })    
  }
}
