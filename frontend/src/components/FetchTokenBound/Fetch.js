import "./Fetch.css";
import { useAccount, useConnect, useEnsName } from 'wagmi';

function Fetch () {
    const { address, isConnected } = useAccount();
    const { provider } = useConnect();

    return(
        <>
            <section style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', backgroundColor: '#FFF4E3', borderRadius: '15px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }}>
                <h2 style={{ color: '#F76C6C' }}>Welcome to ChilizJackpotPool

!</h2>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>🚀 Join our decentralized pool betting platform powered by spicy smart contracts on the Chiliz blockchain. Place your bets and let the spice flow! 🌶️</p>

                <h3 style={{ color: '#F76C6C' }}>How it Works</h3>
                <ol style={{ fontSize: '1.1rem', color: '#333' }}>
                    <li>🔗 Connect your Chiliz-compatible wallet.</li>
                    <li>💰 Enter the pool by placing a bet of at least 0.01 ether.</li>
                    <li>🎲 Wait for the manager to roll the spicy dice and pick the winner!</li>
                    <li>🌈 If you win, the entire pot will be a spicy treat for your wallet!</li>
                </ol>

                <a href="#your-smart-contract-address" style={{ display: 'inline-block', padding: '12px 24px', marginTop: '20px', backgroundColor: '#F76C6C', color: 'white', textDecoration: 'none', borderRadius: '10px', fontSize: '1.2rem' }}>
                    🌶️ Get Spicy - Get Started Now! 🌶️
                </a>
            </section>
        </> 
    );
}

export default Fetch;