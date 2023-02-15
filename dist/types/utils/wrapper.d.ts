import { BigNumber } from '@ethersproject/bignumber';
import { FNSArgs } from '../index';
export type Expiry = string | number | Date | BigNumber;
export declare const MAX_EXPIRY: BigNumber;
export declare const expiryToBigNumber: (expiry?: Expiry, defaultValue?: number) => BigNumber;
export declare const makeExpiry: ({ getExpiry }: FNSArgs<'getExpiry'>, name: string, expiry?: Expiry) => Promise<BigNumber>;
export declare const wrappedLabelLengthCheck: (label: string) => void;
