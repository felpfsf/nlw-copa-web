# INSTRUÇÕES GERAIS

Projeto desenvolvido durante a NLW Copa

## Instalando

- Instalando o NextJS
  
```js

npx create-next-app@latest --typescript
# or
yarn create next-app --typescript
# or
pnpm create next-app --typescript

```

``npm run dev / yarn dev / pnpm dev`` => para iniciar a aplicação

- [ ] ``npm i -D tailwindcss postcss autoprefixer`` => **instala o tailwind com as configurações necessárias**
- [ ] npx tailwindcss init -p => cria o arquivo de configuração. No arquivo de config adicione em ``content`` os arquivos que receberão suporte, exemplo: ``'./src/**/*.tsx``

## Anotações

Cada arquivo dentro da pasta Pages é como se fosse uma rota

Para importar uma font, diferente do react que 