import { Meta, StoryObj } from '@storybook/angular';
import { ButtonListComponent, ButtonConfig } from '../lib/button-list/button-list.component';

export default {
  title: 'Components/ButtonList',
  component: ButtonListComponent,
  tags: ['autodocs'],
  argTypes: {
    buttons: {
      control: 'object',
      description: 'Lista de configurações para os botões',
    },
    buttonClick: {
      action: 'buttonClicked',
      description: 'Evento emitido quando um botão é clicado, com o índice do botão',
    },
  },
} as Meta<ButtonListComponent>;

type Story = StoryObj<ButtonListComponent>;

export const Default: Story = {
  args: {
    buttons: [
      { label: 'Botão 1', variant: 'primary', size: 'md' },
      { label: 'Botão 2', variant: 'info', size: 'md' },
      { label: 'Botão 3', variant: 'success', size: 'md' },
      { label: 'Botão 4', variant: 'danger', size: 'md' },
      { label: 'Botão 5', variant: 'primary', size: 'md' },
      { label: 'Botão 6', variant: 'info', size: 'md' },
    ],
  },
};

export const SmallButtons: Story = {
  args: {
    buttons: [
      { label: 'A', variant: 'primary', size: 'sm' },
      { label: 'B', variant: 'info', size: 'sm' },
      { label: 'C', variant: 'success', size: 'sm' },
      { label: 'D', variant: 'danger', size: 'sm' },
    ],
  },
};

export const LargeButtons: Story = {
  args: {
    buttons: [
      { label: 'Botão 1', variant: 'primary', size: 'lg' },
      { label: 'Botão 2', variant: 'info', size: 'lg' },
      { label: 'Botão 3', variant: 'success', size: 'lg' },
      { label: 'Botão 4', variant: 'danger', size: 'lg' },
    ],
  },
};

export const SingleButton: Story = {
  args: {
    buttons: [{ label: 'Único', variant: 'primary', size: 'md' }],
  },
};