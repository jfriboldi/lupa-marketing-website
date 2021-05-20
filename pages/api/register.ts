import { nanoid } from "nanoid";
import { connectToDatabase } from "../../utils/mongodb";
import { NextApiRequest, NextApiResponse } from 'next'



export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();
    let table;

    if (req.body.table === 'atendimento') {
      table = 'contato'
    } else {
      table = 'email-newsletter'
    }

    
    const entry = await db
      .collection(table)
      .insertOne({
        _id: nanoid(12),
        ...req.body,
        createdAt: new Date().toDateString(),
      })
      .then(console.log("Entry Created"));
    return res.json({ a: entry });
  }
  return res.status(404).json({
    error: {
      code: "not_found",
      message:
        "The requested endpoint was not found or doesn't support this method.",
    },
  });
};
