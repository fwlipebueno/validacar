# Design de UI do MVP
O ValidaCAR deve parecer um painel de pré-retificação, não um sistema burocrático. A interface precisa responder rápido a três perguntas: qual é a situação do imóvel, o que merece atenção e o que fazer agora.

O CAR já mostra os dados. O ValidaCAR mostra o que fazer com eles.

## Experiência desktop
No desktop, o MVP deve funcionar como um painel de diagnóstico em três áreas principais:

- Resumo à esquerda: dados do imóvel, situação do cadastro, condição da análise, município/UF, área declarada, área calculada e possibilidade de retificação.
- Mapa no centro: polígono do imóvel, destaque visual de inconsistências e sobreposições simuladas.
- Alertas e checklist à direita: lista priorizada de pontos de atenção, explicação simples e ações recomendadas.

Essa distribuição permite que o usuário compare dados, mapa e ação sem trocar de tela. A leitura deve ser clara o suficiente para uma apresentação de demo e útil o bastante para um produtor ou técnico entender o diagnóstico.

## Experiência mobile
No mobile, a experiência deve ser guiada em etapas:

1. Início com a proposta do ValidaCAR.
2. Seleção do imóvel de exemplo.
3. Resumo do imóvel.
4. Mapa com área declarada e pontos de atenção.
5. Alertas explicados em linguagem simples.
6. Checklist de ações.
7. Relatório final.

O mobile não deve tentar reproduzir o painel inteiro em uma tela pequena. Ele deve conduzir o usuário como um assistente, revelando a informação na ordem em que ela ajuda a tomar decisão.

## Componentes principais
- Card de resumo do imóvel.
- Indicador de status do cadastro.
- Indicador de condição da análise.
- Mapa com polígono e camada de alerta.
- Lista de alertas com prioridade.
- Explicação simples para cada alerta.
- Checklist acionável.
- Botão de gerar relatório.
- Relatório final com diagnóstico e próximos passos.

## Hierarquia visual
A tela deve priorizar primeiro a situação do imóvel, depois os alertas críticos e por fim o checklist. A ordem ideal de leitura é:

1. O imóvel pode ou não avançar para retificação?
2. Quais dados chamam atenção?
3. O que o mapa mostra?
4. Quais pendências precisam de ação?
5. O que o usuário deve fazer agora?

## Cores sugeridas
- Verde: situação regular, informação confirmada ou ação concluída.
- Amarelo: atenção, dado inconsistente ou pendência que exige revisão.
- Vermelho: risco alto, bloqueio ou ponto que impede avanço.
- Azul: informação contextual, orientação e apoio à navegação.
- Cinza: dados neutros, metadados e estrutura da interface.

As cores devem ajudar a priorizar, não decorar a tela. O usuário precisa entender rapidamente se está diante de informação, atenção ou bloqueio.

## O que evitar
- Transformar a demo em um mapa cheio de camadas sem orientação.
- Usar linguagem técnica sem explicação.
- Esconder o checklist no fim da experiência.
- Fazer a tela parecer um formulário de cadastro.
- Dar a entender que o ValidaCAR emite decisão oficial.
- Criar uma landing page no lugar da experiência real do produto.
