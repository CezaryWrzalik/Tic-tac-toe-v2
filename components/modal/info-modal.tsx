import { useEffect, useRef } from "react";
import useClickOutside from "../../helpers/useClickOutside";
import classes from "./info-modal.module.css";

type InfoModalProps = {
  active: boolean;
  disableModal: () => void;
};

const InfoModal = ({ active, disableModal }: InfoModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

	
  const openModal = () => {
		const modal = modalRef.current;
		modal?.classList.add(classes.modalActive);
  };
	
	const closeModal = () => {
		const modal = modalRef.current;
		modal?.classList.remove(classes.modalActive);
		disableModal()
	}

	useClickOutside(contentRef, closeModal, modalRef)

  useEffect(() => {
    if (active) {
      openModal();
    } else {
			closeModal();
		}
  }, [active]);

	
  return (
    <div className={classes.modal} ref={modalRef}>
      <div className={classes.content} ref={contentRef}>
      </div>
    </div>
  );
};

export default InfoModal;
