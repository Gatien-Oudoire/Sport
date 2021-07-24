import Head from "next/head";
import ReactDOM from "react-dom";
import { connectToDatabase } from "../util/mongodb";

const TitrePage = "Entrainement";

class Exercice
{
    Difficulte : number;
    Nom : string;
    Membres : Array<string>;
constructor(Nom : string, Difficulte : number, Membres : Array<string> = []) {
    this.Nom = Nom;
    this.Difficulte = Difficulte;
    this.Membres = Membres;
}

}

function genererProgramme(a : Array<any>) : Array<any> {

    /**
     *  5 niveaux de difficulté
     *  5 Très Facile
     *  1 Très dur
     * */ 
    let resultat : Array<Object> = [];
  a = Object.values(a);
  let listeExercices = [[], [], [], [], []];
  for (let i = 0; i < a.length; ++i)
    listeExercices[a[i].Difficulte-1].push(new Exercice(a[i].Nom, a[i].Difficulte));

    for (let i = 1; i < listeExercices.length; ++i)
    {
        resultat.push(listeExercices[i][Math.floor(Math.random() * listeExercices[i].length)]);
    }

  return resultat;
}

function carteExo(exo : Exercice)
{
    return (
    <div className="card">
        <h1>{exo.Nom}</h1>
        <p>Reps: {exo.Difficulte**2} </p>
    </div>
    )
}

export default function Entrainement({ exercices }) {
  return (
      <>
    <Head>
      <title> {TitrePage}</title>
      <link rel="icon" href="/logo.png"/>
    </Head>
    <main>
        <div id="root">
            {genererProgramme(exercices).map(exo => carteExo(exo))}
        </div>
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
