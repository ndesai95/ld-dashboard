import { createContext } from "react";
export enum BannerVariant {
  success = "success",
  error = "error",
}
interface BannerContextInterface {
  message: string;
  setMessage: (newMessage: string, newVariant?: BannerVariant) => void;
  variant: BannerVariant;
}

export const BannerContext = createContext<BannerContextInterface>(
  {} as BannerContextInterface
);
