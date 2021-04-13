import { NextApiRequest,NextApiResponse } from 'next';
import { IncomingMessage, ServerResponse } from 'http';

import  DB from '@database'
const allAvos =async(req:NextApiRequest,res:NextApiResponse) => {
  const id=  req.query.id
    const db = new DB()
   const allEntries= await db.getAll()
   const entry = await db.getById(id as string)
   const length= allEntries.length
   //res.statusCode=200 //ok
 //  res.setHeader('Content-type','application/json')
   // res.end(JSON.stringify({data:entry,length,}))
   res.status(200).json(entry)
}

export default allAvos