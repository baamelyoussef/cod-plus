import { atomWithStorage } from "jotai/utils";

const countryId = atomWithStorage(
  "countryId",
  null
);

export { countryId };
