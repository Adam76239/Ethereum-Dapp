import React from "react";

function Transfer() {

    const sendTransaction = async() => {
        let params = [{
          "from": localStorage.address,
          "to": "0x38C32Eb2dfF4B96204A3dACe10B6e43310d1fe56",
          "gas": "0x6b540", 
          "gasPrice": "0xaf16b1bb3", 
          "value": "0x38d7ea4c68000", 
          "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
        }]
        
        await window.ethereum.request({method: "eth_sendTransaction", params})
      }

      return(
        <button className="transferButton" onClick={sendTransaction}>Transfer ETH</button>
      )
}

export default Transfer;