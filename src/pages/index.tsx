import {
  Box,
  Button,
  Card,
  Divider,
  Flex,
  FlexItem,
  Heading,
  Text,
  TextField,
} from "@upstart/patina-design-system";
import styles from "../styles/Home.module.css";
import {FormEventHandler, ReactElement, useContext, useMemo, useState} from "react";
import { LdFlag, getLdFlags } from "@/api/launchDarkly";
import { FeatureFlagItem } from "./FeatureFlagItem";
import { BaseLayout } from "@/templates/BaseLayout";
import DeprecatedFlag from "@/components/deprecatedFlag/deprecatedFlag";
import {BannerContext, BannerVariant} from "@/context/BannerContext";

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
      <ColumnHeader title="Production" />
      <ColumnHeader title="Actions" />
    </Box>
  );
};
export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [flags, setFlags] = useState(getLdFlags);
  const bannerContext = useContext(BannerContext);

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    let returnedFlags = [...getLdFlags];
    returnedFlags = returnedFlags.filter((flag: LdFlag) =>
      flag.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
    setFlags(returnedFlags);
    console.log(returnedFlags);
  };

  const deprecatedFlags = [
    {
      key: 'deprecatedFlag1',
      name: 'UseV2',
      value: true,
      status: 'Has not been requested in last 90 days'
    },
    {
      key: 'deprecatedFlag2',
      name: 'Experimental Flag',
      value: false,
      status: 'Status has been Inactive for 28 days'
    },
    {
      key: 'deprecatedFlag3',
      name: 'Fake Flag',
      value: '10',
      status: 'Only one variation served for last 365 days'
    }
  ]

  const onSnoozeDeprecatedFlag = (flagName: string) => {
    bannerContext.setMessage(
      `Snoozed deprecated flag alert for ${flagName}`,
      BannerVariant.success
    );
  }
  const onClickAddProject = () => setShowDropdown(true);

  return (
    <BaseLayout>
      <Box>
        <Box className={styles.main}>
          <Box className={styles.header}>
            <Heading component="h1" size="xl">
              Upstart Toggle Tracker
            </Heading>
            <Box className={styles.addProjectButton}>
              <Button onChange={onClickAddProject}>Add Projects</Button>
            </Box>
          </Box>
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
                    <Box key={flag.name} style={{ padding: "10px" }}>
                      <FeatureFlagItem name={flag.name} values={flag.values} />
                    </Box>
                  );
                })}
              </Box>
            </FlexItem>
            <Divider vertical />
            <FlexItem flexBasis="33">
              <Flex style={{ padding: "10px" }}>
                <Heading size='m'>Deprecation Alerts</Heading>
                <br />
                {
                  deprecatedFlags.map(flag => (<DeprecatedFlag key={flag.key} flag={flag} onSnooze={() => onSnoozeDeprecatedFlag(flag.name)}/>))
                }
              </Flex>
              <Flex style={{ padding: "10px" }}>
                <Heading size='m'>Sync</Heading>
                <Card className={styles.syncContainer}>

                </Card>
              </Flex>
            </FlexItem>
          </Flex>
        </Box>
      </Box>
    </BaseLayout>
  );
}
