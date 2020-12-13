import { useRef } from "react";

import {
  Container,
  Wrapper,
  WrapperInputs,
  WrapperLocation,
  WrapperInputsLocation,
  WrapperButtons,
  CloseButton,
  AddButton,
} from "./style";
import api from "../../services/api";

export default function AddFornecedor({ closeModal, id, pushFornecedor }) {
  const emailRef = useRef();
  const nomeRef = useRef();
  const cepRef = useRef();
  const cnpjRef = useRef();
  const telefoneRef = useRef();

  function handleFornecedor() {
    const nome = nomeRef.current.value;
    const email = emailRef.current.value;
    const cep = cepRef.current.value;
    const cnpj = cnpjRef.current.value;
    const telefone = telefoneRef.current.value;
    const mascateId = Number(id);

    api
      .post("/fornecedor", {
        nome,
        email,
        cep,
        cnpj,
        telefone,
        mascateId,
      })
      .then((res) => {
        const { data } = res;

        if (data) {
          pushFornecedor(data);
        }
        closeModal();
      });
  }

  return (
    <Container>
      <Wrapper>
        <WrapperInputs>
          <h3>Nome</h3>
          <input type={"text"} ref={nomeRef} />
        </WrapperInputs>
        <WrapperInputs>
          <h3>Email</h3>
          <input type={"email"} ref={emailRef} />
        </WrapperInputs>

        <WrapperLocation>
          <WrapperInputsLocation>
            <h3>CEP</h3>
            <input type={"text"} ref={cepRef} />
          </WrapperInputsLocation>

          <WrapperInputsLocation>
            <h3>CNPJ </h3>
            <input type={"text"} ref={cnpjRef} />
          </WrapperInputsLocation>
        </WrapperLocation>

        <WrapperInputs>
          <h3>Telefone</h3>
          <input type={"text"} ref={telefoneRef} />
        </WrapperInputs>

        <WrapperButtons>
          <CloseButton onClick={closeModal}>Cancelar</CloseButton>
          <AddButton onClick={handleFornecedor}>Adicionar</AddButton>
        </WrapperButtons>
      </Wrapper>
    </Container>
  );
}
