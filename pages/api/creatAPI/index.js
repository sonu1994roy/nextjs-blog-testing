import items from "../../../modal/postitem"
import connectDb from "../../../midware/db"
const  jwt = require('jsonwebtoken');
function Auth(icomp) {
    return (req,res ,next)=>{
     const {authorization} =req.headers
     if (!authorization ) {
         return res.status(401).json({error:"you must be login"})
     }
     try {
         const {user} = jwt.verify(authorization,process.env.NEXT_PUBLIC_KEY)
        
         return icomp(req,res)
     } catch (error) {
         res.status(400).json({error: "You Are Not Valied user" })
     }
     next()
    }
 }

const creatNewItems = Auth( async (req, res,) => {
    
    const {title,slug,msg1,img,storylink,msg2, desc, type,price, catogery}= req.body
    if (req.method == 'POST') {
        if (!title || !slug || !msg2 ||!desc || !type || !catogery) {
            return res.status(422).json({ error: "please fill proper" })
        }
        const item = await items.findOne({ slug:slug});
        if (item) {
            return res.status(422).json({ error: "Already exist items " })
        }
        try {
            let p = new items({title,slug,msg1,img,storylink,msg2,price, desc, type, catogery})
            console.log(p);
            await p.save()
        } catch (error) {
            return res.status(404).json({ error: error.message})
        }
        return res.status(201).json({ sucsess: "sucsess" })

    } else {
        return res.status(405).json({ error: " method not allowed" }).end()
    }

})

export default connectDb(creatNewItems)