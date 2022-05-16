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
    emoji: "☺️", 
    text: "happy",
    value: "25"
  },
  {
    emoji: "😍", 
    text: "confident",
    value: "100"
  },
  {
    emoji: "😁", 
    text: "proud",
    value: "50"
  },
  {
    emoji: "😇", 
    text: "grateful",
    value: "25"
  },
  {
    emoji: "😐", 
    text:"numb",
    value: "75"
  },
  {
    emoji: "😠", 
    text: "angry",
    value: "0"
  },
  {
    emoji: "😟", 
    text: "bored",
    value: "100"
  },
  {
    emoji: "🤗", 
    text: "joyful",
    value: "25"
  },
  {
    emoji: "😆️", 
    text: "optimistic",
    value: "50"
  },
  {
    emoji: "👌️", 
    text: "okay",
    value: "25"
  },
  {
    emoji: "😪", 
    text: "depressed",
    value: "75"
  },
  {
    emoji: "😈", 
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
