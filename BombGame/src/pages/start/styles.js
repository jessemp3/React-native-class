import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + RFValue(50)}px;
  background-color: gray;
`;

export const Logo = styled.Image`
  width: ${RFValue(270)}px;
  height: ${RFValue(50)}px;
  margin: 0 auto;
`;

export const Title = styled.Text`
  margin-top: ${RFValue(70)}px;
  margin-bottom: ${RFValue(110)}px;
  font-size: ${RFValue(32)}px;
  font-family: sans-serif;
  text-align: center;
  color: white;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: sans-serif;
  text-align: center;
  color: white;
`;

export const Rules = styled.Text`
  margin-top: ${RFValue(80)}px;
  font-size: ${RFValue(16)}px;
  font-family: sans-serif;
  text-align: center;
  color: white;
`;