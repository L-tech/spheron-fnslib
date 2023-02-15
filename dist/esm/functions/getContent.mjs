// src/functions/getContent.ts
import { toUtf8String } from "@ethersproject/strings";
import { namehash } from "../utils/normalise.mjs";
import { decodeContenthash } from "../utils/contentHash.mjs";
var raw = async ({ contracts }, name) => {
  const baseRegistrar = await contracts?.getPublicResolver();
  const label = namehash(name);
  return {
    to: baseRegistrar.address,
    data: baseRegistrar.interface.encodeFunctionData("contenthash", [label])
  };
};
var decode = async ({ contracts }, data) => {
  if (data === null)
    return;
  const baseRegistrar = await contracts?.getPublicResolver();
  try {
    const result = baseRegistrar.interface.decodeFunctionResult(
      "contenthash",
      data
    );
    return decodeContenthash(toUtf8String(result[0]));
  } catch {
    return;
  }
};
var getContent_default = {
  raw,
  decode
};
export {
  getContent_default as default
};
