import { Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';
import Consume from '../../models/Consume';

export default class Example extends PureComponent {
 static demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-event-4k1bd';

 state = {
  data: [
   {
    name: '',
    value: 0,
   },
  ],
  activeIndex: 0,
 };

 componentDidMount() {
  fetch('https://hidreco.azurewebsites.net/api/Sabesp/GetMonthAnalysis')
   .then((response) => {
    return response.json();
   })
   .then((r: Consume) => this.setState({ data: r }));
 }

 handleClick = (data: any, index: any) => {
  this.setState({
   activeIndex: index,
  });
 };

 render() {
  const { activeIndex, data } = this.state;
  const activeItem = data[activeIndex];

  return (
   <div
    style={{
     width: '100%',
     border: '2px solid #eee',
     borderRadius: '6px',
     padding: '2rem',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'flex-start',
     flexDirection: 'column',
    }}
   >
    <Heading as='h4' size='md'>
     Análise do mês
    </Heading>
    <Text fontSize='sm'>Esta é a análise mensal do mês anterior versus o mês atual</Text>
    <br />
    <Legend>Valores baseados de acordo com o que é imposto no estado em que foi utilizado o serviço</Legend>
    <ResponsiveContainer width='100%' height={300}>
     <BarChart width={150} height={40} data={data}>
      <YAxis />
      <XAxis dataKey={'name'} />
      <Bar dataKey='value' onClick={this.handleClick}>
       {data.map((entry, index) => (
        <Cell cursor='pointer' fill={index === activeIndex ? '#1EBCEE' : '#1DA1F2'} key={`cell-${index}`} />
       ))}
      </Bar>
     </BarChart>
    </ResponsiveContainer>
    <p className='content'>{`Valor pago em "${activeItem.name}": R$${activeItem.value}`}</p>
   </div>
  );
 }
}
