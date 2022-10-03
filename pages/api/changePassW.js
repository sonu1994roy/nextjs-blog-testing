import items from "../../modal/admin"
import connectDb from "../../midware/db"
import bcrypt from "bcryptjs"
const  jwt = require('jsonwebtoken');

function Auth(icomp) {
    return (req,res ,next)=>{
     const {authorization} =req.headers
     if (!authorization ) {
         return res.status(401).json({error:"you must be log in"})
     }
     try {
         const {user} = jwt.verify(authorization,process.env.NEXT_PUBLIC_KEY)
        
         return icomp(req,res)
     } catch (error) {
         res.status(400).json({error: "Not Valied user" })
     }
     next()
    }
 }
const handler = Auth( async (req, res) => {
    const {  Vuserid,Vemail,con, OldPassword, Newpassword, ConfirmPass } = req.body
       
    if (req.method == 'POST') {
        if( !Vuserid || !Vemail || !con || !Newpassword || !OldPassword || !ConfirmPass ){
            return res.status(422).json({ error: "please fill proper" })
         }
        if (Newpassword !== ConfirmPass) {
            return res.status(400).json({error:"Confirme Password Not Match "})
        }
        let Id = await items.findOne({email:Vemail});
        
        if (!Id) {
         return res.status(400).json({error:"not find user "})
        }
        const domatch = await bcrypt.compare(OldPassword,Id.password)
        if (!domatch) {
            return res.status(401).json({error:"Not verify Old Password Password "})
           }
           const verfy = con ==Id. userAdress.phone1
           if (!verfy) {
            return res.status(401).json({error:"Not verify Credential "})
           }

               const hashPassword= await bcrypt.hash(Newpassword, 5);
            let p = await items.findByIdAndUpdate(Id._id, 
                {
                userId:Vuserid,
                 password:hashPassword, 
                }
            )
        res.status(200).json({sucsess: "sucsess"})
    }else{
        res.status(400).json({error: "method not allowed"})
    }

})
export default connectDb(handler)