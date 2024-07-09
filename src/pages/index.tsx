import { useState, useEffect, useRef } from 'react';
import { Container, Wrapper, MessageSection, InputSection, Header, ButtonSection } from "@/styles";
import Image from "next/image";
import img from '../assets/img.svg'
import { FaExclamationCircle } from 'react-icons/fa';
import logo from '../assets/logo.svg'

export default function Home() {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null); 

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <Container>

      <Header>
        <Image src={logo} alt="Logo" />
      </Header>
      <Wrapper>
        <div>
          <InputSection>
            <textarea
              ref={textareaRef}
              placeholder="Digite seu texto"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="text-input"
            />
          </InputSection>

          <ButtonSection>
            <div className="alert-message">
              <FaExclamationCircle size={20} color="gray" />
              <span>Apenas letras minúsculas e sem acento.</span>
            </div>
            <div className="buttons">
              <button className="Crypto">Criptografar</button>
              <button className="DesCrypto">Descriptografar</button>
            </div>
          </ButtonSection>
        </div>

        <MessageSection>
          <Image src={img} alt="Ilustração" />
          <div className="message-section">
            <h2>Nenhuma mensagem encontrada</h2>
            <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
          </div>
        </MessageSection>
      </Wrapper>
    </Container>
  );
}
