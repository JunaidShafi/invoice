import { db } from "@@/server/database/db"
export default defineEventHandler(async(event)=>{
      const body = await readBody(event)
    try {
    await db
        .from('invoices')
        .update({current_status:body.stat})
        .eq("id",event.context.params.id)

    } catch (error) {
        console.log(error)
        
    }
})