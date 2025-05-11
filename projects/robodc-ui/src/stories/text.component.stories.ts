import { Meta, StoryObj } from '@storybook/angular';
import { TextComponent } 
 
 from '../lib/text/text.component';
export default {
  title: 'Components/Text',
  component: TextComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do texto',
    },
    type: {
      control: 'select',
      options: [null, 'secondary', 'success', 'warning', 'danger'],
      description: 'Tipo de cor do texto',
    },
    disabled: {
      control: 'boolean',
      description: 'Desativa o texto',
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
      description: 'Sublinha o texto',
    },
    delete: {
      control: 'boolean',
      description: 'Aplica tachado',
    },
    strong: {
      control: 'boolean',
      description: 'Texto em negrito',
    },
    italic: {
      control: 'boolean',
      description: 'Texto em itálico',
    },
  },
} as Meta<TextComponent>;

type Story = StoryObj<TextComponent>;

export const Default: Story = {
  args: {
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<robodc-text [size]="size">Texto padrão</robodc-text>`,
  }),
};

export const Secondary: Story = {
  args: {
    size: 'md',
    type: 'secondary',
  },
  render: (args) => ({
    props: args,
    template: `<robodc-text [size]="size" [type]="type">Texto secundário</robodc-text>`,
  }),
};

export const Success: Story = {
  args: {
    size: 'md',
    type: 'success',
  },
  render: (args) => ({
    props: args,
    template: `<robodc-text [size]="size" [type]="type">Texto de sucesso</robodc-text>`,
  }),
};

export const Warning: Story = {
  args: {
    size: 'md',
    type: 'warning',
  },
  render: (args) => ({
    props: args,
    template: `<robodc-text [size]="size" [type]="type">Texto de alerta</robodc-text>`,
  }),
};

export const Danger: Story = {
  args: {
    size: 'md',
    type: 'danger',
  },
  render: (args) => ({
    props: args,
    template: `<robodc-text [size]="size" [type]="type">Texto de erro</robodc-text>`,
  }),
};

export const Disabled: Story = {
  args: {
    size: 'md',
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `<robodc-text [size]="size" [disabled]="disabled">Texto desativado</robodc-text>`,
  }),
};

export const Mark: Story = {
  args: {
    size: 'md',
    mark: true,
  },
  render: (args) => ({
    props: args,
    template: `<robodc-text [size]="size" [mark]="mark">Texto destacado</robodc-text>`,
  }),
};

export const Code: Story = {
  args: {
    size: 'md',
    code: true,
  },
  render: (args) => ({
    props: args,
    template: `<robodc-text [size]="size" [code]="code">Texto de código</robodc-text>`,
  }),
};

export const Keyboard: Story = {
  args: {
    size: 'md',
    keyboard: true,
  },
  render: (args) => ({
    props: args,
    template: `<robodc-text [size]="size" [keyboard]="keyboard">Texto de tecla</robodc-text>`,
  }),
};

export const Underline: Story = {
  args: {
    size: 'md',
    underline: true,
  },
  render: (args) => ({
    props: args,
    template: `<robodc-text [size]="size" [underline]="underline">Texto sublinhado</robodc-text>`,
  }),
};

export const Delete: Story = {
  args: {
    size: 'md',
    delete: true,
  },
  render: (args) => ({
    props: args,
    template: `<robodc-text [size]="size" [delete]="delete">Texto tachado</robodc-text>`,
  }),
};

export const Strong: Story = {
  args: {
    size: 'md',
    strong: true,
  },
  render: (args) => ({
    props: args,
    template: `<robodc-text [size]="size" [strong]="strong">Texto em negrito</robodc-text>`,
  }),
};

export const Italic: Story = {
  args: {
    size: 'md',
    italic: true,
  },
  render: (args) => ({
    props: args,
    template: `<robodc-text [size]="size" [italic]="italic">Texto em itálico</robodc-text>`,
  }),
};