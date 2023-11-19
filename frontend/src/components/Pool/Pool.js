// src/Pool.js
import React, { useState } from 'react';
import { abi } from "./abi";
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { parseEther } from 'viem';
import './Pool.css';

function Pool() {
  const CONTRACT_ADDRESS = "0xAaa906c8C2720c50B69a5Ba54B44253Ea1001C98";

  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: abi,
    functionName: 'enter',
    args: [],
    value: parseEther("0.1"),
  });

  const { data, isLoading, isSuccess, isError, write } = useContractWrite(config);

  const [isTransactionPending, setTransactionPending] = useState(false);

  const handleButtonClick = async () => {
    setTransactionPending(true);
    await write?.();
    setTransactionPending(false);
  };

  return (
    <div className="pool-container">
      <h2 className="pool-title">🏊 Dive into the Crypto Pool!</h2>
      <p className="pool-description">
        Join the excitement by adding your spice to the ChilizJackpotPool. Place a bet, embrace the thrill, and who knows, you might be the next big winner! 🚀
      </p>
      <button
        className={`pool-button ${isTransactionPending ? 'pending' : isSuccess ? 'success' : ''}`}
        disabled={isTransactionPending}
        onClick={handleButtonClick}
      >
        {isTransactionPending ? 'Processing...' : isSuccess ? '🎉 Transaction Successful!' : '💰 Add To Pool'}
      </button>
    </div>
  );
}

export default Pool;
