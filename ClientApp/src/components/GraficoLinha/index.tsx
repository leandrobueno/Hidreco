import { Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
export default class GraficoLinha extends PureComponent {
 static demoUrl = 'https://codesandbox.io/s/line-chart-connect-nulls-sqp96';

 state = {
  data: [],
 };

 componentDidMount() {
  fetch('https://hidreco.azurewebsites.net/api/Sabesp/GetMonthHistory')
   .then((response) => {
    return response.json();
   })
   .then((r) => this.setState({ data: r }));
 }

 render() {
  return (
   <div
    style={{
     width: '100%',
     border: '2px solid #eee',
     borderRadius: '6px',
     padding: '2rem',
     display: 'flex',
     justifyContent: 'center',
     flexDirection: 'column',
     alignItems: 'flex-start',
    }}
   >
    <Heading as='h4' size='md'>
     Histórico de consumo
    </Heading>
    <Text fontSize='sm'>Este é o seu consumo desde o início do ano</Text>
    <br />
    <ResponsiveContainer width='100%' height={300}>
     <LineChart
      width={500}
      height={500}
      data={this.state.data}
      margin={{
       top: 10,
       right: 30,
       left: 0,
       bottom: 0,
      }}
     >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Line connectNulls type='monotone' dataKey='litros' stroke='#1EBCEE' fill='#1EBCEE' />
     </LineChart>
    </ResponsiveContainer>
   </div>
  );
 }
}
