import { INNER_ENUM } from "./my.types";

export const enum OUTER_ENUM {
  "O1" = INNER_ENUM.A1,
  "O2" = 1,
}

export const XXX = [INNER_ENUM.A1, INNER_ENUM.A2];
