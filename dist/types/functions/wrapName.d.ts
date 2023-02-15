import { FNSArgs } from '../index';
import { CombinedFuseInput } from '../utils/fuses';
import { Expiry } from '../utils/wrapper';
export default function ({ contracts, signer }: FNSArgs<'contracts' | 'signer'>, name: string, { wrappedOwner, fuseOptions, expiry, resolverAddress, }: {
    wrappedOwner: string;
    fuseOptions?: Partial<CombinedFuseInput> | number;
    expiry?: Expiry;
    resolverAddress?: string;
}): Promise<import("ethers").PopulatedTransaction>;
