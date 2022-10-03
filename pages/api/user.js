import items from "../../modal/admin"
import connectDb from "../../midware/db"
const  jwt = require('jsonwebtoken');

// function Auth(icomp) {
//     return (req,res ,next)=>{
//      const {authorization} =req.headers
//      if (!authorization ) {
//          return res.status(401).json({error:"you must be log in"})
//      }
//      try {
//          const {user} = jwt.verify(authorization,process.env.NEXT_PUBLIC_KEY)
        
//          return icomp(req,res)
//      } catch (error) {
//          res.status(400).json({error: "plese login" })
//      }
//      next()
//     }
//  }

const creatNewItems = async (req, res,) => {
    
    const {  Name,surname, userid, email,password,  adress1, adress2, phone1,phone2,img, whatsaap, fasebook, twiter, instagram, linkedin} = req.body
        if (req.method == 'POST') {
        const item = await items.findOne({userid:userid});
        console.log(item);
        if (item) {
            return res.status(422).json({ error: "Already exist items " })
        }
        try {
            let p = new items({ 
                Name,
                surname,
                 userid, 
                 img,
                 email, 
                 password, 
                 userAdress:{

                     adress1, 
                     adress2, 
                     phone1,
                     phone2, 
                 },
                 sosail:{
                    
                     whatsaap, 
                     fasebook, 
                     twiter, 
                     instagram,
                      linkedin
                 }
                })
            console.log(p);
            await p.save()
        } catch (error) {
            return res.status(404).json({ error: error.message})
        }
        return res.status(201).json({ sucsess: "sucsess" })

    } else {
        return res.status(405).json({ error: " method not allowed" }).end()
    }

}

export default connectDb(creatNewItems)