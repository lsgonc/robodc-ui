import { Meta, StoryObj } from '@storybook/angular';
import { TitleComponent } from '../../lib/title/title.component';

export default {
  title: 'Components/Title',
  component: TitleComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do título',
    },
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5],
      description: 'Nível do título (1=h1, 2=h2, etc.)',
    },
    type: {
      control: 'select',
      options: [null, 'secondary', 'success', 'warning', 'danger'],
      description: 'Tipo de cor do título',
    },
    disabled: {
      control: 'boolean',
      description: 'Desativa o título',
    },
    mark: {
      control: 'boolean',
      description: 'Aplica fundo destacado',
    },
    code: {
      control: 'boolean',
      description: 'Estilo de código',
    },
    keyboard: {
      control: 'boolean',
      description: 'Estilo de tecla',
    },
    underline: {
      control: 'boolean',
      description: 'Sublinha o título',
    },
    delete: {
      control: 'boolean',
      description: 'Aplica tachado',
    },
    strong: {
      control: 'boolean',
      description: 'Título em negrito (padrão)',
    },
    italic: {
      control: 'boolean',
      description: 'Título em itálico',
    },
  },
} as Meta<TitleComponent>;

type Story = StoryObj<TitleComponent>;

export const Level1: Story = {
  args: {
    size: 'lg',
    level: 1,
  },
  render: (args) => ({
    props: args,
    template: `<robodc-title [size]="size" [level]="level">Título H1</robodc-title>`,
  }),
};

export const Level2Success: Story = {
  args: {
    size: 'md',
    level: 2,
    type: 'success',
  },
  render: (args) => ({
    props: args,
    template: `<robodc-title [size]="size" [level]="level" [type]="type">Título H2 (Sucesso)</robodc-title>`,
  }),
};

export const Level3Mark: Story = {
  args: {
    size: 'sm',
    level: 3,
    mark: true,
  },
  render: (args) => ({
    props: args,
    template: `<robodc-title [size]="size" [level]="level" [mark]="mark">Título H3 (Destacado)</robodc-title>`,
  }),
};

export const Level4Code: Story = {
  args: {
    size: 'md',
    level: 4,
    code: true,
  },
  render: (args) => ({
    props: args,
    template: `<robodc-title [size]="size" [level]="level" [code]="code">Título H4 (Código)</robodc-title>`,
  }),
};

export const Level5Disabled: Story = {
  args: {
    size: 'sm',
    level: 5,
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `<robodc-title [size]="size" [level]="level" [disabled]="disabled">Título H5 (Desativado)</robodc-title>`,
  }),
};

export const UnderlineItalic: Story = {
  args: {
    size: 'lg',
    level: 1,
    underline: true,
    italic: true,
  },
  render: (args) => ({
    props: args,
    template: `<robodc-title [size]="size" [level]="level" [underline]="underline" [italic]="italic">Título Sublinhado e Itálico</robodc-title>`,
  }),
};
