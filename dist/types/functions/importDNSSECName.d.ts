import type { FNSArgs } from '../index';
export declare const DNS_OVER_HTTP_ENDPOINT = "https://1.1.1.1/dns-query";
export type ImportDNSSECNameProps = {
    address: string;
    proverResult: any;
};
export default function ({ contracts, provider }: FNSArgs<'contracts' | 'signer' | 'provider'>, name: string, { address, proverResult }: ImportDNSSECNameProps): Promise<import("ethers").PopulatedTransaction | undefined>;
