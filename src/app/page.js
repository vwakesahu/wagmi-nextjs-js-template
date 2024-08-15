"use client";
import React from "react";
import { Account } from "@/components/account";
import { WalletOptions } from "@/components/wallet-options";
import { useAccount } from "wagmi";

function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
}

const Home = () => {
  return (
    <div className="px-8">
      <ConnectWallet />
    </div>
  );
};

export default Home;
