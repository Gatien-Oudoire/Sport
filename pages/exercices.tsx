import { connectToDatabase } from "../util/mongodb";
import Link from "next/link";
import Head from "next/head";

export default function Exercices({ listeExos }) {
    return (
        <div className="container">
            <Head>
                <title>Les Exercices</title>
                <link rel="icon" href="/logo.png"/>
            </Head>
            <main>
                <h1 className="title">La liste des exercices:</h1>
                <div className="lesExercices">
                    {listeExos.map((exo : any) => (
                            <div key={exo.id} className="card">
                                <h2>{exo.Nom}</h2>
                                <p>Difficulté {24 - (exo.Difficulte* 4)}/20</p>
                            </div>
                        )
                    )}
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps() : Promise<Object> {
    const { db } = await connectToDatabase();

    const exercices = await db
        .collection("Exercice")
        .find({})
        .sort({ Difficulte: +1 })
        .toArray();

    return {
        props: {
            listeExos: JSON.parse(JSON.stringify(exercices)),
        },
    };
}
