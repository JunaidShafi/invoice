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
   let paid:number=0
   let unpaid:number =0
  const { data,error} = await db.from('invoices').select().eq('user_id',userId).order("id",{ascending:true})

    if (error) {
    console.error('Error fetching data:', error.message);
    return null;
  }

 data.map((i)=>{i.current_status==="paid"? paid+=1 : unpaid+=1 })


 const response={
   inv:data,
   paid:paid,
   unpaid:unpaid
 }

    
  return response
}

export default defineEventHandler(async (event)=>{
        const {userId} = event.context.auth()

   const invdata = getInvoices(userId)
   return    invdata 
   
})
