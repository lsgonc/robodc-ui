import { Meta, StoryObj } from '@storybook/angular';
import { AlertModalComponent } from '../lib/alert-modal/alert-modal.component';
import { ButtonComponent } from '../lib/button/button.component';

export default {
    title: 'Components/AlertModal',
    component: AlertModalComponent,
    tags: ['autodocs'],
    argTypes: {
        isOpen: {
            control: 'boolean',
            description: 'Controla se o modal está aberto ou fechado',
        },
        title: {
            control: 'text',
            description: 'Título do modal',
        },
        description: {
            control: 'text',
            description: 'Descrição exibida abaixo do título',
        },
        buttons: {
            control: 'object',
            description: 'Lista de configurações para os botões',
        },
        close: {
            action: 'closed',
            description: 'Evento emitido quando o modal é fechado',
        },
        onButtonClick: {
            action: 'buttonClicked',
            description: 'Evento emitido quando o botão é clicado',
        },
    },
} as Meta<AlertModalComponent>;

type Story = StoryObj<AlertModalComponent>;

export const Default: Story = {
    parameters: {
        docs: {
            story: {
                height: '400px',
            },
        },
    },
    args: {
        isOpen: true,
        title: 'Bem-vindo ao Modal',
        description:
            'Este é um modal com, título, descrição e um botão. Ele é responsivo e flexível!',
        buttons: [
            { label: 'Botão 1', variant: 'info', size: 'lg' },
            { label: 'Botão 2', variant: 'info', size: 'lg' },
            { label: 'Botão 3', variant: 'info', size: 'lg' },

        ],
    },

};

export const Closed: Story = {
    parameters: {
        docs: {
            story: {
                height: '400px',
            },
        },
    },
    args: {
        isOpen: false,
        title: 'Modal Fechado',
        description: 'Este modal está fechado por padrão.',
    },
};

export const LongContent: Story = {
    parameters: {
        docs: {
            story: {
                height: '400px',
            },
        },
    },
    args: {
        isOpen: true,
        title: 'Modal com Conteúdo Longo',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
