
import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) =>  {
    const { db } = await connectToDatabase();

    const exercices = await db
        .collection("Exercice")
        .find({})
        .sort({ Difficulte: -1})
        .limit(20)
        .toArray();
    
    res.json(exercices)
    
};

