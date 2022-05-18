import styled from "styled-components";

export const StyledInfo = styled.div`
  background-color: ${({ theme }) => theme.info.bg};
  color: ${({ theme }) => theme.info.color};
  border: 2px solid ${({ theme }) => theme.info.color};
  border-radius: 5px;
  width: 30%;
  height: 50%;
  text-align: center;

  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: fadeIn .25s;
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }


`