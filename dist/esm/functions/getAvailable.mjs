// src/functions/getAvailable.ts
var raw = async ({ contracts }, name) => {
  const baseRegistrar = await contracts?.getEthRegistrarController();
  const labels = name.split(".");
  if (labels.length !== 2 || labels[1] !== "fil") {
    throw new Error("Currently only .fil names can be checked for availability");
  }
  return {
    to: baseRegistrar.address,
    data: baseRegistrar.interface.encodeFunctionData("available", [labels[0]])
  };
};
var decode = async ({ contracts }, data) => {
  if (data === null)
    return;
  const baseRegistrar = await contracts?.getEthRegistrarController();
  try {
    const result = baseRegistrar.interface.decodeFunctionResult(
      "available",
      data
    );
    return result["0"];
  } catch {
    return;
  }
};
var getAvailable_default = {
  raw,
  decode
};
export {
  getAvailable_default as default
};
