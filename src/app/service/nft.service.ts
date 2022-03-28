import axios from "axios";

const API_URL = "http://localhost:3000/api/nft";

export async function getNFTs() {
  const Service_URL = `${API_URL}/get`;

  return axios.get(Service_URL);
}

export async function createNFT(payload: any) {
  let formData = new FormData();

  formData.append("title", payload.title);
  formData.append("description", payload.description);
  for (let i = 0; i < payload.files.length; i++) {
    formData.append("files", payload.files[i]);
  }

  return axios.post(`${API_URL}/create`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function editNFT(payload: any) {
  let formData = new FormData();

  formData.append("_id", payload._id);
  formData.append("title", payload.title);
  formData.append("description", payload.description);
  for (let i = 0; i < payload.files.length; i++) {
    formData.append("files", payload.files[i]);
  }

  return axios.post(`${API_URL}/edit`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export const deleteNFT = (id: string) => {
  return axios.delete(`${API_URL}/delete/${id}`);
};
