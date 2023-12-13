import { LdFlag } from "@/api/launchDarkly";
import { Box, Card, Text } from "@upstart/patina-design-system";
import { ReactElement } from "react";

export const FeatureFlagItem = ({
  key,
  value,
  environment,
}: LdFlag): ReactElement => {
  return (
    <Box>
      <Card
        padding={"2xl"}
        style={{
          alignItems: "center",
          display: "grid",
          gap: "16px",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        <Text>{key}</Text>
        <Text>{value}</Text>
        <Text>{environment}</Text>
      </Card>
    </Box>
  );
};
