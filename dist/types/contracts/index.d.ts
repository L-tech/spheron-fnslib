import type { Interface } from '@ethersproject/abi';
import type { Signer } from '@ethersproject/abstract-signer';
import type { BaseContract } from '@ethersproject/contracts';
import type { Provider } from '@ethersproject/providers';
import type { BaseRegistrarImplementation } from '../generated/BaseRegistrarImplementation';
import type { BulkRenewal } from '../generated/BulkRenewal';
import type { DNSRegistrar } from '../generated/DNSRegistrar';
import type { FNSRegistry } from '../generated/FNSRegistry';
import type { FILRegistrarController } from '../generated/FILRegistrarController';
import type { Multicall } from '../generated/Multicall';
import type { NameWrapper } from '../generated/NameWrapper';
import type { PublicResolver } from '../generated/PublicResolver';
import type { ReverseRegistrar } from '../generated/ReverseRegistrar';
import type { UniversalResolver } from '../generated/UniversalResolver';
import { ContractAddressFetch } from './getContractAddress';
type BaseFactory = {
    readonly abi: object;
    createInterface(): Interface;
    connect(address: string, signerOrProvider: Signer | Provider): BaseContract;
};
export default class ContractManager {
    private provider;
    private fetchAddress;
    protected getModule: (name: string) => Promise<BaseFactory>;
    constructor(provider: Provider, fetchAddress: ContractAddressFetch, getModule?: (name: string) => Promise<BaseFactory>);
    private generateContractGetter;
    getPublicResolver: (passedProvider?: any, address?: string) => Promise<PublicResolver>;
    getUniversalResolver: (passedProvider?: any, address?: string) => Promise<UniversalResolver>;
    getRegistry: (passedProvider?: any, address?: string) => Promise<FNSRegistry>;
    getReverseRegistrar: (passedProvider?: any, address?: string) => Promise<ReverseRegistrar>;
    getNameWrapper: (passedProvider?: any, address?: string) => Promise<NameWrapper>;
    getDNSRegistrar: (passedProvider?: any, address?: string) => Promise<DNSRegistrar>;
    getBaseRegistrar: (passedProvider?: any, address?: string) => Promise<BaseRegistrarImplementation>;
    getEthRegistrarController: (passedProvider?: any, address?: string) => Promise<FILRegistrarController>;
    getMulticall: (passedProvider?: any, address?: string) => Promise<Multicall>;
    getBulkRenewal: (passedProvider?: any, address?: string) => Promise<BulkRenewal>;
}
export {};
