import styled from "styled-components";

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 3350px;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  opacity: 1;
  background-color: white;
  width: 80%;
  height: 50%;
  padding: 50px;
  border-radius: 5px;
  cursor: auto;
`;
export const ReadMeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  margin-bottom: 20px;
`;
export const ReadMeTitle = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 800;
`;
export const ExitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: none;
  background-color: #505050;
  color: white;
  &:hover {
    background-color: #2d2d2d;
  }
`;

export const Line = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background-color: #505050;
`;
