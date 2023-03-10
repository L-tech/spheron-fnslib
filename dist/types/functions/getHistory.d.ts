import { FNSArgs } from '../index';
type DomainEvent = 'NewOwner' | 'NewResolver' | 'Transfer' | 'NewTTL' | 'WrappedTransfer' | 'NameWrapped' | 'NameUnwrapped' | 'FusesSet' | 'ExpiryExtended';
type RegistrationEvent = 'NameRegistered' | 'NameRenewed' | 'NameTransferred';
type ResolverEvent = 'AddrChanged' | 'MulticoinAddrChanged' | 'NameChanged' | 'AbiChanged' | 'PubkeyChanged' | 'TextChanged' | 'ContenthashChanged' | 'InterfaceChanged' | 'AuthorisationChanged' | 'VersionChanged';
export declare function getHistory({ gqlInstance }: FNSArgs<'gqlInstance'>, name: string): Promise<{
    domain: {
        type: DomainEvent;
        blockNumber: number;
        transactionHash: string;
        id: string;
        data: object;
    }[];
    registration: {
        type: RegistrationEvent;
        blockNumber: number;
        transactionHash: string;
        id: string;
        data: object;
    }[];
    resolver: {
        type: ResolverEvent;
        blockNumber: number;
        transactionHash: string;
        id: string;
        data: object;
    }[];
} | {
    domain: {
        type: DomainEvent;
        blockNumber: number;
        transactionHash: string;
        id: string;
        data: object;
    }[];
    resolver: {
        type: ResolverEvent;
        blockNumber: number;
        transactionHash: string;
        id: string;
        data: object;
    }[];
    registration?: undefined;
} | undefined>;
export {};
