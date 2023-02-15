import { FNSArgs } from '../index';
declare const _default: {
    raw: ({ contracts }: FNSArgs<"contracts">, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: FNSArgs<"contracts">, data: string) => Promise<{
        protocolType?: undefined;
        decoded?: undefined;
        error?: undefined;
    } | {
        protocolType: null;
        decoded: any;
        error?: undefined;
    } | {
        protocolType: string | undefined;
        decoded: any;
        error: any;
    } | undefined>;
};
export default _default;
