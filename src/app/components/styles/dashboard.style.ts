import styled from "styled-components";

export const Container = styled.div`
  padding: 15px 40px;
  min-height: 70vh;
`;

export const ContainerTitle = styled.div`
  text-align: right;
`;

export const ContainerBody = styled.div`
  margin-top: 20px;
`;

export const CreateBtn = styled.button`
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  border-radius: 0.475rem;
  outline: 0;
  border: 0;
  padding: calc(0.4rem) calc(1.5rem + 1px);
  cursor: pointer;
  text-transform: capitalize;
  color: #ffffff;
  background: #009ef7;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  :hover {
    background: #1a6bd7;
    color: #ffffff;
  }
`;
