import {React, useState} from "react";
import {ethers} from 'ethers';


function Info () {

    const [defaultAccount, setDefaultAccount] = useState('Not Connected');
    const [userBalance, setUserBalance] = useState(null);

    if (typeof window.ethereum !== 'undefined') {
    window.ethereum.request({method: "eth_requestAccounts"})

    .then(result =>{
      accountChangedHandler(result[0])
      localStorage.setItem ('address', result[0]);
    })}

    const chainChangedHandler = () => {
        window.location.reload();
    }

    const accountChangedHandler = (newAccount) =>{
        setDefaultAccount(newAccount)
        getUserBalance(newAccount.toString());
    }

    if (typeof window.ethereum !== 'undefined') {
        window.ethereum.on('accountsChanged', accountChangedHandler)
        window.ethereum.on('chainChanged', chainChangedHandler);
    }
    
    const getUserBalance = (address) =>{
        window.ethereum.request({method:'eth_getBalance', params: [address, 'latest']})
        .then(balance => {
        setUserBalance(ethers.utils.formatEther(balance));
        })
    }

    return(
        <div>
            <div className="walletInfo">
                <h3>Connected Wallet:</h3>
                <p>{defaultAccount}</p>
                <br/>
                <h3>{userBalance ? 'Wallet Balance:' : ''}</h3>
                <p>{userBalance}</p>
            </div>
        </div>
    )
}

export default Info;