# ValidaCAR

<a id="english"></a>

<p align="right">
  <kbd><a href="#english">English</a></kbd>
  <kbd><a href="#portuguese">Português</a></kbd>
</p>

<p align="center">
  <strong>CAR pre-rectification assistant for clearer rural environmental registration.</strong>
</p>

<p align="center">
  ValidaCAR turns technical CAR data into clear alerts, map-based analysis, and an actionable checklist.
</p>

---

## English
ValidaCAR is a CAR pre-rectification assistant that turns technical registration data into clear alerts, map-based analysis, and an actionable checklist.

CAR already shows the data. ValidaCAR shows what to do with it.

## Problem
Rural producers and technical professionals often need to review CAR registration data before attempting a correction or resubmission. The process can involve fragmented technical information, spatial inconsistencies, legal restrictions, and unclear next steps.

Without a simple pre-analysis, users may spend time preparing incomplete corrections, miss relevant inconsistencies, or submit changes without understanding the risks involved.

## Proposed solution
ValidaCAR helps users interpret rural property registration data before rectification. The product should organize technical inputs, highlight possible inconsistencies, provide visual map-based analysis, and generate a practical checklist for the next action.

It is not just a map validator. It is a pre-rectification assistant that turns technical information into clear actions: what deserves attention, why it matters, and what the user should review before correcting or resubmitting the CAR.

The assistant is designed to support producers, technicians, agronomists, and surveyors with clear guidance while keeping the final decision and legal responsibility with the user and qualified professionals.

## Demo flow
- Property loaded
- Map view
- Alerts
- Simple explanation
- Checklist / report

## MVP scope
- Import or register basic rural property information.
- Present a simplified property overview.
- Identify potential inconsistencies in CAR-related data.
- Show alerts and observations in clear language.
- Provide map-based visual support for analysis.
- Generate an actionable pre-rectification checklist.
- Keep the experience focused on planning and decision support.

## Out of scope
- Automatic CAR rectification or official submission.
- Legal, environmental, or cadastral certification.
- Replacement of technical, agronomic, surveying, or legal professionals.
- Integration with every official government system in the first version.
- Advanced geoprocessing automation beyond MVP validation needs.

## Suggested stack
The MVP stack is intentionally lean and not implemented yet:

- React + TypeScript
- Leaflet / React Leaflet
- Turf.js
- Mocked JSON data
- Optional Node.js backend later

## Repository structure
```txt
validacar/
├── README.md
├── LICENSE
├── .gitignore
└── docs/
    ├── mvp-validacar.md
    ├── project-scope.md
    └── research-notes.md
```

## Project status
Planning / MVP definition.

## Main document
See [docs/mvp-validacar.md](docs/mvp-validacar.md).

---

<a id="portuguese"></a>

<p align="right">
  <kbd><a href="#english">English</a></kbd>
  <kbd><a href="#portuguese">Português</a></kbd>
</p>

## Português
O ValidaCAR é um assistente de pré-retificação do CAR que transforma dados técnicos do cadastro em alertas claros, análise visual no mapa e checklist de ação.

O CAR já mostra os dados. O ValidaCAR mostra o que fazer com eles.

## Problema
Produtores rurais e profissionais técnicos muitas vezes precisam revisar os dados do CAR antes de tentar corrigir ou reenviar um cadastro. Esse processo pode envolver informações técnicas fragmentadas, inconsistências espaciais, restrições legais e próximos passos pouco claros.

Sem uma pré-análise simples, usuários podem perder tempo preparando correções incompletas, deixar inconsistências relevantes passarem ou reenviar alterações sem compreender os riscos envolvidos.

## Solução proposta
O ValidaCAR ajuda usuários a interpretar dados do imóvel rural antes da retificação. O produto deve organizar insumos técnicos, destacar possíveis inconsistências, oferecer análise visual no mapa e gerar um checklist prático para a próxima ação.

Ele não é só um validador de mapa. É um assistente de pré-retificação que transforma informações técnicas em ações claras: o que merece atenção, por que isso importa e o que o usuário deve revisar antes de corrigir ou reenviar o CAR.

O assistente é pensado para apoiar produtores, técnicos, agrônomos e topógrafos com orientação clara, mantendo a decisão final e a responsabilidade legal com o usuário e com profissionais habilitados.

## Fluxo da demo
- Imóvel carregado
- Mapa
- Alertas
- Explicação simples
- Checklist / relatório

## Escopo do MVP
- Importar ou registrar informações básicas do imóvel rural.
- Apresentar uma visão simplificada do imóvel.
- Identificar possíveis inconsistências relacionadas ao CAR.
- Exibir alertas e observações em linguagem clara.
- Oferecer apoio visual no mapa para análise.
- Gerar um checklist acionável de pré-retificação.
- Manter a experiência focada em planejamento e apoio à decisão.

## Fora do escopo
- Retificação automática do CAR ou envio oficial.
- Certificação legal, ambiental ou cadastral.
- Substituição de profissionais técnicos, agronômicos, topográficos ou jurídicos.
- Integração com todos os sistemas oficiais do governo na primeira versão.
- Automação geoespacial avançada além das necessidades de validação do MVP.

## Stack sugerida
A stack do MVP é propositalmente enxuta e ainda não foi implementada:

- React + TypeScript
- Leaflet / React Leaflet
- Turf.js
- Dados mockados em JSON
- Backend opcional em Node.js depois

## Estrutura do repositório
```txt
validacar/
├── README.md
├── LICENSE
├── .gitignore
└── docs/
    ├── mvp-validacar.md
    ├── project-scope.md
    └── research-notes.md
```

## Status do projeto
Planning / MVP definition.

## Documento principal
Veja [docs/mvp-validacar.md](docs/mvp-validacar.md).
