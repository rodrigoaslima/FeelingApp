import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {BorderlessButton} from 'react-native-gesture-handler'


export const Container = styled.View`
    display: flex;
    justify-content: center;
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.PRIMARY};
`;

export const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
`;

export const Feeling = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${RFPercentage(2)}px;
    background-color: ${({theme}) => theme.COLORS.PRIMARY_LIGHT};
    border-radius: 150px;
    width: ${RFPercentage(12)}px;
    height: ${RFPercentage(12)}px;

`;

export const Text = styled.Text`
    color: ${({theme}) => theme.COLORS.TITLE};
    font-size: ${RFValue(16)}px;
`;

export const Button = styled(BorderlessButton)``;