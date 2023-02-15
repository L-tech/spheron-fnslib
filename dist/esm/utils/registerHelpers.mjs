// src/utils/registerHelpers.ts
import { defaultAbiCoder } from "@ethersproject/abi";
import { keccak256 } from "@ethersproject/keccak256";
import { labelhash } from "./labels.mjs";
import { namehash } from "./normalise.mjs";
import { generateRecordCallArray } from "./recordHelpers.mjs";
var randomSecret = () => {
  const bytes = Buffer.allocUnsafe(32);
  return `0x${crypto.getRandomValues(bytes).toString("hex")}`;
};
var makeCommitmentData = ({
  name,
  owner,
  duration,
  resolver,
  records,
  reverseRecord
}) => {
  const labelHash = labelhash(name.split(".")[0]);
  const hash = namehash(name);
  const resolverAddress = resolver.address;
  if (reverseRecord) {
    if (!records) {
      records = { coinTypes: [{ key: "ETH", value: owner }] };
    } else if (!records.coinTypes?.find((c) => c.key === "ETH")) {
      if (!records.coinTypes)
        records.coinTypes = [];
      records.coinTypes.push({ key: "ETH", value: owner });
    }
  }
  const data = records ? generateRecordCallArray(hash, records, resolver) : [];
  return [labelHash, owner, duration, resolverAddress, data, !!reverseRecord];
};
var makeRegistrationData = (params) => {
  const commitmentData = makeCommitmentData(params);
  const label = params.name.split(".")[0];
  commitmentData[0] = label;
  return commitmentData;
};
var _makeCommitment = (params) => {
  return keccak256(
    defaultAbiCoder.encode(
      [
        "bytes32",
        "address",
        "uint256",
        "bytes32",
        "address",
        "bytes[]",
        "bool",
        "uint16"
      ],
      params
    )
  );
};
var makeCommitment = ({
  secret = randomSecret(),
  ...inputParams
}) => {
  const generatedParams = makeCommitmentData({
    ...inputParams,
    secret
  });
  const commitment = _makeCommitment(generatedParams);
  return {
    secret,
    commitment
  };
};
export {
  _makeCommitment,
  makeCommitment,
  makeCommitmentData,
  makeRegistrationData,
  randomSecret
};
