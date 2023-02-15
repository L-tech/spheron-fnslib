import { FNSArgs } from '../index';
declare const _default: {
    raw: ({ contracts }: FNSArgs<"contracts">, address: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: FNSArgs<"contracts">, data: string, address: string) => Promise<{
        name: any;
        match: boolean;
        reverseResolverAddress: any;
        resolverAddress: any;
    } | {
        name: undefined;
        match?: undefined;
        reverseResolverAddress?: undefined;
        resolverAddress?: undefined;
    } | undefined>;
};
export default _default;
