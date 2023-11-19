// src/Getplayers.js
import React, { useState } from 'react';
import { abi } from "./abi";
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import './Getplayers.css';

function Getplayers() {
  const CONTRACT_ADDRESS = "0xAaa906c8C2720c50B69a5Ba54B44253Ea1001C98";

  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: abi,
    functionName: 'pickWinner',
    args: [],
  });

  const { data, isLoading, isSuccess, isError, write } = useContractWrite(config);

  const [isWinnerPicked, setWinnerPicked] = useState(false);

  const handleButtonClick = async () => {
    await write?.();
    setWinnerPicked(true);
  };

  return (
    <div className={`get-players-container ${isWinnerPicked ? 'success' : ''}`}>
      <button className={`pick-winner-button`} onClick={handleButtonClick}>
        Pick Winner
      </button>

        {isLoading && <div>Check Wallet and Sign the transaction</div>}
        {isSuccess && <div>'🎉 Winner Picked!'</div>}
        
    </div>
  );
}

export default Getplayers;
