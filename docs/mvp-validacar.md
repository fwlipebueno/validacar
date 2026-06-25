# ValidaCAR MVP

<p align="center">
  <a href="#english"><kbd>English</kbd></a>
  ·
  <a href="#português"><kbd>Português</kbd></a>
</p>

---

## English

## Product positioning

ValidaCAR is a CAR pre-rectification assistant for haCARthon. It helps rural producers, technicians, agronomists, and surveyors understand the current situation of a rural property, identify inconsistencies, and generate a simple checklist before trying to correct or resubmit the registration.

The MVP should focus on clarity, practical guidance, and decision support. It should not perform official rectification or replace qualified professional analysis.

## Core user problem

CAR information can be difficult to interpret because it combines registration data, geospatial boundaries, environmental restrictions, property declarations, and official validation rules. Users often need to understand what may be wrong before deciding whether a correction is necessary.

Common pain points include:

- Difficulty understanding technical CAR data.
- Unclear reasons behind inconsistencies or pending issues.
- Lack of a simple checklist before correction.
- Need to compare property information with visual map evidence.
- Risk of attempting a resubmission without enough preparation.

## Target users

- Rural producers who need a clearer view of their property registration.
- Rural technicians who support producers during CAR review.
- Agronomists who need to understand environmental and property context.
- Surveyors and topographers who work with property boundaries and spatial data.
- Hackathon evaluators looking for a practical, focused MVP proposal.

## MVP goal

The MVP should help a user answer three practical questions:

1. What is the current situation of this rural property in the CAR context?
2. What inconsistencies or warning signs should be reviewed before rectification?
3. What checklist should I follow before correcting or resubmitting the registration?

## Proposed MVP flow

1. User starts a property pre-analysis.
2. User provides basic CAR/property information or uploads/imports available data.
3. ValidaCAR displays a simplified property overview.
4. The assistant checks for possible inconsistencies and missing information.
5. The map view supports visual inspection of property boundaries and relevant layers.
6. The assistant explains alerts in clear, non-technical language.
7. The user receives an actionable checklist for pre-rectification.

## Key MVP features

### Property overview

Show the essential property information in a simple summary:

- Property name or identifier.
- Municipality and state.
- CAR registration identifier when available.
- Declared area.
- Property status or known situation when available.
- Main data sources used in the analysis.

### Alert generation

Generate clear alerts for possible issues such as:

- Missing or incomplete property information.
- Inconsistent declared area.
- Boundary or geometry issues.
- Possible overlap with relevant environmental areas.
- Missing supporting documentation.
- Information that should be reviewed by a technical professional.

Alerts should be written in plain language and grouped by severity or priority when possible.

### Map-based analysis

Provide a visual layer for understanding the property context:

- Property boundary visualization.
- Reference layers when available.
- Highlighted areas that may require review.
- Simple labels or markers for observations.

The map should support understanding, not attempt to replace professional geospatial analysis in the MVP.

### Checklist generation

Generate a practical checklist before rectification, such as:

- Confirm property owner and registration data.
- Review declared area and boundary information.
- Check whether supporting documents are complete.
- Validate whether map geometry needs technical adjustment.
- Identify whether a professional review is recommended.
- Prepare evidence before attempting correction or resubmission.

## Product decisions

- The MVP is an assistant, not an official CAR submission tool.
- The system should avoid promising legal or environmental compliance.
- The first version should prioritize understandable explanations over complex automation.
- The checklist is a decision-support artifact, not a government-issued document.
- The product should be useful even with partial data, as long as uncertainty is clearly communicated.
- The interface should be direct, professional, and suitable for field and office use.

## Suggested stack

The stack is only a planning suggestion at this stage:

- Frontend: React or Next.js
- Backend: Node.js or Python
- Maps: Leaflet or Mapbox
- Geospatial persistence: PostgreSQL with PostGIS
- File handling: support for common geospatial formats in later iterations
- Deployment: cloud environment suitable for rapid prototype validation

No application code or dependencies should be added during repository initialization.

## Initial validation criteria

The MVP should be considered useful if a user can:

- Understand the property situation more clearly than before.
- Identify the main issues that need review.
- Explain why a correction may be needed.
- Leave the tool with a concrete checklist of next actions.
- Avoid attempting a blind CAR resubmission.

---

## Português

## Posicionamento do produto

O ValidaCAR é um assistente de pré-retificação do CAR para o haCARthon. Ele ajuda produtores rurais, técnicos, agrônomos e topógrafos a entenderem a situação atual de um imóvel rural, identificarem inconsistências e gerarem um checklist simples antes de tentar corrigir ou reenviar o cadastro.

O MVP deve focar em clareza, orientação prática e apoio à decisão. Ele não deve realizar retificação oficial nem substituir análise profissional habilitada.

## Problema principal do usuário

