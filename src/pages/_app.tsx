import { Header } from "@/styles";
import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";


globalStyles();
export default function App ({ Component, pageProps }: AppProps) {
    return  <Component {...pageProps} />
};

