import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TableColumn } from "react-data-table-component";
import { NFT } from "../types/data";
import { ActionDropDown } from "../components/ActionDropDown";
import { customQuotesSort } from "../helper/table.helper";
import { getNFTs } from "../service/nft.service";
import { ActionModal } from "../components/ActionModal";
import { deleteNFT } from "../service/nft.service";
import DataTableBase from "../components/DataTableBase";
import toast from "react-hot-toast";
import * as Style from "../components/styles";

const DashboardPage = () => {
  const [data, setData] = useState<NFT[]>([]);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [editData, setEditData] = useState<NFT>({
    _id: "",
    image: "",
    title: "",
    description: "",
  });
  const [type, setType] = useState<"Create" | "Edit">("Create");

  const nftsAfterUpdate = useCallback(() => {
    getNFTs().then((res) => {
      setData(res.data);
    });
  }, []);

  const handleEdit = useCallback(
    (row: NFT) => {
      setIsShow(!isShow);
      setEditData(row);
      setType("Edit");
    },
    [isShow]
  );

  const handleCreate = useCallback(() => {
    setIsShow(!isShow);
    setType("Create");
  }, [isShow]);

  const handleDelete = useCallback(
    (row: NFT) => {
      deleteNFT(row._id).then((res) => {
        toast.success(res.data);
        nftsAfterUpdate();
      });
    },
    [nftsAfterUpdate]
  );

  const handleHide = useCallback(() => {
    setIsShow(false);
  }, []);

  const columns: TableColumn<NFT>[] = useMemo(
    () => [
      {
        name: "NFT",
        selector: (row) => row.image,
        cell: (row) => (
          <span>
            <img src={row.image} width={250} alt="nft" />
          </span>
        ),
        maxWidth: "unset !important",
      },
      {
        name: "Title",
        selector: (row) => row.title,
        maxWidth: "unset !important",
        sortable: true,
      },
      {
        name: "Description",
        selector: (row) => row.description,
        sortable: true,
        style: {
          maxWidth: "unset !important",
          marginLeft: "10px",
          padding: "0.7rem 0 !important",
        },
      },
      {
        name: "Actions",
        cell: (row) => (
          <ActionDropDown
            data={row}
            handleEdit={() => handleEdit(row)}
            handleDelete={() => handleDelete(row)}
          />
        ),
        style: {
          maxWidth: "unset !important",
          marginLeft: "10px",
          padding: "0.7rem 0 !important",
        },
      },
    ],
    [handleDelete, handleEdit]
  );

  useEffect(() => {
    getNFTs().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Style.Container>
      <Style.ContainerTitle>
        <Style.CreateBtn onClick={handleCreate}>Create</Style.CreateBtn>
      </Style.ContainerTitle>
      <Style.ContainerBody>
        <DataTableBase
          columns={columns}
          data={data}
          progressPending={false}
          sortFunction={customQuotesSort}
        />
      </Style.ContainerBody>
      <ActionModal
        isShow={isShow}
        onHide={handleHide}
        type={type}
        data={editData}
        getNFTs={nftsAfterUpdate}
      />
    </Style.Container>
  );
};

export default DashboardPage;
