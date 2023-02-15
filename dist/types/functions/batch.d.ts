import { TransactionRequest } from '@ethersproject/abstract-provider';
import { BatchFunctionResult, FNSArgs, RawFunction } from '../index';
declare const _default: {
    raw: ({ multicallWrapper }: FNSArgs<"multicallWrapper">, ...items: BatchFunctionResult<RawFunction>[]) => Promise<{
        passthrough: {
            to: string;
            data: string;
        }[];
        to: string;
        data: string;
    }>;
    decode: ({ multicallWrapper }: FNSArgs<"multicallWrapper">, data: string, passthrough: TransactionRequest & {
        passthrough?: any;
    }[], ...items: BatchFunctionResult<RawFunction>[]) => Promise<any[] | undefined>;
};
export default _default;
