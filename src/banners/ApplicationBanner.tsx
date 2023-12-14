import { ReactElement, useContext, useEffect } from "react";

import {
  Box,
  Banner,
  IconCheckCircleFilled,
  IconErrorFilled,
} from "@upstart/patina-design-system";

import { BannerContext, BannerVariant } from "@/context/BannerContext";

import { windowService } from "@/services/windowService";

export const ApplicationBanner = (): ReactElement => {
  const { message, variant } = useContext(BannerContext);
  useEffect(() => {
    if (message) {
      windowService.scrollToPageTop();
    }
  }, [message]);
  return (
    <Box
      style={{
        display: message ? "block" : "none",
        top: "58px",
      }}
    >
      {variant === BannerVariant.error ? (
        <Banner
          variant="announcement"
          backgroundColor="negative"
          leadingIcon={<IconErrorFilled />}
        >
          <Box component="span">{message}</Box>
        </Banner>
      ) : (
        <Banner leadingIcon={<IconCheckCircleFilled />}>
          <Box component="span">{message}</Box>
        </Banner>
      )}
    </Box>
  );
};
