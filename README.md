# ValidaCAR

<a id="english"></a>

<p align="right">
  <kbd><a href="#english">English</a></kbd>
  <kbd><a href="#portuguese">Português</a></kbd>
</p>

<p align="center">
  <strong>ValidaCAR — CAR pre-rectification assistant.</strong>
</p>

<p align="center">
  CAR already shows the data. ValidaCAR shows what to do with it.
</p>

---

## English
ValidaCAR is a demonstrative MVP for the haCARthon. It helps producers and technical professionals understand the situation of a rural property before attempting a CAR rectification.

The product turns technical CAR information into a visual diagnosis: map analysis, prioritized alerts, an action checklist, and an orientation report.

## Problem
CAR systems already expose technical data, messages, declared areas, APP/RL information, overlaps, and registration status. The hard part for many users is understanding where the problem is, what deserves priority, and what should be reviewed before trying a correction.

## Solution
ValidaCAR organizes technical property data into:

- Visual map analysis.
- Prioritized alerts.
- Action checklist.
- Orientation report.

It does not replace official analysis or qualified professionals. It is a pre-rectification assistant that helps the user prepare better before acting.

## Demo Flow
The MVP demonstrates:

- Home screen with the project positioning.
- Rural property summary.
- Map with property perimeter, possible overlap, APP/RL area, and watercourse.
- Alerts connected to the map.
- Action checklist.
- Final report.
- Desktop and mobile experiences.

## Important
This project is a demonstrative prototype. It uses simulated data, does not connect to SICAR or Gov.br, does not perform official environmental analysis, and does not send data to external government systems.

## Stack
- React
- TypeScript
- Vite
- Leaflet / React Leaflet
- Turf.js
- Mocked JSON data
- Organized CSS

## Running Locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Project Structure
```txt
validacar/
├── docs/              Product and planning documentation
├── public/            Static public assets
├── src/
│   ├── components/    Reusable UI, map, report, alerts, checklist and layout components
│   ├── data/          Simulated property, alert, checklist and report data
│   ├── pages/         Home, summary, map, checklist, dashboard and report screens
│   ├── styles/        Application styles organized by layout, pages and components
│   └── utils/         Formatting and local state helpers
├── README.md
├── package.json
└── vite.config.ts
```

## Status
Functional MVP for haCARthon demonstration.

## Next Steps
- Validate the flow with real users.
- Add secure persistence.
- Integrate only with authorized data sources.
- Evolve the diagnostic rules engine.
- Improve export and sharing in a real workflow.

## Main Document
See [docs/mvp-validacar.md](docs/mvp-validacar.md).

---

<a id="portuguese"></a>

<p align="right">
  <kbd><a href="#english">English</a></kbd>
  <kbd><a href="#portuguese">Português</a></kbd>
</p>

## Português
O ValidaCAR é um MVP demonstrativo para o haCARthon: um assistente de pré-retificação do CAR que ajuda produtores, técnicos, agrônomos e topógrafos a entenderem a situação do imóvel antes de tentar corrigir ou reenviar o cadastro.

**O CAR já mostra os dados. O ValidaCAR mostra o que fazer com eles.**

## Problema
O usuário já encontra no CAR dados técnicos, mensagens, áreas declaradas, APP/RL, sobreposições e status do cadastro. Mesmo assim, muitas vezes não fica claro onde está o problema, qual ponto merece prioridade e o que precisa ser revisado antes da retificação.

Essa falta de orientação pode levar a tentativas de correção incompletas, retrabalho e dificuldade para organizar documentos, perímetro, áreas e pendências.

## Solução
O ValidaCAR transforma dados técnicos do imóvel em uma leitura prática:

- Mapa visual.
- Alertas priorizados.
- Checklist de ação.
- Relatório orientativo.

O objetivo não é validar oficialmente o CAR, substituir o SICAR ou tomar decisão ambiental. O produto atua como uma camada de pré-análise para ajudar o usuário a entender o diagnóstico e preparar os próximos passos com mais clareza.

## Fluxo da Demo
O MVP demonstra:

- Home com o posicionamento do produto.
- Resumo do imóvel.
- Mapa com perímetro, possível sobreposição, APP/RL e curso d'água.
- Alertas conectados ao mapa.
- Checklist de ação.
- Relatório final.
- Experiência desktop e mobile.

## Importante
Este projeto é um protótipo demonstrativo. Ele usa dados simulados, não substitui o SICAR, não realiza análise oficial, não envia dados para sistemas externos e não representa decisão de órgão ambiental.

## Stack
- React
- TypeScript
- Vite
- Leaflet / React Leaflet
- Turf.js
- Dados mockados em JSON
- CSS organizado por contexto

## Como Rodar Localmente
```bash
npm install
npm run dev
```

## Como Gerar Build
```bash
npm run build
```

## Estrutura do Projeto
```txt
validacar/
├── docs/              Documentação de produto e planejamento
├── public/            Assets públicos
├── src/
│   ├── components/    Componentes reutilizáveis de UI, mapa, relatório, alertas, checklist e layout
│   ├── data/          Dados simulados do imóvel, alertas, checklist e relatório
│   ├── pages/         Telas de home, resumo, mapa, checklist, dashboard e relatório
│   ├── styles/        Estilos da aplicação organizados por layout, páginas e componentes
│   └── utils/         Helpers de formatação e estado local
├── README.md
├── package.json
└── vite.config.ts
```

## Status
MVP funcional para demonstração no haCARthon.

## Próximos Passos
- Validar o fluxo com usuários reais.
- Adicionar persistência segura.
- Integrar apenas com bases autorizadas.
- Evoluir o motor de diagnóstico.
- Melhorar exportação e compartilhamento em um fluxo real.

## Documento Principal
Veja [docs/mvp-validacar.md](docs/mvp-validacar.md).
