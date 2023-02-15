import { FNSArgs } from '../index';
export default function ({ contracts, signer }: FNSArgs<'contracts' | 'signer'>, name: string, { contract, resolver, }: {
    contract: 'registry' | 'nameWrapper';
    resolver?: string;
}): Promise<import("ethers").PopulatedTransaction>;
