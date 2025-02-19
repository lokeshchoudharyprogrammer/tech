import { useRecoilValueLoadable } from "recoil";
import { atom } from "recoil";

const balanceAtom = atom<number>({
  key: "balanceState",
  default: 0, // or any default value
});

export function useBalance() {
  if (typeof window === "undefined") return null; // Prevent SSR issues

  const balanceLoadable = useRecoilValueLoadable(balanceAtom);

  if (balanceLoadable.state === "loading") return null;
  if (balanceLoadable.state === "hasError") return null;
  
  return balanceLoadable.contents;
}
