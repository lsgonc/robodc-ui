import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { ButtonComponent } from '../lib/button/button.component';
import { NgClass } from '@angular/common';

// Metadata do componente
export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [NgClass],
    }),
  ],
  argTypes: {
    label: { control: 'text', description: 'Texto exibido no botão' },
    variant: {
      control: 'select',
      options: ['primary', 'info', 'success', 'danger'],
      description: 'Variante de cor do botão',
    },
    type: {
      control: 'select',
      options: ['normal', 'squared'],
      description: 'Tipo de formato do botão',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do botão',
    },
    onClick: { action: 'clicked', description: 'Evento emitido ao clicar no botão' },
  },
} as Meta<ButtonComponent>;

// Template base para as histórias
const Template: StoryObj<ButtonComponent> = {
  render: (args) => ({
    props: args,
  }),
};

// História padrão
export const Default = {
  ...Template,
  args: {
    label: 'Botão Padrão',
    variant: 'primary',
    type: 'normal',
    size: 'md',
  },
};

// Histórias para diferentes variantes
export const Primary = {
  ...Template,
  args: {
    label: 'Botão Primário',
    variant: 'primary',
    type: 'normal',
    size: 'md',
  },
};

export const Info = {
  ...Template,
  args: {
    label: 'Botão Info',
    variant: 'info',
    type: 'normal',
    size: 'md',
  },
};

export const Success = {
  ...Template,
  args: {
    label: 'Botão Sucesso',
    variant: 'success',
    type: 'normal',
    size: 'md',
  },
};

export const Danger = {
  ...Template,
  args: {
    label: 'Botão Perigo',
    variant: 'danger',
    type: 'normal',
    size: 'md',
  },
};

// Histórias para diferentes tipos
export const Squared = {
  ...Template,
  args: {
    label: 'Botão Quadrado',
    variant: 'primary',
    type: 'squared',
    size: 'md',
  },
};

// Histórias para diferentes tamanhos
export const Small = {
  ...Template,
  args: {
    label: 'Botão Pequeno',
    variant: 'primary',
    type: 'normal',
    size: 'sm',
  },
};

export const Medium = {
  ...Template,
  args: {
    label: 'Botão Médio',
    variant: 'primary',
    type: 'normal',
    size: 'md',
  },
};

export const Large = {
  ...Template,
  args: {
    label: 'Botão Grande',
    variant: 'primary',
    type: 'normal',
    size: 'lg',
  },
};

// História interativa com ação de clique
export const WithClick = {
  ...Template,
  args: {
    label: 'Clique em Mim',
    variant: 'success',
    type: 'normal',
    size: 'md',
  },
};