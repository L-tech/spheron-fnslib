import { FNSArgs } from '../index';
export default function ({ contracts, signer }: FNSArgs<'contracts' | 'signer'>, name: string, { newOwner, isOwner, }: {
    newOwner: string;
    isOwner: boolean;
}): Promise<import("ethers").PopulatedTransaction>;
