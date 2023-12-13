import {
  Box,
  Button,
  Card,
  Divider,
  Dropdown,
  Flex,
  FlexItem,
  Text,
} from "@upstart/patina-design-system";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { LdFlag, getLdFlags } from "@/api/launchDarkly";
import { FeatureFlagItem } from "./FeatureFlagItem";

const ColumnHeader = () => {
  return (
    <Box
      style={{
        alignItems: "center",
        display: "grid",
        gap: "16px",
        gridTemplateColumns: "1fr 1fr 1fr",
        padding: "10px",
        margin: "10px",
      }}
    >
      <Text variant="detailMShort" bold>
        key
      </Text>
      <Text variant="detailMShort" bold>
        value
      </Text>
      <Text variant="detailMShort" bold>
        environment
      </Text>
    </Box>
  );
};
export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);

  const onClickAddProject = () => setShowDropdown(true);
  return (
    <>
      <Card className={styles.main}>
        <div className={styles.header}>
          <h1>LaunchDarkly Feature Flags Dashboard</h1>
          <div className={styles.addProjectButton}>
            <Button onChange={onClickAddProject}>Add Projects</Button>
          </div>
        </div>
        <Divider />
        <Flex direction="row" className={styles.content}>
          <FlexItem flexBasis="66" style={{ padding: "10px" }}>
            <Box style={{ padding: "5xl" }}>
              <ColumnHeader />
              {getLdFlags.map((flag: LdFlag) => {
                return (
                  <FeatureFlagItem
                    key={flag.key}
                    value={flag.value}
                    environment={flag.environment}
                  />
                );
              })}
            </Box>
          </FlexItem>
          <FlexItem flexBasis="33">
            <Card>
              <Flex>
                <Card>DEPRECATION STUFF</Card>
              </Flex>
              <Flex>
                <Card>SYNC DOCS STUFF</Card>
              </Flex>
            </Card>
          </FlexItem>
        </Flex>
      </Card>
    </>
  );
}
