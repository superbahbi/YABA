import React from 'react';
import { Form } from './';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const c1 = Template.bind({});
c1.storyName = 'default'
