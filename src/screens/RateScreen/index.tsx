import React from 'react';
import { useRoute } from '@react-navigation/native'

import { Container, Emotion, Text } from './styles';

export function RateScreen(){
  const route = useRoute();
  console.log('Data: ', route.params)

  
  
  return(
      <Container>
          <Emotion>
            {route.params.emotion}
          </Emotion>
          <Text>I'm felling</Text>
          <Text>{route.params.text}</Text>
      </Container>
  );
}