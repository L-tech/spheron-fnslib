import { FNSArgs } from '../index';
declare const _default: {
    raw: ({ contracts }: FNSArgs<"contracts">, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: FNSArgs<"contracts">, data: string) => Promise<any>;
};
export default _default;
