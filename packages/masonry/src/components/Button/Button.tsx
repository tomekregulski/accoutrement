import React from 'react';
import tw from 'twin.macro';

export interface ButtonProps {
  label: string;
  onClick: () => void;
  css: any;
}

const StyledButton = tw.button`text-blue-500 text-2xl p-2`;

export function Button(props: ButtonProps) {
  const { label, onClick } = props;

  return <StyledButton onClick={onClick}>{label}</StyledButton>;
}
