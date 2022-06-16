import { Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Grid, GridItem } from '@chakra-ui/react';
import UserCard from '../../components/UserCard';

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value: any) => console.log(value);

export default function Servicos() {
  return (
    <div>
      <Heading as="h4" size="md">
        Busca por serviços técnicos
      </Heading>
      <Text fontSize="sm">
        Aqui você encontra profissionais próximos a você para solicitar serviços
      </Text>
      <br />
      <Space direction="vertical" style={{ width: '100%' }}>
        <Search
          placeholder="Digite sua busca aqui"
          onSearch={onSearch}
          style={{
            width: '100%',
          }}
        />
      </Space>
      <br />
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)',
          '2xl': 'repeat(5, 1fr)',
        }}
        gap={6}
      >
        <GridItem w="100%">
          <UserCard />
        </GridItem>
        <GridItem w="100%">
          <UserCard />
        </GridItem>
        <GridItem w="100%">
          <UserCard />
        </GridItem>
        <GridItem w="100%">
          <UserCard />
        </GridItem>
        <GridItem w="100%">
          <UserCard />
        </GridItem>
        <GridItem w="100%">
          <UserCard />
        </GridItem>
        <GridItem w="100%">
          <UserCard />
        </GridItem>
        <GridItem w="100%">
          <UserCard />
        </GridItem>
        <GridItem w="100%">
          <UserCard />
        </GridItem>
        <GridItem w="100%">
          <UserCard />
        </GridItem>
        <GridItem w="100%">
          <UserCard />
        </GridItem>
        <GridItem w="100%">
          <UserCard />
        </GridItem>
        <GridItem w="100%">
          <UserCard />
        </GridItem>
        <GridItem w="100%">
          <UserCard />
        </GridItem>
        <GridItem w="100%">
          <UserCard />
        </GridItem>
        <GridItem w="100%">
          <UserCard />
        </GridItem>
        <GridItem w="100%">
          <UserCard />
        </GridItem>
        <GridItem w="100%">
          <UserCard />
        </GridItem>
      </Grid>
    </div>
  );
}
