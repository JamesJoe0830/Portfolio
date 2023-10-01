import React from "react";
import * as S from "./DetailModal.style";
function DetailModal({ setIsDetailModal, title }) {
  const handleDetailModal = () => {
    setIsDetailModal(false);
  };
  return (
    <S.DetailWrapper>
      <S.ReadMeHeader>
        <S.ReadMeTitle>{title}</S.ReadMeTitle>
        <S.ExitBtn onClick={handleDetailModal}>x</S.ExitBtn>
      </S.ReadMeHeader>
      <S.Line />
    </S.DetailWrapper>
  );
}

export default DetailModal;
