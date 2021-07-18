import "../style.css";
import Link from "next/link";

function MonApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <footer>
                <Link href="/">
                    <a>Retour à l'accueil</a>
                </Link>
            </footer>
        </>
    );
}

export default MonApp;
