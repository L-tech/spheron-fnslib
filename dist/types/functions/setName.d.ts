import { FNSArgs } from '../index';
export default function ({ contracts, signer }: FNSArgs<'contracts' | 'signer'>, name: string, { address, resolver, }?: {
    address?: string;
    resolver?: string;
}): Promise<import("ethers").PopulatedTransaction>;
