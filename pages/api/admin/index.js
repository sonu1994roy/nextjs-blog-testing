
import connectDb from "../../../midware/db"
import bcrypt from "bcryptjs"
import admin from "../../../modal/admin"
const  jwt = require('jsonwebtoken');



const Login = async(req, res)=>{
    if (req.method == 'POST') {  
   
            const userid = req.body.userid
             const password = req.body.password
             if( !password || !userid){
                return res.status(400).json({error:"please filld proper"})
                        }
             let adminId= await admin.findOne({userid,userid});
             if (!adminId) {
              return res.status(400).json({error:"not vaild user "})
             }
             const domatch = await bcrypt.compare(password,adminId.password)
             if (!domatch) {
                 return res.status(401).json({error:"not vaild user "})
                }
                else{
                 
                    let token = jwt.sign({_id:adminId.id.toString()},process.env.NEXT_PUBLIC_KEY,{expiresIn:"2h"});
                  
                    const Name =adminId.Name
                    const surname =adminId.surname
                    const userid =adminId.userid
                    const email = adminId.email
                    const img =adminId.img
                    const userAdress=adminId.userAdress
                    const sosail= adminId.sosail
                     const user={Name ,img,surname,sosail,userid,email,userAdress}
      
                    return res.status(200).json( {token:token,user:user})
                }    
    }

    else{
      return   res.status(405).json({error: "server eroor"})
    }
}
export default connectDb( Login);