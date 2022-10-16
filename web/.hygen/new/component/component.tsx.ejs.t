---
to: <%= absPath %>/<%= component_name %>.tsx
---
import React from 'react';

interface I<%= component_name %>Props = {
  test?: string;
};

export const <%= component_name %>: React.FC<I<%= component_name %>Props> = () => {
  return <div data-testid="test" />;
};