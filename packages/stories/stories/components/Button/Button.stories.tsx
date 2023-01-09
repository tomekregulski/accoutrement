import React from 'react';
import { Button } from '@accoutrements/masonry/lib/components/Button/Button';

export default {
  title: 'Masonry|Button',
};

const buttonProps = {
  label: 'Button',
  onClick: () => console.log('click'),
};

export const Common = () => <Button {...buttonProps} />;
