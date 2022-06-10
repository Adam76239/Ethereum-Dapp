import React from "react";

const Wallet = () => {

  const connectHandler = async()=>{

    if (window.ethereum){
      await window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [
          {
            eth_accounts: {},
          },
        ],
      })
    } 

    else {
      window.open("https://metamask.io/download/")
    }
  }

  return(
    <button 
      className="walletButton" 
      onClick={connectHandler}>
        {typeof window.ethereum !== 'undefined' ? 'Connect Wallet' : 'Install MetaMask'}
    </button>
  )
}

export default Wallet;