# Template de Site Institucional para Pequenos Negócios

Template customizável profissional e moderno para sites institucionais desenvolvido com Next.js, TypeScript e TailwindCSS.

## Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Google Fonts (Inter)**

## Características

-  Totalmente responsivo (mobile-first)
-  Animações suaves com CSS/Tailwind
-  SEO otimizado
-  Performance otimizada
-  Código limpo e organizado
-  Fácil customização
-  Sem dependências externas de animação

## Seções Incluídas

1. **Navbar** - Menu fixo com scroll effect
2. **Hero** - Seção principal com CTA
3. **Benefits** - Benefícios em cards
4. **About** - Sobre a empresa
5. **Services** - Grid de serviços com preços
6. **Gallery** - Galeria de imagens
7. **CTA** - Call to action destacado
8. **Location** - Informações de contato e mapa
9. **Footer** - Links e redes sociais

## Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start
```

## Estrutura do Projeto

```
src
 ┣ app
 ┃ ┣ globals.css
 ┃ ┣ layout.tsx
 ┃ ┗ page.tsx
 ┣ components
 ┃ ┣ sections
 ┃ ┃ ┣ About.tsx
 ┃ ┃ ┣ Benefits.tsx
 ┃ ┃ ┣ CTA.tsx
 ┃ ┃ ┣ Contact.tsx
 ┃ ┃ ┣ Gallery.tsx
 ┃ ┃ ┣ Hero.tsx
 ┃ ┃ ┗ Services.tsx
 ┃ ┣ svg
 ┃ ┃ ┗ SVG.tsx
 ┃ ┣ Button.tsx
 ┃ ┣ Footer.tsx
 ┃ ┣ Header.tsx
 ┃ ┗ Reveal.tsx
 ┣ config
 ┃ ┗ site.ts
 ┣ lib
 ┃ ┗ utils.ts
 ┗ types
 ┃ ┗ site.ts
```

## Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Produção
npm start

# Lint
npm run lint
```

## Responsividade

O template é totalmente responsivo com breakpoints:

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

Outras opções: Netlify, Cloudflare Pages, AWS Amplify

## Licença

Livre para uso pessoal e comercial.

## Suporte

Para dúvidas ou sugestões, abra uma issue no repositório.

---

**Desenvolvido por Vortex**
