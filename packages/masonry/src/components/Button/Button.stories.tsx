import React from 'react';
import { Button } from './Button';

export default {
  title: 'Masonry|Button',
};

const buttonProps = {
  label: 'Button',
  onClick: () => console.log('click'),
};

export const Common = () => <Button {...buttonProps} />;
