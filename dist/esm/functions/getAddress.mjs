// src/functions/getAddress.ts
import { toUtf8String } from "@ethersproject/strings";
import { namehash } from "../utils/normalise.mjs";
var raw = async ({ contracts }, name) => {
  const baseRegistrar = await contracts?.getPublicResolver();
  const label = namehash(name);
  return {
    to: baseRegistrar.address,
    data: baseRegistrar.interface.encodeFunctionData("addr(bytes32,uint256)", [
      label,
      461
    ])
  };
};
var decode = async ({ contracts }, data) => {
  if (data === null)
    return;
  const baseRegistrar = await contracts?.getPublicResolver();
  try {
    const result = baseRegistrar.interface.decodeFunctionResult(
      "addr(bytes32,uint256)",
      data
    );
    return toUtf8String(result[0]);
  } catch {
    return;
  }
};
var getAddress_default = {
  raw,
  decode
};
export {
  getAddress_default as default
};
