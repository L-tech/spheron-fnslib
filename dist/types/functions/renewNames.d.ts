import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { FNSArgs } from '../index';
type BaseProps = {
    duration: number;
    value: BigNumber;
};
type WrappedProps = {
    duration: BigNumberish;
};
export declare function extendWrappedName({ contracts }: FNSArgs<'contracts'>, name: string, options?: WrappedProps): Promise<import("ethers").PopulatedTransaction>;
export default function ({ contracts }: FNSArgs<'contracts'>, nameOrNames: string | string[], { duration, value }: BaseProps): Promise<import("ethers").PopulatedTransaction>;
export {};
