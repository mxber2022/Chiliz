import { abi } from "./abi";
import { useContractWrite, usePrepareContractWrite, useContractRead } from 'wagmi';
import { parseEther, parseUnits } from 'viem'

function Pool() {

    const CONTRACT_ADDRESS = "0xAaa906c8C2720c50B69a5Ba54B44253Ea1001C98";

    const { config } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: 'enter',
        args: [],
        value: parseEther("0.1"),
    });

    const { data, isLoading, isSuccess, write } = useContractWrite(config);

    return(
        <>
            Pool

            <button disabled={!write} onClick={() => write?.()}>
        Add To Pool
      </button> 
        </>
    )
}

export default Pool;