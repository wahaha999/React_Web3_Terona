import React from "react";
import { Dropdown } from "react-bootstrap-v5";
import { NFT } from "../types/data";

type Props = {
  data: NFT;
  handleEdit: () => void;
  handleDelete: () => void;
};

const ActionDropDown: React.FC<Props> = (props) => {
  const { handleEdit, handleDelete } = props;

  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        className="dropdown-btn"
        variant="light"
        size="sm"
      >
        Actions
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#" onClick={handleEdit}>
          Edit
        </Dropdown.Item>
        <Dropdown.Item href="#" onClick={handleDelete}>
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { ActionDropDown };
