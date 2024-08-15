import { useAccount, useChainId, useDisconnect, useEnsName } from "wagmi";
import { Button } from "./ui/button";
import { switchChain } from "wagmi/actions";
import { config } from "@/wagmiProvider/config";
import { incoNetwork } from "@/wagmiProvider/chainConfig";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const chainId = useChainId();

  const switchChainToInco = async () => {
    try {
      await switchChain(config, {
        addEthereumChainParameter: {
          iconUrls: [
            "https://img.cryptorank.io/coins/150x150.inco_network1708524859049.png",
          ],
        },
        chainId: incoNetwork.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-8 grid gap-6 pb-16">
      <div className="mt-10 flex justify-between scroll-m-20 border-b pb-6 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        <div>
          Wallet Address:{" "}
          {address && (
            <>
              <div className="text-xl text-black/70 hidden md:flex">
                {ensName ? `${ensName} (${address})` : address}
              </div>
            </>
          )}
        </div>
        {chainId === 9090 ? (
          <div className="flex gap-4 items-center">
            <Button onClick={() => disconnect()}>Disconnect</Button>
          </div>
        ) : (
          <div>
            <Button onClick={switchChainToInco}>Switch Chain</Button>
          </div>
        )}
      </div>
    </div>
  );
}
