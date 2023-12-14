import {
  Box,
  ButtonIcon,
  Card,
  Divider,
  Flex,
  FlexItem,
  IconArchive,
  IconNotificationsOff,
  Text
} from "@upstart/patina-design-system";
import styles from './deprecatedFlag.module.scss';
interface DeprecatedFlagProps {
  flag: {
    key: string,
    name: string,
    value: any,
    status?: string,
  }
  onSnooze: (id: string) => void;
}

const DeprecatedFlag = ({flag, onSnooze}: DeprecatedFlagProps) => {

  const archiveFlag = () => {
    console.log('ARCHIVING');
  }

  return (
    <Card className={styles.container}>
      <Flex direction='row' justifyContent='spaceBetween'>
        <FlexItem flexBasis='66'>
          <Text>{flag.name}</Text>
        </FlexItem>
        <FlexItem>
          <ButtonIcon onClick={archiveFlag}>
            <IconArchive/>
          </ButtonIcon>
        </FlexItem>
        <FlexItem>
          <ButtonIcon onClick={() => onSnooze(flag.key)}>
            <IconNotificationsOff/>
          </ButtonIcon>
        </FlexItem>
      </Flex>
      <Divider />
      <Box className={styles.status}>
        <Text variant='detailS'>{flag.status}</Text>
      </Box>
    </Card>
  )
}

export default DeprecatedFlag;