import { getNames } from "country-list";

export function getCountryNames(): string[] {
  const countryNames = getNames();
  return countryNames;
}
