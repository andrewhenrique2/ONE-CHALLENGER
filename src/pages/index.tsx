import { Container, MessageSection, InputSection } from "@/styles";
import Image from "next/image";
import img from '../assets/img.svg'
import { FaExclamationCircle } from 'react-icons/fa';


export default function Home() {
  return (
  <Container>

    <InputSection>
      <input type="text" placeholder="Digite seu texto" className="text-input" />
      <div className="alert-message">
      <FaExclamationCircle size={20} />
      <span>Apenas letras minúsculas e sem acento.</span>
    </div>      <div className="buttons">
      <button className="Crypto">Criptografar</button>
      <button className="DesCrypto">Descriptografar</button>
      </div>
    </InputSection>

    <MessageSection>
      <Image src={img} alt=""></Image>
      <div className="message-section">
      <h2>Nenhuma mensagem encontrada</h2>
      <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
      </div>
    </MessageSection>


  </Container>

  );
}
