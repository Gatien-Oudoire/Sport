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

function programme(listeExos : Array<string>) : Array<any> {
  listeExos = Object.values(listeExos);
  console.log(listeExos);
  let resultat = [];
  let aleatoire;
  for (let i = 0; i < Math.round(listeExos.length / 2) + 1; ++i) {
    aleatoire = Math.floor(Math.random() * (listeExos.length - 1));
    while (dans(aleatoire, resultat))
      aleatoire = Math.floor(Math.random() * (listeExos.length - 1));
    resultat[i] = listeExos[aleatoire];
  }

  return resultat;
}

export default function Entrainement({ exercices }) {
  console.log(programme(exercices));
  return (
      <>
    <Head>
      <title> {TitrePage}</title>
    </Head>

    <main>
        {programme(exercices).map( exo => {
            return (
                <div className="card">
                    <h1>{exo.Nom}</h1>
                    <h3> Répétitions : {(parseInt(exo.Difficulte, 10)**2) + 1}</h3>
                </div>
            )
        })}
    </main>
    </>
  );
}

export async function getServerSideProps(): Promise<Object> {
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
