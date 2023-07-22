import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  stylesText?: object;
  title?: string;
  stylesButton?: object;
};
const Button: React.FC<ButtonProps> = ({ stylesText, title, stylesButton }) => {
  const RenderButtonText = () => {
    return <Text style={stylesText}>{title && title}</Text>;
  };
  return (
    <TouchableOpacity style={stylesButton}>
      <RenderButtonText />
    </TouchableOpacity>
  );
};

export default Button;
