import { CrossIcon } from "../icons";
import useClickOutside from "../../utils/hooks/useClickOutside";
import { useEffect, useRef, useState } from "react";
import {
  CloseCotnainer,
  ContentContainer,
  ModalContainer,
} from "./info-modal.styled";

type InfoModalProps = {
  active: boolean;
  disableModal: () => void;
};

const InfoModal = ({ active, disableModal }: InfoModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    disableModal();
  };

  useClickOutside(contentRef, closeModal, modalRef);

  useEffect(() => {
    if (active) {
      openModal();
    } else {
      closeModal();
    }
  }, [active]);

  return (
    <ModalContainer opened={isOpen} ref={modalRef}>
      <ContentContainer ref={contentRef}>
        <CloseCotnainer onClick={() => closeModal()}>
          <CrossIcon />
        </CloseCotnainer>
      </ContentContainer>
    </ModalContainer>
  );
};

export default InfoModal;
