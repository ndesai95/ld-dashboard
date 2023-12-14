import { BannerProvider } from "@/context/BannerProvider";
import "@upstart/patina-design-system/css-reset";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BannerProvider>
      <Component {...pageProps} />
    </BannerProvider>
  );
}
