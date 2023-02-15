import { FNSArgs } from '../index';
import { RecordInput } from '../utils/recordHelpers';
type BaseInput = {
    resolverAddress?: string;
};
type ContentHashInput = {
    record: RecordInput<'contentHash'>;
    type: 'contentHash';
};
type AddrOrTextInput = {
    record: RecordInput<'addr' | 'text'>;
    type: 'addr' | 'text';
};
type ABIInput = {
    record: RecordInput<'abi'>;
    type: 'abi';
};
export default function ({ contracts, provider, getResolver, signer, }: FNSArgs<'contracts' | 'provider' | 'getResolver' | 'signer'>, name: string, { record, type, resolverAddress, }: BaseInput & (ContentHashInput | AddrOrTextInput | ABIInput)): Promise<{
    to: string;
    data: string;
}>;
export {};
