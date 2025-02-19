import { atom } from "recoil";

export const balanceAtom = atom<number>({
  key: "balanceState",
  default: 0, // or any default value
});
