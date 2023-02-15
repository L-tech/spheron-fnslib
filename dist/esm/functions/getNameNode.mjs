// src/functions/getNameNode.ts
var raw = async ({ contracts }, name) => {
  const baseRegistrar = await contracts?.getReverseRegistrar();
  return {
    to: baseRegistrar.address,
    data: baseRegistrar.interface.encodeFunctionData("node", [name])
  };
};
var decode = async ({ contracts }, data) => {
  if (data === null)
    return;
  const baseRegistrar = await contracts?.getReverseRegistrar();
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
export {
  getNameNode_default as default
};
