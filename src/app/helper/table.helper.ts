import { NFT } from "../types/data";

export const customQuotesSort = (
  rows: NFT[],
  selector: any,
  direction: any
) => {
  return rows.sort((rowA, rowB) => {
    const aField = selector(rowA);
    const bField = selector(rowB);

    let comparison = 0;

    if (direction === "desc") {
      if (aField === null || aField === "") {
        return 1;
      } else if (bField === null || bField === "") {
        return -1;
      } else if (aField === bField) {
        comparison = 0;
      } else if (aField > bField) {
        comparison = 1;
      } else if (aField < bField) {
        comparison = -1;
      }
    } else {
      if (aField === bField) {
        comparison = 0;
      } else if (aField > bField) {
        comparison = -1;
      } else if (aField < bField) {
        comparison = 1;
      }
    }

    return comparison;
  });
};
