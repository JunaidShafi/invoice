import { db } from "@@/server/database/db"
export default defineEventHandler(async(event)=>{
    try {
        const response = await db
        .from('invoices')
        .delete()
        .eq("id",event.context.params.id)

    } catch (error) {
        console.log(error)
        
    }
})