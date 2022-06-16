import { Heading, Text } from '@chakra-ui/react';
import React from 'react';
import NotificationCard from './../../components/NotificationCard/index';

export default function Notificacoes() {
  return (
    <>
      <Heading as="h4" size="md">
        Alertas e Notificações
      </Heading>
      <Text fontSize="sm">
        Aqui você pode configurar alarmes para monitorar o seu consumo
      </Text>
      <br />
      <NotificationCard title={'Consumo Diário'} checkNotification={''} />
      <br />
      <NotificationCard title={'Consumo Semanal'} checkNotification={''} />
      <br />
      <NotificationCard title={'Consumo Mensal'} checkNotification={''} />
    </>
  );
}
