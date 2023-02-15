import { FNSArgs } from '../index';
import { AllCurrentFuses } from '../utils/fuses';
export type Name = {
    id: string;
    labelName: string | null;
    truncatedName?: string;
    labelhash: string;
    isMigrated: boolean;
    name: string;
    parent: {
        name: string;
    };
    createdAt?: Date;
    registrationDate?: Date;
    expiryDate?: Date;
    fuses?: AllCurrentFuses;
    registration?: {
        expiryDate: Date;
        registrationDate: Date;
    };
    type: 'domain' | 'registration' | 'wrappedDomain';
};
type BaseParams = {
    address: string;
    type: 'registrant' | 'owner' | 'wrappedOwner' | 'all';
    page?: number;
    pageSize?: number;
    orderDirection?: 'asc' | 'desc';
};
type RegistrantParams = {
    type: 'registrant';
    orderBy?: 'registrationDate' | 'expiryDate' | 'labelName';
};
type OwnerParams = {
    type: 'owner';
    orderBy?: 'createdAt' | 'labelName';
};
type WrappedOwnerParams = {
    type: 'wrappedOwner';
    orderBy?: 'expiryDate' | 'name';
};
type AllParams = {
    type: 'all';
    orderBy?: 'labelName' | 'creationDate';
    page?: never;
    pageSize?: never;
};
type Params = BaseParams & (RegistrantParams | OwnerParams | WrappedOwnerParams | AllParams);
declare const getNames: ({ gqlInstance }: FNSArgs<'gqlInstance'>, { address: _address, type, page, pageSize, orderDirection, orderBy, }: Params) => Promise<Name[]>;
export default getNames;
