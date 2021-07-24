import Head from "next/head";
import Link from "next/link";

export default function Home() : Object {
    return (
        <div className="container">
            <Head>
                <title>Le Sport de Gatien</title>
                <link rel="icon" href="/logo.png" />
            </Head>

            <main>
                <h1 className="title">Bienvenue sur le portail du sport</h1>

                <div className="grid">
                    <Link href="./stats">
                        <a className="card">
                            <h3>Statistiques &rarr;</h3>
                            <p>
                                Toutes les statistiques à propos des
                                entrainements
                            </p>
                        </a>
                    </Link>

                    <Link href="./nutrition">
                        <a href="https://nextjs.org/learn" className="card">
                            <h3>Nutrition &rarr;</h3>
                            <p>
                                Les valeurs caloriques pour une prise de masse
                                ou une sèche
                            </p>
                        </a>
                    </Link>

                    <Link href="./entrainement">
                        <a
                            href="https://github.com/vercel/next.js/tree/master/examples"
                            className="card"
                        >
                            <h3>Entrainement &rarr;</h3>
                            <p>Ajouter un nouvel entrainement</p>
                        </a>
                    </Link>

                    <Link href="./exercices">
                        <a className="card">
                            <h3>Exercices &rarr;</h3>
                            <p>Ajouter ou consulter des exercices</p>
                        </a>
                    </Link>
                </div>
            </main>

            <footer>
                <a href="https://gatien-oudoire.com/"> Gatien Oudoire</a> @ 2021
            </footer>

            <style jsx>{`
                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .grid {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;

                    max-width: 800px;
                    margin-top: 3rem;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }

                .title a {
                    color: #0070f3;
                    text-decoration: none;
                }

                .title a:hover,
                .title a:focus,
                .title a:active {
                    text-decoration: underline;
                }

                .title,
                .description {
                    text-align: center;
                }

                .subtitle {
                    font-size: 2rem;
                }

                .description {
                    line-height: 1.5;
                    font-size: 1.5rem;
                }

                code {
                    background: #fafafa;
                    border-radius: 5px;
                    padding: 0.75rem;
                    font-size: 1.1rem;
                    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New,
                        monospace;
                }

                .card:hover,
                .card:focus,
                .card:active {
                    color: #0070f3;
                    border-color: #0070f3;
                }

                .card h3 {
                    margin: 0 0 1rem 0;
                    font-size: 1.5rem;
                }

                .card p {
                    margin: 0;
                    font-size: 1.25rem;
                    line-height: 1.5;
                }

                .logo {
                    height: 1em;
                }

                @media (max-width: 600px) {
                    .grid {
                        width: 100%;
                        flex-direction: column;
                    }
                }
            `}</style>
        </div>
    );
}