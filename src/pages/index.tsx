import { useState, useEffect, useRef } from 'react';
import { Container, Wrapper, MessageSection, InputSection, Header, ButtonSection } from "@/styles";
import img from '../assets/img.svg';
import { FaExclamationCircle } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import Image from 'next/image';
import CryptoJS from 'crypto-js'; // importando biblioteca para criptografrar os textos

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
  const [text, setText] = useState<string>("");
  const [encryptedText, setEncryptedText] = useState<string>("");
  const [operation, setOperation] = useState<string>(""); 
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

  // Criptografa o texto e atualiza o estado.
  const handleEncrypt = (): void => {
    const encrypted = encryptText(text, passphrase);
    setText(encrypted);
    setEncryptedText(encrypted);
    setOperation("encrypt");
  };

  // Descriptografa o texto e atualiza o estado.
  const handleDecrypt = (): void => {
    const decrypted = decryptText(text, passphrase);
    setText(decrypted);
    setEncryptedText(decrypted);
    setOperation("decrypt");
  };

  // Função de copiar o texto 
  const handleCopy = (): void => {
    navigator.clipboard.writeText(encryptedText);
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
              <button className="Crypto" onClick={handleEncrypt}>Criptografar</button>
              <button className="DesCrypto" onClick={handleDecrypt}>Descriptografar</button>
            </div>
          </ButtonSection>
        </div>

        <MessageSection>
          {encryptedText && operation && (
            <div className="message-section">
              {operation === "encrypt" ? (
                <h2>Seu texto foi criptografado com sucesso!</h2>
              ) : (
                <h2>Seu texto foi descriptografado com sucesso!</h2>
              )}
              <p>{encryptedText}</p>
              <button onClick={handleCopy}>Copiar</button>
            </div>
          )}
          {!encryptedText && !operation && (
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
