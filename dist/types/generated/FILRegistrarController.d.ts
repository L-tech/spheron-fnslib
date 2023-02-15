import type { EventFragment, FunctionFragment, Result } from '@ethersproject/abi';
import { Interface } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/abstract-provider';
import type { Signer } from '@ethersproject/abstract-signer';
import type { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import type { BytesLike } from '@ethersproject/bytes';
import type { BaseContract, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction } from '@ethersproject/contracts';
import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from './common';
export declare namespace IPriceOracle {
    type PriceStruct = {
        base: PromiseOrValue<BigNumberish>;
        premium: PromiseOrValue<BigNumberish>;
    };
    type PriceStructOutput = [BigNumber, BigNumber] & {
        base: BigNumber;
        premium: BigNumber;
    };
}
export interface FILRegistrarControllerInterface extends Interface {
    functions: {
        'MIN_REGISTRATION_DURATION()': FunctionFragment;
        'available(string)': FunctionFragment;
        'commit(bytes32)': FunctionFragment;
        'commitments(bytes32)': FunctionFragment;
        'makeCommitment(string,address,uint256,bytes32,address,bytes[],bool,uint16)': FunctionFragment;
        'maxCommitmentAge()': FunctionFragment;
        'minCommitmentAge()': FunctionFragment;
        'nameWrapper()': FunctionFragment;
        'owner()': FunctionFragment;
        'prices()': FunctionFragment;
        'recoverFunds(address,address,uint256)': FunctionFragment;
        'register(string,address,uint256,address,bytes[],bool)': FunctionFragment;
        'renew(string,uint256)': FunctionFragment;
        'renounceOwnership()': FunctionFragment;
        'rentPrice(string,uint256)': FunctionFragment;
        'reverseRegistrar()': FunctionFragment;
        'supportsInterface(bytes4)': FunctionFragment;
        'transferOwnership(address)': FunctionFragment;
        'valid(string)': FunctionFragment;
        'withdraw()': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'MIN_REGISTRATION_DURATION' | 'available' | 'commit' | 'commitments' | 'makeCommitment' | 'maxCommitmentAge' | 'minCommitmentAge' | 'nameWrapper' | 'owner' | 'prices' | 'recoverFunds' | 'register' | 'renew' | 'renounceOwnership' | 'rentPrice' | 'reverseRegistrar' | 'supportsInterface' | 'transferOwnership' | 'valid' | 'withdraw'): FunctionFragment;
    encodeFunctionData(functionFragment: 'MIN_REGISTRATION_DURATION', values?: undefined): string;
    encodeFunctionData(functionFragment: 'available', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'commit', values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: 'commitments', values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: 'makeCommitment', values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: 'maxCommitmentAge', values?: undefined): string;
    encodeFunctionData(functionFragment: 'minCommitmentAge', values?: undefined): string;
    encodeFunctionData(functionFragment: 'nameWrapper', values?: undefined): string;
    encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
    encodeFunctionData(functionFragment: 'prices', values?: undefined): string;
    encodeFunctionData(functionFragment: 'recoverFunds', values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: 'register', values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: 'renew', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
    encodeFunctionData(functionFragment: 'rentPrice', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'reverseRegistrar', values?: undefined): string;
    encodeFunctionData(functionFragment: 'supportsInterface', values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'valid', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'withdraw', values?: undefined): string;
    decodeFunctionResult(functionFragment: 'MIN_REGISTRATION_DURATION', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'available', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'commit', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'commitments', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'makeCommitment', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'maxCommitmentAge', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'minCommitmentAge', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'nameWrapper', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'prices', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'recoverFunds', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'register', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'renew', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'rentPrice', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'reverseRegistrar', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'valid', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
    events: {
        'NameRegistered(string,bytes32,address,uint256,uint256,uint256)': EventFragment;
        'NameRenewed(string,bytes32,uint256,uint256)': EventFragment;
        'OwnershipTransferred(address,address)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'NameRegistered'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'NameRenewed'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}
export interface NameRegisteredEventObject {
    name: string;
    label: string;
    owner: string;
    baseCost: BigNumber;
    premium: BigNumber;
    expires: BigNumber;
}
export type NameRegisteredEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], NameRegisteredEventObject>;
export type NameRegisteredEventFilter = TypedEventFilter<NameRegisteredEvent>;
export interface NameRenewedEventObject {
    name: string;
    label: string;
    cost: BigNumber;
    expires: BigNumber;
}
export type NameRenewedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], NameRenewedEventObject>;
export type NameRenewedEventFilter = TypedEventFilter<NameRenewedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface FILRegistrarController extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FILRegistrarControllerInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        MIN_REGISTRATION_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;
        available(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        commit(commitment: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        commitments(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        makeCommitment(name: PromiseOrValue<string>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, secret: PromiseOrValue<BytesLike>, resolver: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>[], reverseRecord: PromiseOrValue<boolean>, ownerControlledFuses: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        maxCommitmentAge(overrides?: CallOverrides): Promise<[BigNumber]>;
        minCommitmentAge(overrides?: CallOverrides): Promise<[BigNumber]>;
        nameWrapper(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        prices(overrides?: CallOverrides): Promise<[string]>;
        recoverFunds(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        register(name: PromiseOrValue<string>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, resolver: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>[], reverseRecord: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renew(name: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rentPrice(name: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            IPriceOracle.PriceStructOutput
        ] & {
            price: IPriceOracle.PriceStructOutput;
        }>;
        reverseRegistrar(overrides?: CallOverrides): Promise<[string]>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        valid(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    MIN_REGISTRATION_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
    available(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    commit(commitment: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    commitments(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    makeCommitment(name: PromiseOrValue<string>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, secret: PromiseOrValue<BytesLike>, resolver: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>[], reverseRecord: PromiseOrValue<boolean>, ownerControlledFuses: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    maxCommitmentAge(overrides?: CallOverrides): Promise<BigNumber>;
    minCommitmentAge(overrides?: CallOverrides): Promise<BigNumber>;
    nameWrapper(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    prices(overrides?: CallOverrides): Promise<string>;
    recoverFunds(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    register(name: PromiseOrValue<string>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, resolver: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>[], reverseRecord: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renew(name: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rentPrice(name: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IPriceOracle.PriceStructOutput>;
    reverseRegistrar(overrides?: CallOverrides): Promise<string>;
    supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    valid(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    withdraw(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        MIN_REGISTRATION_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
        available(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        commit(commitment: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        commitments(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        makeCommitment(name: PromiseOrValue<string>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, secret: PromiseOrValue<BytesLike>, resolver: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>[], reverseRecord: PromiseOrValue<boolean>, ownerControlledFuses: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        maxCommitmentAge(overrides?: CallOverrides): Promise<BigNumber>;
        minCommitmentAge(overrides?: CallOverrides): Promise<BigNumber>;
        nameWrapper(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        prices(overrides?: CallOverrides): Promise<string>;
        recoverFunds(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        register(name: PromiseOrValue<string>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, resolver: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>[], reverseRecord: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        renew(name: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        rentPrice(name: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IPriceOracle.PriceStructOutput>;
        reverseRegistrar(overrides?: CallOverrides): Promise<string>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        valid(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        withdraw(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        'NameRegistered(string,bytes32,address,uint256,uint256,uint256)'(name?: null, label?: PromiseOrValue<BytesLike> | null, owner?: PromiseOrValue<string> | null, baseCost?: null, premium?: null, expires?: null): NameRegisteredEventFilter;
        NameRegistered(name?: null, label?: PromiseOrValue<BytesLike> | null, owner?: PromiseOrValue<string> | null, baseCost?: null, premium?: null, expires?: null): NameRegisteredEventFilter;
        'NameRenewed(string,bytes32,uint256,uint256)'(name?: null, label?: PromiseOrValue<BytesLike> | null, cost?: null, expires?: null): NameRenewedEventFilter;
        NameRenewed(name?: null, label?: PromiseOrValue<BytesLike> | null, cost?: null, expires?: null): NameRenewedEventFilter;
        'OwnershipTransferred(address,address)'(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        MIN_REGISTRATION_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
        available(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        commit(commitment: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        commitments(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        makeCommitment(name: PromiseOrValue<string>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, secret: PromiseOrValue<BytesLike>, resolver: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>[], reverseRecord: PromiseOrValue<boolean>, ownerControlledFuses: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        maxCommitmentAge(overrides?: CallOverrides): Promise<BigNumber>;
        minCommitmentAge(overrides?: CallOverrides): Promise<BigNumber>;
        nameWrapper(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        prices(overrides?: CallOverrides): Promise<BigNumber>;
        recoverFunds(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        register(name: PromiseOrValue<string>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, resolver: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>[], reverseRecord: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renew(name: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rentPrice(name: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        reverseRegistrar(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        valid(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        MIN_REGISTRATION_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        available(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        commit(commitment: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        commitments(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        makeCommitment(name: PromiseOrValue<string>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, secret: PromiseOrValue<BytesLike>, resolver: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>[], reverseRecord: PromiseOrValue<boolean>, ownerControlledFuses: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxCommitmentAge(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minCommitmentAge(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nameWrapper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        prices(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recoverFunds(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        register(name: PromiseOrValue<string>, owner: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, resolver: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>[], reverseRecord: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renew(name: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rentPrice(name: PromiseOrValue<string>, duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reverseRegistrar(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        valid(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
