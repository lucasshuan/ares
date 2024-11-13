import { Region } from "@prisma/client";
import iso from "iso-3166-1";

type RegionShort = "EU" | "NA" | "SA" | "AS" | "AF" | "OC";

const regionShortMap: { [regionShort: string]: Region } = {
  EU: Region.Europe,
  NA: Region.NorthAmerica,
  SA: Region.SouthAmerica,
  AS: Region.Asia,
  AF: Region.Africa,
  OC: Region.Oceania,
};

const countryToRegionMap: { [country: string]: RegionShort } = {
  // North America
  US: "NA",
  CA: "NA",
  MX: "NA",
  GL: "NA",
  BM: "NA",
  KY: "NA",
  AI: "NA",
  AG: "NA",
  BS: "NA",
  BB: "NA",
  BZ: "NA",
  CR: "NA",
  CU: "NA",
  DM: "NA",
  DO: "NA",
  SV: "NA",
  GD: "NA",
  GT: "NA",
  HT: "NA",
  HN: "NA",
  JM: "NA",
  MS: "NA",
  NI: "NA",
  PA: "NA",
  PR: "NA",
  KN: "NA",
  LC: "NA",
  VC: "NA",
  TT: "NA",
  TC: "NA",
  VG: "NA",
  VI: "NA",

  // South America
  BR: "SA",
  AR: "SA",
  CL: "SA",
  CO: "SA",
  PE: "SA",
  VE: "SA",
  BO: "SA",
  UY: "SA",
  PY: "SA",
  EC: "SA",
  GY: "SA",
  SR: "SA",
  GF: "SA",
  FK: "SA",

  // Europe
  FR: "EU",
  DE: "EU",
  IT: "EU",
  ES: "EU",
  GB: "EU",
  NL: "EU",
  BE: "EU",
  SE: "EU",
  CH: "EU",
  AT: "EU",
  DK: "EU",
  FI: "EU",
  NO: "EU",
  PL: "EU",
  CZ: "EU",
  HU: "EU",
  PT: "EU",
  IE: "EU",
  GR: "EU",
  RO: "EU",
  BG: "EU",
  RS: "EU",
  SK: "EU",
  HR: "EU",
  LT: "EU",
  LV: "EU",
  EE: "EU",
  IS: "EU",
  LU: "EU",
  MT: "EU",
  MD: "EU",
  UA: "EU",
  BY: "EU",
  AL: "EU",
  MK: "EU",
  BA: "EU",
  SI: "EU",
  FO: "EU",
  GI: "EU",
  IM: "EU",
  JE: "EU",
  GG: "EU",
  MC: "EU",
  LI: "EU",
  VA: "EU",
  SM: "EU",
  ME: "EU",
  XK: "EU",

  // Africa
  NG: "AF",
  ZA: "AF",
  EG: "AF",
  DZ: "AF",
  KE: "AF",
  MA: "AF",
  ET: "AF",
  GH: "AF",
  TZ: "AF",
  UG: "AF",
  CI: "AF",
  CM: "AF",
  SN: "AF",
  SD: "AF",
  TN: "AF",
  ZW: "AF",
  AO: "AF",
  ZM: "AF",
  BF: "AF",
  ML: "AF",
  NE: "AF",
  MZ: "AF",
  MW: "AF",
  GN: "AF",
  BJ: "AF",
  RW: "AF",
  BI: "AF",
  TG: "AF",
  SL: "AF",
  GA: "AF",
  NA: "AF",
  GQ: "AF",
  MR: "AF",
  LY: "AF",
  ER: "AF",
  SO: "AF",
  LR: "AF",
  CF: "AF",
  SC: "AF",
  DJ: "AF",
  LS: "AF",
  SZ: "AF",
  KM: "AF",
  ST: "AF",
  CV: "AF",
  GW: "AF",
  MU: "AF",
  YT: "AF",
  RE: "AF",
  SH: "AF",
  SS: "AF",

  // Asia
  CN: "AS",
  JP: "AS",
  IN: "AS",
  KR: "AS",
  SG: "AS",
  MY: "AS",
  ID: "AS",
  PH: "AS",
  TH: "AS",
  VN: "AS",
  SA: "AS",
  AE: "AS",
  IR: "AS",
  IL: "AS",
  PK: "AS",
  BD: "AS",
  IQ: "AS",
  QA: "AS",
  LB: "AS",
  KH: "AS",
  MM: "AS",
  JO: "AS",
  OM: "AS",
  YE: "AS",
  BH: "AS",
  MV: "AS",
  KW: "AS",
  SY: "AS",
  LK: "AS",
  TM: "AS",
  TJ: "AS",
  UZ: "AS",
  KG: "AS",
  KZ: "AS",
  MN: "AS",
  GE: "AS",
  AM: "AS",
  AZ: "AS",
  HK: "AS",
  MO: "AS",
  NP: "AS",
  BT: "AS",
  TL: "AS",
  AF: "AS",

  // Oceania
  AU: "OC",
  NZ: "OC",
  FJ: "OC",
  PG: "OC",
  WS: "OC",
  TO: "OC",
  SB: "OC",
  VU: "OC",
  NR: "OC",
  KI: "OC",
  TV: "OC",
  FM: "OC",
  MH: "OC",
  PW: "OC",
  NU: "OC",
  CK: "OC",
  MP: "OC",
  GU: "OC",
  PF: "OC",
  NC: "OC",
  WF: "OC",
  AS: "OC",
  TK: "OC",
};

export function getRegionByCountry(countryName: string): Region | undefined {
  const countryAlpha2 = iso.whereAlpha2(countryName)?.alpha2;
  if (!countryAlpha2) return undefined;

  const regionShort = countryToRegionMap[countryAlpha2.toUpperCase()];
  const region = regionShortMap[regionShort?.toUpperCase()];

  return region;
}