import "../style.css";
import Link from "next/link";
import type { AppProps} from "next/app";
import Home from "./index";

function MonApp({ Component, pageProps } : AppProps) {
    if (Component === Home)
    {return (
        <Component {...pageProps} />
    )}
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
