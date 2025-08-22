import { db } from "@@/server/database/db"
export default defineEventHandler(async (event)=>{
    const body = await readBody(event)
    console.log(body)
        const {userId} = event.context.auth()
     const {error} = await db.from('invoices').insert({'user_id':userId,"customername": body.customername,  "typeofproduct": body.typeofproduct, "amount": body.amount, "current_status":body.status,})
    
        if (error) {
        console.error('Error fetching data:', error.message);
        return null;
      }else{
      return{
        Message:"Data Populated Successfully"
      }}
    }
       
     

)
