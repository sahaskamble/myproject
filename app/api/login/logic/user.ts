import { getXataClient } from "../../../../xata"

const xata = getXataClient();

export async function sign_user(username: any, password: any) {

  try {
    
    if (xata==undefined || xata==null) {

      return{
        'returncode': 404,
        'message': "Connection with xata is establish",
      }
    }

    let useristrue: Boolean = false;
    console.log(username, " And ", password)

    try {
      
      let user: any = await xata.db.users.filter({username: username}).getAll();
      user = JSON.parse(user);

      if (user == undefined || user == null) {
        return{
          'returncode': 400,
          'message': "User account not found",
        }
      }else{
        useristrue = true;
      }

      if (user == user) {
        return{
          'returncode': 0,
          'message': "User authenticated",
        }
      }else{
        return{
          'returncode': 400,
          'message': "password is incorrect",
        }
      }

    } catch (e:any) {
      return{
        'returncode': 500,
        'message': e.message,
      } 
    }

  } catch (e:any) {
    return{
      'returncode': 503,
      'message': e.message,
    }    
  }
}
