import "../style.css";
import Link from "next/link";
import type { AppProps} from "next/app";

function MonApp({ Component, pageProps } : AppProps) {
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
