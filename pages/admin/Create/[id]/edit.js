import Editform from "../index"
import { parseCookies } from "nookies";

export default Editform;
export async function getServerSideProps(ctx) {
    const {token}= parseCookies(ctx)
    if (!token ) {
        const {res} = ctx
        res.writeHead(302,{Location:"/athouticate"})
        res.end()
    }
    return{
        props:{msg:""}
    }
    }