import { LdFlag } from "@/api/launchDarkly";
import { Box, Card, Text } from "@upstart/patina-design-system";
import { ReactElement } from "react";

export const FeatureFlagItem = ({ flags }: any): ReactElement => {
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
        <Text>{flags[0].name}</Text>
        {flags.map((env: LdFlag) => (
          <Text key={env.name}>{env.value.toString()}</Text>
        ))}
      </Card>
    </Box>
  );
};
