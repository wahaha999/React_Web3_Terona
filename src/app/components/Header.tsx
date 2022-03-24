import React, { useState } from "react";
import * as Style from "./styles";
import { ReactComponent as BlockchainIcon } from "../../assets/header/blockchain.svg";
import { ReactComponent as ChevronDownIcon } from "../../assets/header/chevron-down.svg";
import { ethers } from "ethers";

declare let window: any;

const Header = () => {
  const [currentAccount, setCurrentAccount] = useState(null);

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Style.DesktopHeader>
      <Style.NetworkHeaderWidget insideColor={"white"} outsideColor={"white"}>
        Tauno Kont
      </Style.NetworkHeaderWidget>
      <Style.ConnectHeaderWidget>
        {currentAccount ? (
          <Style.ConnectedButton>
            <BlockchainIcon />
            {currentAccount}
            <ChevronDownIcon />
          </Style.ConnectedButton>
        ) : (
          <Style.Button onClick={connectWalletHandler}>
            connect wallet
          </Style.Button>
        )}
      </Style.ConnectHeaderWidget>
    </Style.DesktopHeader>
  );
};

export default Header;
