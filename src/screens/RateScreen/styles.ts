import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=> theme.COLORS.PRIMARY};

`;

export const Emotion = styled.Text`
    font-size: ${RFValue(60)}px;
`;

export const Text = styled.Text`
    color: ${({theme}) => theme.COLORS.TITLE};
`;
