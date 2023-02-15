"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var getAddrName_exports = {};
__export(getAddrName_exports, {
  default: () => getAddrName_default
});
module.exports = __toCommonJS(getAddrName_exports);
const raw = async ({ contracts }, name) => {
  const baseRegistrar = await (contracts == null ? void 0 : contracts.getPublicResolver());
  return {
    to: baseRegistrar.address,
    data: baseRegistrar.interface.encodeFunctionData("name", [name])
  };
};
const decode = async ({ contracts }, data) => {
  if (data === null)
    return;
  const baseRegistrar = await (contracts == null ? void 0 : contracts.getPublicResolver());
  try {
    const result = baseRegistrar.interface.decodeFunctionResult("name", data);
    return result[0];
  } catch {
    return "nil";
  }
};
var getAddrName_default = {
  raw,
  decode
};
