# Estratégia de Dados
No MVP, a estratégia de dados deve reduzir risco e manter a demo estável. O objetivo é validar a experiência de pré-retificação, não construir uma infraestrutura completa antes da hora.

O CAR já mostra os dados. O ValidaCAR mostra o que fazer com eles.

## MVP sem banco
O MVP não deve usar banco de dados. A primeira versão deve rodar com dados mockados em JSON para garantir previsibilidade durante a apresentação e evitar dependência de integração externa.

Essa decisão reduz risco no hackathon porque:

- Evita tempo gasto com infraestrutura.
- Mantém a demo estável mesmo sem internet ou API oficial.
- Permite controlar os cenários de inconsistência.
- Facilita explicar o fluxo completo em poucos minutos.

## Dados mockados em JSON
Os JSONs devem representar:

- Imóvel.
- Proprietário ou técnico fictício.
- Código CAR fictício.
- Município/UF.
- Área declarada.
- Área calculada.
- Status do cadastro.
- Condição da análise.
- Permissão ou bloqueio de retificação.
- Polígono GeoJSON.
- Sobreposição simulada.
- Alertas estruturados.
- Mensagens técnicas simuladas.
- Checklist final.
- Relatório gerado.

## Uso de localStorage
O `localStorage` pode ser usado apenas para estado simples da demo, como:

- Checklist marcado.
- Relatório gerado.
- Imóvel selecionado.
- Preferência de etapa atual no fluxo guiado.

Ele não deve ser tratado como base de dados real nem guardar informação sensível.

## Backend opcional
Um backend em Node.js pode entrar em uma fase futura, caso seja necessário persistir diagnósticos, gerar relatórios do lado servidor ou integrar serviços externos. Para o MVP do hackathon, ele deve permanecer opcional.

## Evolução real
Em uma evolução pós-MVP, a stack de dados pode usar PostgreSQL + PostGIS para armazenar:

- Imóveis.
- Geometrias.
- Diagnósticos.
- Alertas.
- Checklists.
- Relatórios.
- Histórico de análises.

Essa evolução faz sentido quando o produto sair da demo controlada e passar a lidar com múltiplos usuários, dados persistentes, auditoria e análises geoespaciais mais robustas.
