// src/functions/registerName.ts
import { wrappedLabelLengthCheck } from "../utils/wrapper.mjs";
async function registerName_default({ contracts }, name, address, duration, { value }) {
  const labels = name.split(".");
  if (labels.length !== 2 || labels[1] !== "fil")
    throw new Error("Currently only .fil TLD registrations are supported");
  wrappedLabelLengthCheck(labels[0]);
  const controller = await contracts.getEthRegistrarController();
  const resolver = await contracts?.getPublicResolver();
  return controller.populateTransaction.register(
    name,
    address,
    duration,
    resolver.address,
    [],
    true,
    {
      value
    }
  );
}
export {
  registerName_default as default
};
