import { FNSArgs } from '../index';
export default function ({ contracts, signer }: FNSArgs<'contracts' | 'signer'>, name: string, { newController, newRegistrant, }: {
    newController: string;
    newRegistrant?: string;
}): Promise<import("ethers").PopulatedTransaction>;
