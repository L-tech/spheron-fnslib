import { FNSArgs } from '../index';
type BaseArgs = {
    contract: 'registry' | 'nameWrapper';
    method?: 'setRecord' | 'setSubnodeOwner';
};
type NameWrapperArgs = {
    contract: 'nameWrapper';
    method: 'setRecord' | 'setSubnodeOwner';
};
type Args = BaseArgs | NameWrapperArgs;
export default function ({ contracts, signer }: FNSArgs<'contracts' | 'signer'>, name: string, { contract, ...args }: Args): Promise<import("ethers").PopulatedTransaction>;
export {};
