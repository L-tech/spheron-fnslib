export declare const labelhash: (input: string) => string;
export declare const keccakFromString: (input: string) => string;
export declare function decodeLabelhash(hash: string): string;
export declare function encodeLabelhash(hash: string): string;
export declare function isEncodedLabelhash(hash: string): boolean;
export declare function saveLabel(label: string): string;
export declare function saveName(name: string): void;
export declare function checkLabel(hash: string): string;
export declare function encodeLabel(label: any): any;
export declare function parseName(name: string): string;
export declare function checkIsDecrypted(string: string | string[]): boolean;
export declare function decryptName(name: string): string;
export declare const truncateUndecryptedName: (name: string) => string;
export declare function checkLocalStorageSize(): string;
export declare const getEncryptedLabelAmount: (name: string) => number;
