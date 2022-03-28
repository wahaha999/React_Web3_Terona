import React, { FC, useState, useRef, useEffect } from "react";
import { NFT } from "../types/data";
import { ReactComponent as Close } from "../../assets/icons/Close.svg";
import * as Style from "./styles";
import { createNFT, editNFT } from "../service/nft.service";
import toast from "react-hot-toast";

type Props = {
  isShow: boolean;
  onHide: () => void;
  type: string;
  data: NFT;
  getNFTs: () => void;
};

const ActionModal: FC<Props> = ({ isShow, onHide, type, data, getNFTs }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [uploadedFiles, setUploadedFile] = useState<File[]>([]);
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [isCreate, setIsCreate] = useState<boolean>(true);

  const inputFileRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const openInputFile = () => {
    inputFileRef.current.click();

    return false;
  };

  const handleChange = (event: any) => {
    const file = event.target.files;
    setSelectedFile(file[0].name);
    setUploadedFile(file);
  };

  const handleSubmit = () => {
    if (title === "" || description === "") return;

    if (isCreate) {
      if (uploadedFiles.length === 0) return;

      let dt = new DataTransfer();
      dt.items.add(uploadedFiles[0]);

      const payload = {
        title,
        description,
        files: dt.files,
      };
      createNFT(payload)
        .then((res) => {
          toast.success(res.data);
          setSelectedFile("");
          setUploadedFile([]);
          onHide();
          getNFTs();
        })
        .catch((error) => {
          toast.error("error");
        });
    } else {
      let dt = new DataTransfer();

      if (uploadedFiles.length !== 0) dt.items.add(uploadedFiles[0]);

      let payload = {
        _id: data._id,
        title,
        description,
        files: dt.files,
      };

      editNFT(payload)
        .then((res) => {
          setSelectedFile("");
          setUploadedFile([]);
          onHide();
          getNFTs();
          toast.success(res.data);
        })
        .catch((error) => {
          toast.error("error");
        });
    }
  };

  useEffect(() => {
    if (type === "Create") {
      setIsCreate(true);
      setTitle("");
      setDescription("");
    } else {
      setIsCreate(false);
      setTitle(data.title);
      setDescription(data.description);
    }
  }, [type, data]);

  return (
    <Style.Modal show={isShow}>
      <Style.ModalBackground></Style.ModalBackground>
      <Style.ModalDialog>
        <Style.ModalContent>
          <Style.ModalHeader>
            <h3>{type.toUpperCase()} - NFT</h3>
            <Close onClick={onHide} />
          </Style.ModalHeader>
          <Style.ModalBody>
            <Style.FormGroup>
              <label className="required">
                Title <span>*</span>
              </label>
              <Style.Input
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Style.FormGroup>
            <Style.FormGroup>
              <label className="required">
                Description <span>*</span>
              </label>
              <Style.Input
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Style.FormGroup>
            <Style.FormGroup>
              <Style.FileWrapper>
                <label>Attachment {isCreate && <span>*</span>}</label>
                <Style.UploadBtn onClick={openInputFile}>
                  Upload file
                </Style.UploadBtn>
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  ref={inputFileRef}
                />
              </Style.FileWrapper>
              {selectedFile !== "" && (
                <Style.FileList>
                  <span>{selectedFile}</span>
                  <Close />
                </Style.FileList>
              )}
            </Style.FormGroup>
          </Style.ModalBody>
          <Style.ModalFooter>
            <Style.CancelButton onClick={onHide}>Cancel</Style.CancelButton>
            <Style.UpdateButton onClick={handleSubmit}>
              Update
            </Style.UpdateButton>
          </Style.ModalFooter>
        </Style.ModalContent>
      </Style.ModalDialog>
    </Style.Modal>
  );
};

export { ActionModal };
