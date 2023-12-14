import { LdFlag } from "@/api/launchDarkly";
import { ReactElement, SyntheticEvent, useContext, useState } from "react";

import { BannerContext, BannerVariant } from "@/context/BannerContext";
import {
  Box,
  ButtonIcon,
  Card,
  IconNotificationsActive,
  IconNotificationsOff,
  Text,
} from "@upstart/patina-design-system";

export const FeatureFlagItem = ({ name, values }: LdFlag): ReactElement => {
  const [notified, setNotified] = useState(false);

  const bannerContext = useContext(BannerContext);

  const handleNotified = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();

    // make api call to change notification
    setNotified(!notified);
    bannerContext.setMessage(
      "Successfully changed notification status for " +
        name +
        " to " +
        notified,
      BannerVariant.success
    );
  };

  const flagText = (flagValue: string): string => {
    return flagValue + (flagValue != "true" && flagValue != "false" ? "%" : "");
  };

  return (
    <Box>
      <Card
        padding={"2xl"}
        style={{
          alignItems: "center",
          display: "grid",
          gap: "16px",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        }}
      >
        <Text bold color="brand">
          {name}
        </Text>
        <Text>{flagText(values.s1.toString())}</Text>
        <Text>{flagText(values.s2.toString())}</Text>
        <Text>{flagText(values.prod.toString())}</Text>
        <Box>
          <ButtonIcon size="m" onClick={handleNotified}>
            {notified ? (
              <IconNotificationsOff
                color={"warning"}
                title="notification off"
              />
            ) : (
              <IconNotificationsActive
                color={"brand"}
                title="notification on"
              />
            )}
          </ButtonIcon>
        </Box>
      </Card>
    </Box>
  );
};
