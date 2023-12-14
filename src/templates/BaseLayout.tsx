import { ApplicationBanner } from "@/banners/ApplicationBanner";
import { Box, PatinaProvider } from "@upstart/patina-design-system";
import { ReactElement } from "react";

export type BaseLayoutProps = {
  children?: ReactElement;
  overrideGlobalPadding?: boolean;
};

export const BaseLayout = ({ children }: BaseLayoutProps): ReactElement => {
  return (
    <PatinaProvider>
      <ApplicationBanner />
      <main>
        <Box style={{ display: "block" }}>{children}</Box>
      </main>
    </PatinaProvider>
  );
};
