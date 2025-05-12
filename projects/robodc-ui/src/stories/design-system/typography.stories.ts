import { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Design System/Typography',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded'
  }
};

export default meta;

type Story = StoryObj;

const typographyStyles = [
  {
    category: 'Títulos',
    description: 'Usados para cabeçalhos principais, como títulos de páginas ou seções, com a fonte Roboto.',
    styles: [
      { name: 'heading-1', example: 'Título Principal', fontFamily: 'Roboto', fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2 },
      { name: 'heading-2', example: 'Título Secundário', fontFamily: 'Roboto', fontSize: '2.3rem', fontWeight: 700, lineHeight: 1.25 },
      { name: 'heading-3', example: 'Título Terciário', fontFamily: 'Roboto', fontSize: '2rem', fontWeight: 500, lineHeight: 1.3 },
      { name: 'heading-4', example: 'Título Quaternário', fontFamily: 'Roboto', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.35 }
    ]
  },
  {
    category: 'Subtítulos',
    description: 'Usados para subtítulos ou destaques secundários, com a fonte Roboto.',
    styles: [
      { name: 'subtitle-1', example: 'Subtítulo Principal', fontFamily: 'Roboto', fontSize: '2.3rem', fontWeight: 400, lineHeight: 1.3 },
      { name: 'subtitle-2', example: 'Subtítulo Secundário', fontFamily: 'Roboto', fontSize: '2rem', fontWeight: 400, lineHeight: 1.35 }
    ]
  },
  {
    category: 'Botões',
    description: 'Usados para textos de botões, com a fonte Roboto, em diferentes tamanhos.',
    styles: [
      { name: 'button-lg', example: 'Botão Grande', fontFamily: 'Roboto', fontSize: '2.5rem', fontWeight: 500, lineHeight: 1.2 },
      { name: 'button-md', example: 'Botão Médio', fontFamily: 'Roboto', fontSize: '2rem', fontWeight: 500, lineHeight: 1.25 },
      { name: 'button-sm', example: 'Botão Pequeno', fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: 500, lineHeight: 1.3 }
    ]
  },
  {
    category: 'Textos Gerais',
    description: 'Usados para parágrafos, legendas e textos secundários, com a fonte Inter.',
    styles: [
      { name: 'body-1', example: 'Texto principal para parágrafos longos e conteúdo geral.', fontFamily: 'Inter', fontSize: '1rem', fontWeight: 400, lineHeight: 1.5 },
      { name: 'body-2', example: 'Texto secundário para descrições ou informações complementares.', fontFamily: 'Inter', fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.55 },
      { name: 'caption', example: 'Legenda para notas de rodapé ou textos pequenos.', fontFamily: 'Inter', fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.6 },
      { name: 'overline', example: 'Texto destacado para rótulos ou chamadas.', fontFamily: 'Inter', fontSize: '0.75rem', fontWeight: 600, lineHeight: 1.4 }
    ]
  }
];

export const Default: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        ${typographyStyles
          .map(
            (category) => `
              <div>
                <h2 style="margin: 0 0 0.5rem; font-size: 1.5rem;">${category.category}</h2>
                <p style="margin: 0 0 1rem; font-size: 1rem; color: #666;">${category.description}</p>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                  ${category.styles
                    .map(
                      (style) => `
                        <div style="padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px;">
                          <p style="margin: 0; font-family: ${style.fontFamily}; font-size: ${style.fontSize}; font-weight: ${style.fontWeight}; line-height: ${style.lineHeight}; color: #333;">
                            ${style.example}
                          </p>
                          <h3 style="margin: 0.5rem 0 0; font-size: 1rem;">${style.name}</h3>
                          <p style="margin: 0; font-size: 0.875rem; color: #666;">Font Family: ${style.fontFamily}</p>
                          <p style="margin: 0; font-size: 0.875rem; color: #666;">Font Size: ${style.fontSize}</p>
                          <p style="margin: 0; font-size: 0.875rem; color: #666;">Font Weight: ${style.fontWeight}</p>
                          <p style="margin: 0; font-size: 0.875rem; color: #666;">Line Height: ${style.lineHeight}</p>
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