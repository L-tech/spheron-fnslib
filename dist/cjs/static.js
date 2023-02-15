"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var static_exports = {};
__export(static_exports, {
  default: () => static_default
});
module.exports = __toCommonJS(static_exports);
var import_contracts = __toESM(require("./contracts/index"));
var import_index = require("./index");
class StaticFNS extends import_index.FNS {
  constructor(provider, { functions, contracts, ...options }) {
    super(options);
    this.gqlInstance = {
      client: { request: () => Promise.resolve(null) },
      setUrl: () => Promise.resolve(),
      gql: (query) => query.join()
    };
    this.setStaticProvider = (provider) => {
      this.provider = provider;
      const network = provider.network.chainId;
      this.contracts = new import_contracts.default(
        provider,
        this.getContractAddress(String(network)),
        (name) => Promise.resolve(this.contractsObject[name])
      );
    };
    this.setProvider = async (provider) => {
      this.setStaticProvider(provider);
    };
    this.getModule = async () => this.functions;
    this.getFunction = (subFunc, _writeable, exportName, mod, path) => {
      const base = mod[exportName === "default" ? path : exportName];
      if (subFunc === "raw" || subFunc === "decode") {
        return base[subFunc];
      }
      return base;
    };
    this.functions = functions;
    this.contractsObject = contracts;
    this.setStaticProvider(provider);
  }
}
var static_default = StaticFNS;
