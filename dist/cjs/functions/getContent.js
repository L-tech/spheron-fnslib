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
var getContent_exports = {};
__export(getContent_exports, {
  default: () => getContent_default
});
module.exports = __toCommonJS(getContent_exports);
var import_strings = require("@ethersproject/strings");
var import_normalise = require("../utils/normalise");
var import_contentHash = require("../utils/contentHash");
const raw = async ({ contracts }, name) => {
  const baseRegistrar = await (contracts == null ? void 0 : contracts.getPublicResolver());
  const label = (0, import_normalise.namehash)(name);
  return {
    to: baseRegistrar.address,
    data: baseRegistrar.interface.encodeFunctionData("contenthash", [label])
  };
};
const decode = async ({ contracts }, data) => {
  if (data === null)
    return;
  const baseRegistrar = await (contracts == null ? void 0 : contracts.getPublicResolver());
  try {
    const result = baseRegistrar.interface.decodeFunctionResult(
      "contenthash",
      data
    );
    return (0, import_contentHash.decodeContenthash)((0, import_strings.toUtf8String)(result[0]));
  } catch {
    return;
  }
};
var getContent_default = {
  raw,
  decode
};
