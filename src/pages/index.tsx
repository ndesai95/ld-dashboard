import {
  Box,
  Button,
  Card,
  Divider,
  Dropdown,
  Flex,
  FlexItem,
  Text,
  TextField,
} from "@upstart/patina-design-system";
import styles from "../styles/Home.module.css";
import { FormEventHandler, ReactElement, useState } from "react";
import { LdFlag, getLdFlags } from "@/api/launchDarkly";
import { FeatureFlagItem } from "./FeatureFlagItem";

const ColumnHeader = ({ title }: { title: string }): ReactElement => {
  return <Text bold>{title}</Text>;
};

const GridHeaders = () => {
  return (
    <Box
      style={{
        display: "grid",
        gap: "16px",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        padding: "32px",
        alignItems: "center",
      }}
    >
      <ColumnHeader title="Name" />
      <ColumnHeader title="Staging 1" />
      <ColumnHeader title="Staging 2" />
      <ColumnHeader title="Environment" />
      <ColumnHeader title="Actions" />
    </Box>
  );
};
export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [flags, setFlags] = useState(getLdFlags);

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    let returnedFlags = [...getLdFlags];
    returnedFlags = returnedFlags.filter((flag: LdFlag) =>
      flag.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
    setFlags(returnedFlags);
    console.log(returnedFlags);
  };

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
              <form onSubmit={onSubmit}>
                <TextField
                  label="Search for a feature flag"
                  onChange={(updatedValue) => {
                    setSearchQuery(updatedValue.target.value);
                  }}
                  value={searchQuery}
                />
              </form>
              <GridHeaders />
              {flags.map((flag: any) => {
                return (
                  <Box key={flag.name}>
                    <FeatureFlagItem name={flag.name} values={flag.values} />;
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
