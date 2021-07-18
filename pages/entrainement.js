import Head from "next/head";
import { connectToDatabase } from "../util/mongodb";
import { dans } from "./_date";

const TitrePage = "Entrainement";
var demande = false;

function programme(listeExos) {
    listeExos = Object.values(listeExos);
    console.log(listeExos);
    let resultat = [];
    let aleatoire;
    console.log(`longeur ${listeExos.lentgth}`);
    for (let i = 0; i < listeExos.lentgth; ++i) {
        aleatoire = Math.floor(Math.random() * (listeExos.lentgth - 1));
        while (dans(aleatoire, resultat))
            aleatoire = Math.floor(Math.random() * (listeExos.lentgth - 1));
        resultat[i] = listeExos[aleatoire];
    }

    return resultat;
}

export default function Entrainement({ exercices }) {
    console.log(programme(exercices));
    if (!demande)
        return (
            <>
                <Head>
                    <title>{TitrePage}</title>
                </Head>
                <main>
                    <p>Test</p>
                </main>
            </>
        );
    return (
        <Head>
            <title> {TitrePage}</title>
        </Head>
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
            exercices: JSON.parse(JSON.stringify(exercices)),
        },
    };
}
