// src/static.ts
import ContractManager from "./contracts/index.mjs";
import { FNS } from "./index.mjs";
var StaticFNS = class extends FNS {
  functions;
  contractsObject;
  gqlInstance = {
    client: { request: () => Promise.resolve(null) },
    setUrl: () => Promise.resolve(),
    gql: (query) => query.join()
  };
  constructor(provider, { functions, contracts, ...options }) {
    super(options);
    this.functions = functions;
    this.contractsObject = contracts;
    this.setStaticProvider(provider);
  }
  setStaticProvider = (provider) => {
    this.provider = provider;
    const network = provider.network.chainId;
    this.contracts = new ContractManager(
      provider,
      this.getContractAddress(String(network)),
      (name) => Promise.resolve(this.contractsObject[name])
    );
  };
  setProvider = async (provider) => {
    this.setStaticProvider(provider);
  };
  getModule = async () => this.functions;
  getFunction = (subFunc, _writeable, exportName, mod, path) => {
    const base = mod[exportName === "default" ? path : exportName];
    if (subFunc === "raw" || subFunc === "decode") {
      return base[subFunc];
    }
    return base;
  };
};
var static_default = StaticFNS;
export {
  static_default as default
};
