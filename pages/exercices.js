import { connectToDatabase } from "../util/mongodb";
import Link from "next/link";
import Head from "next/head";

export default function Exercices({ listeExos }) {
    return (
        <div className="container">
            <Head>
                <title>Les Exercices</title>
            </Head>
            <main>
                <h1 className="title">La liste des exercices:</h1>
                <div id="lesExercices">
                    {listeExos.map((exo) => {
                        return (
                            <div className="card">
                                <h2>{exo.Nom}</h2>
                                <p>Difficulté {exo.Difficulte}/5</p>
                            </div>
                        );
                    })}
                </div>
            </main>
            <style jsx>
                {`
                    #lesExercices {
                        display: flex;
                        text-align: center;
                        flex-direction: column;
                    }
                `}
            </style>
        </div>
    );
}

export async function getServerSideProps() {
    const { db } = await connectToDatabase();

    const exercices = await db
        .collection("Exercice")
        .find({})
        .sort({ Difficulte: -1 })
        .toArray();

    return {
        props: {
            listeExos: JSON.parse(JSON.stringify(exercices)),
        },
    };
}
