// src/utils/singleCall.ts
var singleCall_default = async (provider, fnsData, func, ...data) => {
  const { passthrough, ...rawData } = await func.raw(fnsData, ...data);
  const result = await provider.call({ ...rawData, ccipReadEnabled: true }).catch(() => null);
  if (!result)
    return;
  if (passthrough)
    return func.decode(fnsData, result, passthrough, ...data);
  return func.decode(fnsData, result, ...data);
};
export {
  singleCall_default as default
};
