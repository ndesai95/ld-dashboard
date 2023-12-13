import { LdFlag } from "@/api/launchDarkly";
import {
  Box,
  ButtonIcon,
  Card,
  IconNotifications,
  IconNotificationsOff,
  Text,
} from "@upstart/patina-design-system";
import { ReactElement, SyntheticEvent, useState } from "react";

export const FeatureFlagItem = ({ name, values }: LdFlag): ReactElement => {
  const [notified, setNotified] = useState(false);

  const handleNotified = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();

    // make api call to change notification
    setNotified(!notified);
  };
  const FlagColumn = ({ name }: any): ReactElement => {
    return (
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text>{name.toString()}</Text>
        {name.toString() == "true" && (
          <ButtonIcon size="m">
            <IconNotificationsOff size={"m"} />
          </ButtonIcon>
        )}
      </Box>
    );
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
        <Text>{values.s1.toString()}</Text>
        <Text>{values.s2.toString()}</Text>
        <Text>{values.prod.toString()}</Text>
        <Box>
          <ButtonIcon size="m" onClick={handleNotified}>
            {notified ? (
              <IconNotificationsOff size={"m"} />
            ) : (
              <IconNotifications />
            )}
          </ButtonIcon>
        </Box>
      </Card>
    </Box>
  );
};
