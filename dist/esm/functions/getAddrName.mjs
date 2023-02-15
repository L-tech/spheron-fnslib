// src/functions/getAddrName.ts
var raw = async ({ contracts }, name) => {
  const baseRegistrar = await contracts?.getPublicResolver();
  return {
    to: baseRegistrar.address,
    data: baseRegistrar.interface.encodeFunctionData("name", [name])
  };
};
var decode = async ({ contracts }, data) => {
  if (data === null)
    return;
  const baseRegistrar = await contracts?.getPublicResolver();
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
export {
  getAddrName_default as default
};
