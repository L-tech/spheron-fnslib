import { FNSArgs } from '../index';
export default function ({ contracts, signer }: FNSArgs<'contracts' | 'signer'>, name: string, { newOwner, contract, reclaim, }: {
    newOwner: string;
    contract: 'registry' | 'nameWrapper' | 'baseRegistrar';
    reclaim?: boolean;
}): Promise<import("ethers").PopulatedTransaction>;
