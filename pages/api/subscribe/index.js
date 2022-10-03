import SubscribeUser from "../../../modal/SubscribeUser"
import connectDb from "../../../midware/db"


const User = async (req, res,) => {
    
    const {Subscribe}= req.body
    if (req.method == 'POST') {
        if (!Subscribe) {
            return res.status(422).json({ error: "please Fill A Valied Email ID" })
        }
        const user= await SubscribeUser.findOne({ Subscribe:Subscribe});
        if (user) {
            return res.status(422).json({ error: "Already Exist This Email " })
        }
        try {
            let p = new SubscribeUser({Subscribe})
            await p.save()
        } catch (error) {
            return res.status(404).json({ error: error.message})
        }
        return res.status(201).json({ sucsess: "Thanks For Subscribe For A New Update" })

    } else {
        return res.status(405).json({ error: " method not allowed" }).end()
    }

}

export default connectDb(User)