As informações do CAR podem ser difíceis de interpretar porque combinam dados cadastrais, limites geoespaciais, restrições ambientais, declarações do imóvel e regras oficiais de validação. Muitas vezes, o usuário precisa entender o que pode estar errado antes de decidir se uma correção é necessária.

Dores comuns incluem:

- Dificuldade para entender dados técnicos do CAR.
- Motivos pouco claros para inconsistências ou pendências.
- Falta de um checklist simples antes da correção.
- Necessidade de comparar informações do imóvel com evidências visuais no mapa.
- Risco de tentar reenviar o cadastro sem preparo suficiente.

## Usuários-alvo

- Produtores rurais que precisam de uma visão mais clara do cadastro do imóvel.
- Técnicos rurais que apoiam produtores na revisão do CAR.
- Agrônomos que precisam compreender o contexto ambiental e territorial.
- Topógrafos que trabalham com limites do imóvel e dados espaciais.
- Avaliadores do hackathon em busca de uma proposta de MVP prática e focada.

## Objetivo do MVP

O MVP deve ajudar o usuário a responder três perguntas práticas:

1. Qual é a situação atual deste imóvel rural no contexto do CAR?
2. Quais inconsistências ou sinais de alerta devem ser revisados antes da retificação?
3. Qual checklist devo seguir antes de corrigir ou reenviar o cadastro?

## Fluxo proposto do MVP

1. O usuário inicia uma pré-análise do imóvel.
2. O usuário informa dados básicos do CAR/imóvel ou envia/importa dados disponíveis.
3. O ValidaCAR exibe uma visão simplificada do imóvel.
4. O assistente verifica possíveis inconsistências e informações ausentes.
5. A visualização no mapa apoia a inspeção dos limites do imóvel e de camadas relevantes.
6. O assistente explica os alertas em linguagem clara e não excessivamente técnica.
7. O usuário recebe um checklist acionável de pré-retificação.

## Funcionalidades-chave do MVP

### Visão geral do imóvel

Mostrar as informações essenciais do imóvel em um resumo simples:

- Nome ou identificador do imóvel.
- Município e estado.
- Identificador do CAR quando disponível.
- Área declarada.
- Status ou situação conhecida do imóvel quando disponível.
- Principais fontes de dados usadas na análise.

### Geração de alertas

Gerar alertas claros para possíveis problemas como:

- Informações ausentes ou incompletas do imóvel.
- Área declarada inconsistente.
- Problemas de limite ou geometria.
- Possível sobreposição com áreas ambientais relevantes.
- Documentação de apoio ausente.
- Informações que devem ser revisadas por um profissional técnico.

Os alertas devem ser escritos em linguagem simples e agrupados por severidade ou prioridade quando possível.

### Análise visual no mapa

Oferecer uma camada visual para entender o contexto do imóvel:

- Visualização do limite do imóvel.
- Camadas de referência quando disponíveis.
- Áreas destacadas que podem exigir revisão.
- Rótulos ou marcadores simples para observações.

O mapa deve apoiar a compreensão, sem tentar substituir análise geoespacial profissional no MVP.

### Geração de checklist

Gerar um checklist prático antes da retificação, como:

- Confirmar dados do proprietário e do cadastro.
- Revisar área declarada e informações de limite.
- Verificar se os documentos de apoio estão completos.
- Validar se a geometria do mapa precisa de ajuste técnico.
- Identificar se uma revisão profissional é recomendada.
- Preparar evidências antes de tentar corrigir ou reenviar o cadastro.

## Decisões de produto

- O MVP é um assistente, não uma ferramenta oficial de envio do CAR.
- O sistema deve evitar prometer conformidade legal ou ambiental.
- A primeira versão deve priorizar explicações compreensíveis em vez de automação complexa.
- O checklist é um artefato de apoio à decisão, não um documento emitido pelo governo.
- O produto deve ser útil mesmo com dados parciais, desde que a incerteza seja comunicada claramente.
- A interface deve ser direta, profissional e adequada para uso em campo e escritório.

## Stack sugerida

A stack é apenas uma sugestão de planejamento neste estágio:

- Frontend: React ou Next.js
- Backend: Node.js ou Python
- Mapas: Leaflet ou Mapbox
- Persistência geoespacial: PostgreSQL com PostGIS
- Manipulação de arquivos: suporte a formatos geoespaciais comuns em iterações futuras
- Deploy: ambiente em nuvem adequado para validação rápida do protótipo

Nenhum código de aplicação ou dependência deve ser adicionado durante a inicialização do repositório.

## Critérios iniciais de validação

O MVP deve ser considerado útil se o usuário conseguir:

- Entender a situação do imóvel com mais clareza do que antes.
- Identificar os principais pontos que precisam de revisão.
- Explicar por que uma correção pode ser necessária.
- Sair da ferramenta com um checklist concreto de próximas ações.
- Evitar tentar um reenvio cego do CAR.
