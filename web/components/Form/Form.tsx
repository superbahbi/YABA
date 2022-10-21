import React from 'react';

interface IFormProps  {
  test?: string;
}

export const Form: React.FC<IFormProps> = () => {
  return <div data-testid="test" />;
};