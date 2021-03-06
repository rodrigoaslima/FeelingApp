import React from 'react';
import { useNavigation } from '@react-navigation/native'

import { 
  Container,
  Wrapper,
  Feeling,
  Text,
  Button
} from './styles';


const data = [
  {
    emoji: "βΊοΈ", 
    text: "happy",
    value: "25"
  },
  {
    emoji: "π", 
    text: "confident",
    value: "100"
  },
  {
    emoji: "π", 
    text: "proud",
    value: "50"
  },
  {
    emoji: "π", 
    text: "grateful",
    value: "25"
  },
  {
    emoji: "π", 
    text:"numb",
    value: "75"
  },
  {
    emoji: "π ", 
    text: "angry",
    value: "0"
  },
  {
    emoji: "π", 
    text: "bored",
    value: "100"
  },
  {
    emoji: "π€", 
    text: "joyful",
    value: "25"
  },
  {
    emoji: "ποΈ", 
    text: "optimistic",
    value: "50"
  },
  {
    emoji: "ποΈ", 
    text: "okay",
    value: "25"
  },
  {
    emoji: "πͺ", 
    text: "depressed",
    value: "75"
  },
  {
    emoji: "π", 
    text: "wicked",
    value: "100"
  }
]

type NavigationProps = {
  navigate:(screen:string, params:{
    emotion: string,
    text: string
  }) => void;
}

export function Home(){
  const navigation = useNavigation<NavigationProps>();
  return(
    <Container>
      <Wrapper>
      {data.map(element => (
            <Button key={element.text} onPress={() => navigation.navigate('RateScreen', {emotion: element.emoji, text: element.text})}>
              <Feeling >
                <Text>{element.emoji}</Text>
                <Text>{element.text}</Text>
              </Feeling>
            </Button>
            
      ))}
      </Wrapper>
      
    </Container>
  );
}
