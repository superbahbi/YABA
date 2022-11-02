---
to: <%= absPath %>/<%= component_name %>.stories.tsx
---
import React from 'react';
import { <%= component_name %> } from './';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/<%= component_name %>',
  component: <%= component_name %>,
} as ComponentMeta<typeof <%= component_name %>>;

const Template: ComponentStory<typeof <%= component_name %>> = (args) => <<%= component_name %> {...args} />;

export const c1 = Template.bind({});
c1.storyName = 'default'
