import { FNSArgs } from '../index';
declare const _default: {
    raw: ({ contracts }: FNSArgs<"contracts">, name: string, allowIncomplete?: boolean | undefined) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts, gqlInstance }: FNSArgs<"contracts" | "gqlInstance">, data: string, name: string, allowIncomplete?: boolean) => Promise<any>;
};
export default _default;
