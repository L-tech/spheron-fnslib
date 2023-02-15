import { FNSArgs } from '../index';
import { AllCurrentFuses } from '../utils/fuses';
type BaseSubname = {
    id: string;
    labelName: string | null;
    truncatedName?: string;
    labelhash: string;
    isMigrated: boolean;
    name: string;
    owner: string | undefined;
};
type UnwrappedSubname = BaseSubname & {
    fuses?: never;
    expiryDate?: never;
    pccExpired?: never;
    type: 'domain';
};
type WrappedSubname = BaseSubname & {
    fuses: AllCurrentFuses;
    expiryDate: Date;
    pccExpired: boolean;
    type: 'wrappedDomain';
};
type Subname = WrappedSubname | UnwrappedSubname;
type Params = {
    name: string;
    page?: number;
    pageSize?: number;
    orderDirection?: 'asc' | 'desc';
    orderBy?: 'createdAt' | 'labelName';
    lastSubnames?: Array<any>;
    search?: string;
};
declare const getSubnames: (injected: FNSArgs<'gqlInstance'>, functionArgs: Params) => Promise<{
    subnames: Subname[];
    subnameCount: number;
}>;
export default getSubnames;
