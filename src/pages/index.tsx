import React, { useState, useRef, useEffect } from 'react';
import { Container, Wrapper, MessageSection, InputSection, Header, ButtonSection } from "@/styles";
import img from '../assets/img.svg';
import { FaExclamationCircle } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import Image from 'next/image';
import CryptoJS from 'crypto-js'; // Importando biblioteca para criptografar os textos

// Função de criptografia usando AES
const encryptText = (text: string, passphrase: string): string => {
  return CryptoJS.AES.encrypt(text, passphrase).toString();
};

// Função de descriptografia usando AES
const decryptText = (ciphertext: string, passphrase: string): string => {
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    return 'Texto inválido para descriptografar';
  }
};

export default function Home() {
  const [text, setText] = useState<string>(""); // Estado para armazenar o texto digitado pelo usuário
  const [displayText, setDisplayText] = useState<string>(""); // Estado para exibir o texto criptografado/descriptografado
  const [isEncrypted, setIsEncrypted] = useState<boolean>(false); // Estado para verificar se o texto está criptografado
  const [showMessage, setShowMessage] = useState<boolean>(true); // Estado para controlar a exibição da mensagem
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Ajusta a altura do <textarea> para scrollHeight, a altura do conteúdo.
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  // Defina uma frase secreta para a criptografia
  const passphrase = "your-secret-passphrase";

  // Função de criptografia
  const handleEncrypt = (): void => {
    if (!isEncrypted) {
      const encrypted = encryptText(text, passphrase);
      setText(encrypted); // Atualiza o estado do texto com o texto criptografado
      setDisplayText(encrypted); // Atualiza o estado do texto a ser exibido com o texto criptografado
      setIsEncrypted(true); // Define o estado como criptografado
      setShowMessage(false); // Esconde a mensagem inicial
    } else {
      alert("O texto já está criptografado.");
    }
  };

  // Função de descriptografia
  const handleDecrypt = (): void => {
    if (isEncrypted) {
      const decrypted = decryptText(text, passphrase);
      setText(decrypted); // Atualiza o estado do texto com o texto descriptografado
      setDisplayText(decrypted); // Atualiza o estado do texto a ser exibido com o texto descriptografado
      setIsEncrypted(false); // Define o estado como não criptografado
    } else {
      alert("O texto não está criptografado.");
    }
  };

  // Função de copiar o texto
  const handleCopy = (): void => {
    navigator.clipboard.writeText(displayText);
  };

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
              onChange={(e) => {
                setText(e.target.value);
                if (!e.target.value) setShowMessage(true); // Mostrar a mensagem se o textarea estiver vazio
              }}
              className="text-input"
            />
          </InputSection>

          <ButtonSection>
            <div className="alert-message">
              <FaExclamationCircle size={20} color="gray" />
              <span>Insira seu texto e clique em criptografar.</span>
            </div>
            <div className="buttons">
              <button className="Crypto" onClick={handleEncrypt}>Criptografar</button>
              <button className="DesCrypto" onClick={handleDecrypt}>Descriptografar</button>
            </div>
          </ButtonSection>
        </div>

        <MessageSection>
          {!showMessage ? (
            <div className="message-section">
              {isEncrypted ? (
                <h2>Seu texto foi criptografado com sucesso!</h2>
              ) : (
                <h2>Seu texto foi descriptografado com sucesso!</h2>
              )}
              <p>{displayText}</p>
              <button onClick={handleCopy}>Copiar</button>
            </div>
          ) : (
            <>
              <Image src={img} alt="Ilustração" />
              <div className="message-section">
                <h2>Nenhuma mensagem encontrada</h2>
                <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
              </div>
            </>
          )}
        </MessageSection>
      </Wrapper>
    </Container>
  );
}
