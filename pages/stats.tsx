import { Line, defaults } from "react-chartjs-2";
import { connectToDatabase } from "../util/mongodb";

interface AppProps {
    Line?: any
};

const hauteur = 450;
const largeur = 850;

var dataPoids = {
    labels: [],
    datasets: [
        {
            label: "poids en kg",
            data: [],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
        },
    ],
};

var dataImc = {
    labels: [],
    datasets: [
        {
            label: "IMC",
            data: [],
            fill: true,
            backgroundColor: "rgba(255,78,40,0.2)",
            borderColor: "rgba(255,78,40,1)",
        },
    ],
};

function formaterDate(val) : string {
    let a = val.split("-");
    return a[2].split("T")[0] + "/" + a[1] + "/" + a[0];
}

export default function stats({ poids }) : Object {
    for (let i = 0; i < poids.length; ++i) {
        dataPoids.labels[i] = formaterDate(poids[i].Date);
        dataPoids.datasets[0].data[i] = parseFloat(poids[i].Valeur);
        dataImc.labels[i] = formaterDate(poids[i].Date);
        dataImc.datasets[0].data[i] =
            Math.round((parseFloat(poids[i].Valeur) / 3.2041) * 100) / 100;
    }
    return (
        <>
            <h1 className="title"> Les Statistiques</h1>
            <div className="grille">
                <div className="Poids">
                    <Line type="line" data={dataPoids} height={hauteur} width={largeur} />
                </div>
                <div className="Imc">
                    <Line type="line" data={dataImc} height={hauteur} width={largeur} /> 
                </div>
                <style jsx>{`
                    .grille {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-wrap: wrap;
                        background-color: #f7f7ff;
                    }
                `}</style>
            </div>
        </>
    );
}

export async function getServerSideProps() {
    const { db } = await connectToDatabase();

    const DonnePoids = await db.collection("Poids").find({}).toArray();

    return {
        props: {
            poids: JSON.parse(JSON.stringify(DonnePoids)),
        },
    };
}
