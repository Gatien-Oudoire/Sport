import "../style.css";
import Link from "next/link";
import type { AppProps} from "next/app";

function MonApp({ Component, pageProps } : AppProps) {
    if (Object.values(pageProps).length == 0)
    return <Component {...pageProps} />
    return (
        <>
            <Component {...pageProps} />
            <footer>
                <Link href="/">
                    <a>Retour à l&apos;accueil</a>
                </Link>
            </footer>
        </>
    );
}

export default MonApp;
