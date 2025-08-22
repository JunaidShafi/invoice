import { db } from "@@/server/database/db"
enum status{
   paid,unpaid,overdue
}
interface datatype{
   id: number,
   customername:string,
   typeofproduct:string,
   amount:number,
   current_status:status,
   user_id: any,
   
}

async function getInvoices(userId:string|null) {

  const { data,error} = await db.from('invoices').select().eq('user_id',userId)

    if (error) {
    console.error('Error fetching data:', error.message);
    return null;
  }
  return data 
}

export default defineEventHandler(async (event)=>{
        const {userId} = event.context.auth()

   const invdata = getInvoices(userId)
   return    invdata 
   
})
