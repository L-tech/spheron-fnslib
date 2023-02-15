import { FNSArgs } from '../index';
import { RecordOptions } from '../utils/recordHelpers';
export default function ({ contracts, provider, getResolver, signer, }: FNSArgs<'contracts' | 'provider' | 'getResolver' | 'signer'>, name: string, { records, resolverAddress, }: {
    records: RecordOptions;
    resolverAddress?: string;
}): Promise<import("ethers").PopulatedTransaction>;
