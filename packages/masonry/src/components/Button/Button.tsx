import React from 'react';

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button(props: ButtonProps) {
  const { label, onClick } = props;

  return <button onClick={onClick}>{label}</button>;
}
