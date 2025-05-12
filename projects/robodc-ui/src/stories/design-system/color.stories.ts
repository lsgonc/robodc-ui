import { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Design System/Colors',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded'
  }
};

export default meta;

type Story = StoryObj;

const colorPalettes = [
  {
    title: 'Primary',
    description: 'Usada para elementos principais como botões, cartões e fundos de destaque.',
    colors: [
      { name: 'primary-1', value: '#E6E6E6' },
      { name: 'primary-2', value: '#CCCCCC' },
      { name: 'primary-3', value: '#B3B3B3' },
      { name: 'primary-4', value: '#999999' },
      { name: 'primary-5', value: '#666666' },
      { name: 'primary-6', value: '#343434' },
      { name: 'primary-7', value: '#2B2B2B' },
      { name: 'primary-8', value: '#222222' },
      { name: 'primary-9', value: '#1A1A1A' },
      { name: 'primary-10', value: '#111111' }
    ]
  },
  {
    title: 'Info',
    description: 'Aplicada em elementos informativos como botões de ação ou indicadores de status.',
    colors: [
      { name: 'info-1', value: '#E6F0FF' },
      { name: 'info-2', value: '#B3D7FF' },
      { name: 'info-3', value: '#80BDFF' },
      { name: 'info-4', value: '#4DA4FF' },
      { name: 'info-5', value: '#1A8AFF' },
      { name: 'info-6', value: '#0055ab' },
      { name: 'info-7', value: '#004D99' },
      { name: 'info-8', value: '#004588' },
      { name: 'info-9', value: '#003D77' },
      { name: 'info-10', value: '#003566' }
    ]
  },
  {
    title: 'Success',
    description: 'Usada para indicar ações bem-sucedidas, como confirmações ou estados positivos.',
    colors: [
      { name: 'success-1', value: '#E6F7ED' },
      { name: 'success-2', value: '#B3E8CB' },
      { name: 'success-3', value: '#80D9A9' },
      { name: 'success-4', value: '#4DCA87' },
      { name: 'success-5', value: '#1ABB75' },
      { name: 'success-6', value: '#31b768' },
      { name: 'success-7', value: '#2CA55D' },
      { name: 'success-8', value: '#279352' },
      { name: 'success-9', value: '#228247' },
      { name: 'success-10', value: '#1D703C' }
    ]
  },
  {
    title: 'Danger',
    description: 'Aplicada em alertas de erro, ações destrutivas ou estados críticos.',
    colors: [
      { name: 'danger-1', value: '#FFE6E5' },
      { name: 'danger-2', value: '#FFB3B0' },
      { name: 'danger-3', value: '#FF807B' },
      { name: 'danger-4', value: '#FF4D46' },
      { name: 'danger-5', value: '#FF1A31' },
      { name: 'danger-6', value: '#d02f27' },
      { name: 'danger-7', value: '#B32923' },
      { name: 'danger-8', value: '#99231F' },
      { name: 'danger-9', value: '#801D1A' },
      { name: 'danger-10', value: '#661716' }
    ]
  },
  {
    title: 'Warning',
    description: 'Usada para alertas de atenção, como notificações ou mensagens de precaução.',
    colors: [
      { name: 'warning-1', value: '#FFF7E6' },
      { name: 'warning-2', value: '#FFEAB3' },
      { name: 'warning-3', value: '#FFDD80' },
      { name: 'warning-4', value: '#FFD04D' },
      { name: 'warning-5', value: '#FFC31A' },
      { name: 'warning-6', value: '#E6A600' },
      { name: 'warning-7', value: '#CC9400' },
      { name: 'warning-8', value: '#B38200' },
      { name: 'warning-9', value: '#997000' },
      { name: 'warning-10', value: '#805E00' }
    ]
  },
  {
    title: 'Link',
    description: 'Aplicada em hyperlinks ou elementos interativos que indicam navegação.',
    colors: [
      { name: 'link-1', value: '#E6F7FF' },
      { name: 'link-2', value: '#BAE7FF' },
      { name: 'link-3', value: '#91D5FF' },
      { name: 'link-4', value: '#69C0FF' },
      { name: 'link-5', value: '#40A9FF' },
      { name: 'link-6', value: '#1677ff' },
      { name: 'link-7', value: '#096DD9' },
      { name: 'link-8', value: '#0050B3' },
      { name: 'link-9', value: '#003A8C' },
      { name: 'link-10', value: '#002766' }
    ]
  },
  {
    title: 'Neutral',
    description: 'Usada para textos, fundos, bordas e sombras, proporcionando contraste e equilíbrio.',
    colors: [
      { name: 'neutral-1', value: '#FFFFFF' },
      { name: 'neutral-2', value: '#F5F5F5' },
      { name: 'neutral-3', value: '#E8E8E8' },
      { name: 'neutral-4', value: '#D9D9D9' },
      { name: 'neutral-5', value: '#BFBFBF' },
      { name: 'neutral-6', value: '#999999' },
      { name: 'neutral-7', value: '#666666' },
      { name: 'neutral-8', value: '#4D4D4D' },
      { name: 'neutral-9', value: '#333333' },
      { name: 'neutral-10', value: '#000000' },
      { name: 'neutral-shadow-light', value: 'rgba(0, 0, 0, 0.15)' },
      { name: 'neutral-shadow-dark', value: 'rgba(0, 0, 0, 0.3)' }
    ]
  }
];

export const Default: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; font-family: 'Roboto, sans-serif';">
        ${colorPalettes
          .map(
            (palette) => `
              <div>
                <h2 style="margin: 0 0 0.5rem; font-size: 1.5rem;">${palette.title}</h2>
                <p style="margin: 0 0 1rem; font-size: 1rem; color: #666;">${palette.description}</p>
                <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
                  ${palette.colors
                    .map(
                      (color) => `
                        <div style="text-align: center;">
                          <div style="width: 80px; height: 80px; background-color: ${color.value}; border-radius: 4px; border: 1px solid #e0e0e0;"></div>
                          <p style="margin: 0.5rem 0 0; font-size: 0.875rem; color: #666;">${color.name}</p>
                          <p style="margin: 0; font-size: 0.75rem; color: #888;">${color.value}</p>
                        </div>
                      `
                    )
                    .join('')}
                </div>
              </div>
            `
          )
          .join('')}
      </div>
    `
  })
};