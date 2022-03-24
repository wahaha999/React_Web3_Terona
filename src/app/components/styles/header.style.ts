import styled from "styled-components";

export const DesktopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 85px;
  padding: 0 2.5rem 0 0;
  width: 100%;
  margin: 0;
  background: #182331;
`;

export const NetworkHeaderWidget = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.3rem;
  color: #ced2d6;
  font-size: 18px;
  .header_network_value {
    margin-left: 0.5rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.75rem;
    > .header_network_iconoutside {
      height: 13px;
      width: 13px;
      background: ${(props: { outsideColor: string; insideColor: string }) =>
        props.outsideColor};
      border-radius: 50%;
      margin-right: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      > .header_network_iconinside {
        background: ${(props) => props.insideColor};
        height: 7px;
        width: 7px;
        border-radius: 50%;
      }
    }
  }
`;

export const ConnectHeaderWidget = styled.div`
  display: flex;
  .icon-wrapper {
    display: flex;
    align-items: center;
    margin-right: 48px;
    cursor: pointer;
    svg {
      margin-right: 9px;
    }
  }
`;

export const ConnectedButton = styled.button`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.bg};
  padding: 8px 5px;
  border: 0;
  outline: 0;
  border-radius: 4px;
  cursor: pointer;
  span {
    font-family: Montserrat;
    color: ${(props) => props.theme.default_color};
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;
  }
  svg {
    margin-right: 8px;
    path {
      /* stroke: ${(props) => props.theme.default_color}; */
      fill: ${(props) => props.theme.default_color};
    }
  }
  .chev-down {
    margin-left: 9px;
  }
`;

export const Button = styled.button`
  font-size: 20px;
  line-height: 24px;
  height: 48px;
  text-align: center;
  border-radius: 6px;
  outline: 0;
  border: 0;
  padding: 10px 0;
  cursor: pointer;
  text-transform: capitalize;
  color: #ffffff;
  background: #005ad3;
  width: 220px;
  height: 45px;

  :hover {
    background: #1a6bd7;
    color: #ffffff;
  }
`;
