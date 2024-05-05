
import { getXataClient } from "@/src/xata";
import bcrypt from 'bcrypt';

// Database Connection Pool
const connection = getXataClient();

// Fetch a Single User Credentials
export async function forget_password(data: JSON | any) 
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
            const username: String = data['username'];
            const password: any = data['password'];
            const new_password: any = data['new_password'];

            let user_check: any = await connection.db.users.filter({username: username}).getAll();
            user_check = JSON.parse(user_check);

            // Check for Username
            try
            {
                if(user_check[0].username==username)
                {
                    const match = await bcrypt.compare(password, user_check[0].password);
                    if(match)
                    {
                        const hashedPassword = await bcrypt.hash(new_password, 10);
                        const user = await connection.db.users.update(user_check[0].id, {
                            password: hashedPassword
                        });

            
                        return {
                            'returncode': 0,
                            'message': 'Password Changed.',
                            'output': user
                        }
                    }
                    else
                    {
                        return {
                            'returncode': 400,
                            'message': "Password doesn't Match.",
                            'output': []
                        }
                    }

                }
    
            }
            catch(error)
            {
                return {
                    'returncode': 400,
                    'message': "Account Not Found.",
                    'output': []
                }
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