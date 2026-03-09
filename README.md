# Spider-Man Multiverses

Projeto front-end tematico do Homem-Aranha com uma home em formato de carrossel 3D e paginas internas para cada fase cinematografica de Tobey Maguire, Tom Holland e Andrew Garfield.

## Tecnologias

- HTML5
- CSS3
- JavaScript (vanilla)
- Fancybox (galeria nas paginas internas)

## Melhorias Aplicadas

- Navegacao do menu da home com links reais para as paginas dos atores.
- Carregamento do JavaScript com `defer` para melhorar a renderizacao inicial.
- Melhoria de acessibilidade na home:
- `lang="pt-BR"` no documento.
- `aria-label` em elementos de navegacao e controles.
- Imagens decorativas marcadas com `alt=""` e `aria-hidden="true"`.
- Controles do carrossel convertidos de `div` para `button`.
- Navegacao por teclado no carrossel com setas esquerda/direita.
- Melhorias de responsividade para telas menores (900px e 600px).
- Indicadores visuais de foco (`:focus-visible`) para teclado.

## Como Executar

Como este projeto e estatico, basta abrir o arquivo `index.html` no navegador.

Opcionalmente, para evitar problemas com caminhos relativos, rode com servidor local:

```bash
# Exemplo com VS Code Live Server
# Clique com o botao direito no index.html > Open with Live Server
```

## Estrutura Principal

```text
.
|-- index.html
|-- assets/
|   |-- css/
|   |-- images/
|   |-- scripts/
|   `-- videos/
`-- pages/
    |-- andrew-garfield/
    |-- tobey-maguire/
    `-- tom-holland/
```

## Proximas Melhorias Sugeridas

- Adicionar um pequeno script de preloading das imagens principais do carrossel.
- Criar versao mobile dedicada para as paginas internas com menu lateral recolhivel.
- Incluir testes visuais basicos (snapshot) para evitar regressao de layout.

## Creditos

Projeto de estudo inspirado no universo cinematografico de Spider-Man e organizado para fins educacionais.
