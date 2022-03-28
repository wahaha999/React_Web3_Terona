import styled from "styled-components";

interface ModalProps {
  show: boolean;
}

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  display: ${(props: ModalProps) => (props.show ? "block" : "none")};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.3;
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

export const ModalDialog = styled.div`
  margin: auto;
  transform: translateY(30%);
  width: 50%;
  max-width: 800px;
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
`;

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 0 solid rgba(0, 0, 0, 0.2);
  border-radius: 0.475rem;
  box-shadow: 0 0.25rem 0.5rem rgb(0 0 0 / 10%);
  outline: 0;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1.75rem;
  border-bottom: 1px solid #eff2f5;
  border-top-left-radius: 0.475rem;
  border-top-right-radius: 0.475rem;

  h3 {
    margin: 0;
  }
`;

export const ModalBody = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding-right: 1.25rem;
  padding-left: 1.25rem;
  padding-top: 0.5rem;
  padding-bottom: 3.75rem;
`;

export const FormGroup = styled.div`
  margin-top: 20px;
  span {
    color: red;
  }
`;

export const FileWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    display: none;
  }

  span {
    color: red;
  }
`;

export const UploadBtn = styled.div`
  display: inline-block;
  font-weight: 500;
  line-height: 0.5;
  color: #181c32;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 0.475rem;
  background-color: #0095e8;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
`;

export const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
  display: block;
  width: 95%;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #181c32;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #e4e6ef;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 0.475rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    color: #181c32;
    background-color: #fff;
    border-color: #b5b5c3;
    outline: 0;
  }
`;

export const FileList = styled.div`
  background-color: #f2f2f2;
  cursor: pointer;
  padding: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  display: flex;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 1.5rem;
  border-top: 1px solid #eff2f5;
  border-bottom-right-radius: 0.475rem;
  border-bottom-left-radius: 0.475rem;
`;

export const CancelButton = styled.button`
  margin: 3px;
  color: #7e8299;
  background-color: #f5f8fa;
  cursor: pointer;
  border: 0;
  padding: calc(0.75rem + 1px) calc(1.5rem + 1px);
  font-size: 1rem;
  border-radius: 0.475rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    color: #7e8299;
    background-color: #f5f8fa;
  }
`;

export const UpdateButton = styled.button`
  margin: 3px;
  color: #fff;
  background-color: #009ef7;
  cursor: pointer;
  border: 0;
  padding: calc(0.75rem + 1px) calc(1.5rem + 1px);
  font-size: 1rem;
  border-radius: 0.475rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    background: #0095e8;
  }
`;
