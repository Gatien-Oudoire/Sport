import Head from "next/head";
import { connectToDatabase } from "../util/mongodb";

const TitrePage = "Entrainement";
var demande = false;

function dans(a : any, tab : Array<any>) : boolean {
  for (let x = 0; x < tab.length; ++x) {
    if (a == tab[x]) return true;
  }
  return false;
}

function programme(listeExos : Array<string>) : Array<string> {
  listeExos = Object.values(listeExos);
  console.log(listeExos);
  let resultat = [];
  let aleatoire;
  for (let i = 0; i < listeExos.length; ++i) {
    aleatoire = Math.floor(Math.random() * (listeExos.length - 1));
    while (dans(aleatoire, resultat))
      aleatoire = Math.floor(Math.random() * (listeExos.length - 1));
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
          <p>En cours de création</p>
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
