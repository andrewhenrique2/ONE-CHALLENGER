import { Header } from "@/styles";
import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";
import Image from "next/image";
import logo from '../assets/logo.svg'

globalStyles();
export default function App ({ Component, pageProps }: AppProps) {
    return (
        
        <>

        <Header>
            <Image src={logo} alt=""></Image>
        </Header>
        
        <Component {...pageProps} />
        </>
)
}

