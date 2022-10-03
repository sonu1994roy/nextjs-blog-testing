// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import postitem from "../../modal/postitem"
import connectDb from "../../midware/db"


const handler = async (req, res) =>{
    let itms = await postitem.find()
    res.status(200).json({itms })
  }

export default  connectDb(handler)