# ValidaCAR MVP

## Posicionamento do produto
O ValidaCAR é um assistente de pré-retificação do CAR para o haCARthon. Ele ajuda produtores rurais, técnicos, agrônomos e topógrafos a entenderem a situação atual de um imóvel rural, identificarem inconsistências e gerarem um checklist simples antes de tentar corrigir ou reenviar o cadastro.

O CAR já mostra os dados. O ValidaCAR mostra o que fazer com eles.

O MVP deve focar em clareza, orientação prática e apoio à decisão. Ele não deve realizar retificação oficial nem substituir análise profissional habilitada.

O produto não deve ser tratado apenas como um validador de mapa. A proposta central é funcionar como um assistente de pré-retificação: interpretar informações técnicas, apontar riscos de forma compreensível e transformar a análise em próximas ações.

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
1. Imóvel carregado com dados básicos do CAR e informações mockadas para a demo.
2. Mapa exibido com o limite do imóvel e camadas de referência necessárias para a análise.
3. Alertas gerados a partir de inconsistências, ausência de dados ou pontos que exigem revisão.
4. Explicação simples para cada alerta, mostrando por que ele importa antes da retificação.
5. Checklist/relatório com ações recomendadas antes de corrigir ou reenviar o cadastro.

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
- O CAR já organiza e exibe muitos dados; o ValidaCAR deve traduzir esses dados em orientação prática.
- O sistema deve evitar prometer conformidade legal ou ambiental.
- A primeira versão deve priorizar explicações compreensíveis em vez de automação complexa.
- O checklist é um artefato de apoio à decisão, não um documento emitido pelo governo.
- O produto deve ser útil mesmo com dados parciais, desde que a incerteza seja comunicada claramente.
- A interface deve ser direta, profissional e adequada para uso em campo e escritório.

## Stack sugerida
A stack do MVP é objetiva e ainda não deve ser implementada nesta etapa:

- React + TypeScript
- Leaflet / React Leaflet
- Turf.js
- Dados mockados em JSON
- Backend opcional em Node.js depois

Nenhum código de aplicação ou dependência deve ser adicionado durante a inicialização do repositório.

## Critérios iniciais de validação
O MVP deve ser considerado útil se o usuário conseguir:

- Entender a situação do imóvel com mais clareza do que antes.
- Identificar os principais pontos que precisam de revisão.
- Explicar por que uma correção pode ser necessária.
- Sair da ferramenta com um checklist concreto de próximas ações.
- Evitar tentar um reenvio cego do CAR.
