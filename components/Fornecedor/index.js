import Image from "next/image";
import { useEffect, useState } from "react";

import {
  ModalProvider,
  Modal,
  useModal,
  ModalTransition,
} from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";

import {
  Container,
  Wrapper,
  PlusButton,
  WrapperList,
  Card,
  CardNumber,
  WrapperFirstText,
  WrapperSecondText,
  WrapperItem,
} from "./style";
import api from "../../services/api";
import AddFornecedor from "../AddFornecedor";

export default function Fornecedor({ userId }) {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [data, setData] = useState();

  useEffect(() => {
    api.get(`/fornecedor?mascateId=${userId}`).then((response) => {
      console.log(response.data);
      if (response.data.length > 0) {
        setData(response.data);
      }
    });
  }, []);

  function pushFornecedor(item) {
    setData((prev) => [...prev, item]);
  }

  function deleteFornecedor(id) {
    api.delete(`/fornecedor/${id}`).then(() => {
      setData((prev) => prev.filter((item) => item.id !== id));
    });
  }

  return (
    <Container>
      <ModalProvider>
        <Wrapper>
          <PlusButton onClick={openModal}>
            <Image src="/add.svg" width={"50px"} height={"50px"} />
          </PlusButton>

          <Modal
            id="any-unique-identifier"
            isOpen={isModalOpen}
            transition={ModalTransition.BOTTOM_UP}
          >
            <AddFornecedor
              closeModal={closeModal}
              id={userId}
              pushFornecedor={pushFornecedor}
            />
          </Modal>

          <WrapperList>
            {data &&
              data.map((item, index) => (
                <Card>
                  <CardNumber>
                    <p>{index}</p>
                    <Image
                      src="/trash.svg"
                      width="25px"
                      height="25px"
                      onClick={() => {
                        deleteFornecedor(item.id);
                      }}
                    />
                  </CardNumber>
                  <WrapperFirstText>
                    <h2>{item.nome}</h2>
                    <WrapperItem>
                      <Image src="/pin.svg" width="15px" height="20px" />
                      <span>{item.cep}</span>
                    </WrapperItem>
                    <WrapperItem>
                      <Image src="/paper.svg" width="15px" height="20px" />
                      <span>{item.cnpj}</span>
                    </WrapperItem>
                  </WrapperFirstText>
                  <WrapperSecondText>
                    <WrapperItem></WrapperItem>
                    <WrapperItem></WrapperItem>
                    <WrapperItem>
                      <Image src="/mail.svg" width="15px" height="20px" />
                      <span>{item.email}</span>
                    </WrapperItem>
                    <WrapperItem>
                      <Image src="/telephone.svg" width="15px" height="20px" />
                      <span>{item.telefone}</span>
                    </WrapperItem>
                  </WrapperSecondText>
                </Card>
              ))}
          </WrapperList>
        </Wrapper>
      </ModalProvider>
    </Container>
  );
}
