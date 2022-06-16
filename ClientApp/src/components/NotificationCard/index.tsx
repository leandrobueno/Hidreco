import 'antd/dist/antd.css';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { Grid, GridItem } from '@chakra-ui/react';
import {
  Checkbox,
  CheckboxGroup,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from '@chakra-ui/react';

const NotificationCard = ({
  title,
  checkNotification,
}: {
  checkNotification: string;
  title: string;
}) => (
  <div className="site-card-border-less-wrapper">
    <Card
      title={title}
      bordered={false}
      style={{
        width: '100%',
        border: '2px solid #eee',
      }}
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="100%">
          <CheckboxGroup
            colorScheme="blue"
            defaultValue={['Notificação', 'Email', 'SMS']}
          >
            <Stack spacing={[1, 5]} direction={['column', 'column']}>
              <Checkbox value="notificacao">Notificação</Checkbox>
              <Checkbox value="email">Email</Checkbox>
              <Checkbox value="sms">SMS</Checkbox>
            </Stack>
          </CheckboxGroup>
        </GridItem>
        <GridItem w="100%">
          <Text fontSize="md">Notificar quando atingir</Text>
          <br />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}
          >
            <Stack shouldWrapChildren direction="row">
              <NumberInput
                size="lg"
                maxW={32}
                maxH={32}
                defaultValue={100}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Stack>
            <Text style={{ marginLeft: '0.5rem' }} fontSize="md">
              Litros
            </Text>
          </div>
        </GridItem>
      </Grid>
    </Card>
  </div>
);

export default NotificationCard;
