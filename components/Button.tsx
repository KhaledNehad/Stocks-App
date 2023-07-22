import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  stylesText?: object;
  title?: string;
  stylesButton?: object;
  onPress?: () => void;
};

const Button: React.FC<ButtonProps> = ({ stylesText, title, stylesButton, onPress }) => {
  const RenderButtonText = () => {
    return <Text style={stylesText}>{title && title}</Text>;
  };
  return (
    <TouchableOpacity style={stylesButton} onPress={onPress}>
      <RenderButtonText />
    </TouchableOpacity>
  );
};

export default Button;
