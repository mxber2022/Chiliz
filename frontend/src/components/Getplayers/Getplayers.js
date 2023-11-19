import { abi } from "./abi";
import { useContractRead } from 'wagmi';

function Getplayers() {

    const { data } = useContractRead({
        address: "0xAaa906c8C2720c50B69a5Ba54B44253Ea1001C98",
        abi: abi,
        functionName: 'getPlayers',
        args: [],
    })

    return(
        <>
        <>{data}</>
        </>
    )
}

export default Getplayers;