import {Button, Card, Divider, Dropdown, Flex, FlexItem, Heading, Text} from "@upstart/patina-design-system";
import styles from '../styles/Home.module.css';
import {useState} from "react";

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
        <Flex direction='row' className={styles.content}>
          <FlexItem flexBasis='66'>
            <Card>
              TABLE OF FLAGS
            </Card>
          </FlexItem>
          <FlexItem flexBasis='33'>
            <Card>
              <Flex>
                <Card>
                  DEPRECATION STUFF
                </Card>
              </Flex>
              <Flex>
                <Card>
                  SYNC DOCS STUFF
                </Card>
              </Flex>
            </Card>
          </FlexItem>
        </Flex>
      </Card>
    </>
  )
}
