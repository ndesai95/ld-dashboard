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
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        padding: "10px",
        margin: "10px",
      }}
    >
      <Text variant="detailMShort" bold>
        Name
      </Text>
      <Text variant="detailMShort" bold>
        Staging 1
      </Text>
      <Text variant="detailMShort" bold>
        Staging 2
      </Text>
      <Text variant="detailMShort" bold>
        Environment
      </Text>
    </Box>
  );
};
export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);

  const onClickAddProject = () => setShowDropdown(true);

  let grouped = getLdFlags.reduce((result: any, currentValue: any) => {
    (result[currentValue["name"]] = result[currentValue["name"]] || []).push(
      currentValue
    );
    return result;
  }, {});

  console.log(Object.values(grouped));

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
              {Object.values(grouped).map((flags: any) => {
                return (
                  <Box key={"test"}>
                    <FeatureFlagItem flags={flags} />;
                  </Box>
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
