import React, { ElementRef, RefObject, useEffect } from "react";


const useClickOutside = (
  content: RefObject<HTMLDivElement>,
  closeModal: () => void,
  modal: any
) => {
  useEffect(() => {
    const handleClickOuside = (e: React.MouseEvent<HTMLDivElement>) => {
      if (content.current && !content?.current.contains(e.target as HTMLDivElement)) {
        closeModal();
      }
    };

    modal.current.addEventListener("click", handleClickOuside);
    return () => {
      modal.current?.removeEventListener("click", handleClickOuside);
    };
  }, [content]);
};

export default useClickOutside;
