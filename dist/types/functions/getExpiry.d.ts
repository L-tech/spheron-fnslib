import { FNSArgs } from '../index';
type ContractOption = 'registrar' | 'nameWrapper';
type Args = {
    contract?: ContractOption;
};
declare const _default: {
    raw: (fnsArgs: FNSArgs<"contracts" | "multicallWrapper">, name: string, { contract }?: Args) => Promise<{
        to: string;
        data: string;
    }>;
    decode: (ensArgs: FNSArgs<"contracts" | "multicallWrapper">, data: string, name: string, { contract }?: Args) => Promise<{
        expiry: Date;
        gracePeriod: null;
    } | {
        expiry: Date | null;
        gracePeriod: number;
    } | undefined>;
};
export default _default;
