import { FNSArgs } from '../index';
import { Expiry } from '../utils/wrapper';
type BaseArgs = {
    owner: string;
    resolverAddress?: string;
    contract: 'registry' | 'nameWrapper';
};
type NameWrapperArgs = {
    contract: 'nameWrapper';
    expiry?: Expiry;
} & BaseArgs;
type Args = BaseArgs | NameWrapperArgs;
export default function ({ contracts, signer }: FNSArgs<'contracts' | 'signer'>, name: string, { contract, owner, resolverAddress, ...wrapperArgs }: Args): Promise<import("ethers").PopulatedTransaction>;
export {};
