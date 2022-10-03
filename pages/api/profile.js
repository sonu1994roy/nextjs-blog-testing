import items from "../../modal/admin"
import connectDb from "../../midware/db"
import bcrypt from "bcryptjs"
const jwt = require('jsonwebtoken');

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
         res.status(400).json({error: "Not valid User" })
     }
     next()
    }
 }
const handler = Auth( async (req, res) => {
    const { Name, surname, userid, email,  adress1, adress2, phone1, phone2, img, whatsaap, c, fasebook, twiter, instagram, linkedin } = req.body

    if (req.method == 'POST') {
        console.log(req.body);
         if( !Name || !surname || !userid || !email || !adress1 || !adress2 || !phone1 || !whatsaap || !c ){
            return res.status(422).json({ error: "please fill proper" })
         }

        let Id = await items.findOne({ userid: userid });

        if (!Id) {
            return res.status(400).json({ error: "not find user " })
        }
        const domatch = await bcrypt.compare(c, Id.password)
        if (!domatch) {
            return res.status(401).json({ error: "Not verify Password " })
        }
        console.log(domatch);

        try {
            let p = await items.findByIdAndUpdate(Id._id,
                {
                    Name,
                    surname,
                    img,
                    email,
                    userAdress: {

                        adress1,
                        adress2,
                        phone1,
                        phone2,
                    },
                    sosail: {

                        whatsaap,
                        fasebook,
                        twiter,
                        instagram,
                        linkedin
                    }
                }
            )
            console.log(p);
            
        } catch (error) {
            return res.status(404).json({ error: error.message })
        }
        res.status(200).json({ sucsess: "sucsessFullu Update please log in again" })

    }
    else {
    res.status(400).json({ error: "method not allowed" })
    }

})
export default connectDb(handler)