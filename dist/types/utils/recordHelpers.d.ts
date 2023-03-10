/// <reference types="node" />
import type { BigNumberish } from 'ethers';
import type { PublicResolver } from '../generated/index';
type RecordItem = {
    key: string;
    value: string;
};
type ABIEncodeAs = 'json' | 'zlib' | 'cbor' | 'uri';
type ABIItem = {
    contentType?: BigNumberish;
    data: object | string;
};
export type RecordOptions = {
    clearRecords?: boolean;
    contentHash?: string;
    texts?: RecordItem[];
    coinTypes?: RecordItem[];
    abi?: ABIItem;
};
export declare const generateSetAddr: (namehash: string, coinType: string, address: string, resolver: PublicResolver) => string;
export declare const generateABIInput: (encodeAs: ABIEncodeAs, data: object | string) => Promise<{
    contentType: number;
    data: string | Uint8Array | Buffer;
}>;
export type RecordTypes = 'contentHash' | 'text' | 'addr' | 'abi';
export type RecordInput<T extends RecordTypes> = T extends 'contentHash' ? string : T extends 'abi' ? ABIItem : RecordItem;
export declare function generateSingleRecordCall<T extends RecordTypes>(namehash: string, resolver: PublicResolver, type: T): (record: RecordInput<T>) => string;
export declare const generateRecordCallArray: (namehash: string, records: RecordOptions, resolver: PublicResolver) => string[];
export {};
