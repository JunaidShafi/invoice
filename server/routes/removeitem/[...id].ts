import { db } from "@@/server/database/db"
export default defineEventHandler(async(event)=>{
    try {
        console.log(event.context.params.id)
        const response = await db
        .from('invoices')
        .delete()
        .eq("id",event.context.params.id)

    } catch (error) {
        console.log(error)
        
    }
})