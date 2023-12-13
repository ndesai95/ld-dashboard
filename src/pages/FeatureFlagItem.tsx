import { LdFlag } from "@/api/launchDarkly";
import { Box, Card, Text } from "@upstart/patina-design-system";
import { ReactElement } from "react";

export const FeatureFlagItem = ({ name, values }: LdFlag): ReactElement => {
  return (
    <Box>
      <Card
        padding={"2xl"}
        style={{
          alignItems: "center",
          display: "grid",
          gap: "16px",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        }}
      >
        <Text>{name}</Text>
        <Text>{values.s1.toLocaleString()}</Text>
        <Text>{values.s2.toLocaleString()}</Text>
        <Text>{values.prod.toLocaleString()}</Text>
      </Card>
    </Box>
  );
};
