import items from "../../../modal/postitem"
import connectDb from "../../../midware/db"
const  jwt = require('jsonwebtoken');

connectDb();


function Auth(icomp) {
   return (req,res)=>{
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
    
}
}

export default Auth( async (req, res) => {
    const { method, body, query: { id }, } = req;



    switch (method) {
        case 'GET':
            try {
                const task = await items.findById(id);
                if (!task) return res.status(404).json({ error: 'itms dose not exsits' })
                // await runMiddlleware(req, res);
                return res.status(200).json(task)
            } catch (error) {
                return res.status(400).json({ error: error.message })
            }

        case 'DELETE':
            try {
                const deletTask = await items.findByIdAndDelete(id);
               
                if (!deletTask) {

                    return res.status(404).json({ error: 'itms dose not exsits' })
                }

                    return res.status(204).json()
                
                
            } catch (error) {
                return res.status(400).json({ error: error.message })
            }
            case 'PUT':
                try {
                    const updatedTask = await items.findByIdAndUpdate(id, body,{
                        new:true,
                        runValidators:true
                    });
                   
                    if (!updatedTask){
                        return res.status(404).json({ error: 'itms dose not exsits' })
                    }
                        return res.status(200).json({updatedTask ,sucsess:"sucsess fully update"})
                    
                    
                } catch (error) {
                    return res.status(400).json({ error: error.message })
                }

        default:
            return res.status(400).json( {error:'this method is not supported'})
            break;
    }

})