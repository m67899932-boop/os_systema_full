# OS Systema — Projeto Completo (Parte 1 + Parte 2)

Este projeto integra a Parte 1 (OS) com a Parte 2 (Frotas) no mesmo monorepo,
pronto para deploy na Vercel.

## Recursos implementados
- Tela de login simples (sem autenticação real; usa localStorage)
- Cadastro de funcionários (CRUD básico com localStorage)
- Abertura / listagem de Ordens de Serviço (status: aberta, andamento, concluída)
- Dashboard com cards e gráficos de placeholder (SVG)
- Parte 2 (Frotas) integrada com telas de placeholder
- Layout com Tailwind (mesmo estilo da Parte 2)

## Rodando localmente
1. Extraia o ZIP.
2. Rode `npm install`.
3. Rode `npm run dev`.
4. Abra `http://localhost:3000`.

## Notas
- Substitua logos em `public/logos/`.
- Este esqueleto usa armazenamento no navegador (localStorage) para facilitar testes sem backend.
