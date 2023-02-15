import { BigNumber } from '@ethersproject/bignumber';
import { FNSArgs } from '../index';
import { BaseRegistrationParams } from '../utils/registerHelpers';
type Params = BaseRegistrationParams & {
    value: BigNumber;
};
export default function ({ contracts }: FNSArgs<'contracts'>, name: string, address: string, duration: number, { value }: Params): Promise<import("ethers").PopulatedTransaction>;
export {};
