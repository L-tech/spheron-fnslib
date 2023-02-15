import { FNSArgs } from '../index';
type Owner = {
    registrant?: string;
    owner?: string;
    ownershipLevel: 'nameWrapper' | 'registry' | 'registrar';
    expired?: boolean;
};
declare const _default: {
    raw: ({ contracts, multicallWrapper }: FNSArgs<"contracts" | "multicallWrapper">, name: string, contract?: "nameWrapper" | "registrar" | "registry" | undefined) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts, multicallWrapper, gqlInstance, }: FNSArgs<"contracts" | "multicallWrapper" | "gqlInstance">, data: string, name: string, contract?: "nameWrapper" | "registrar" | "registry" | undefined) => Promise<Owner | undefined>;
};
export default _default;
