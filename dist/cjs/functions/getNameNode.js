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
var getNameNode_exports = {};
__export(getNameNode_exports, {
  default: () => getNameNode_default
});
module.exports = __toCommonJS(getNameNode_exports);
const raw = async ({ contracts }, name) => {
  const baseRegistrar = await (contracts == null ? void 0 : contracts.getReverseRegistrar());
  return {
    to: baseRegistrar.address,
    data: baseRegistrar.interface.encodeFunctionData("node", [name])
  };
};
const decode = async ({ contracts }, data) => {
  if (data === null)
    return;
  const baseRegistrar = await (contracts == null ? void 0 : contracts.getReverseRegistrar());
  try {
    const result = baseRegistrar.interface.decodeFunctionResult("node", data);
    return result["0"];
  } catch {
    return;
  }
};
var getNameNode_default = {
  raw,
  decode
};
