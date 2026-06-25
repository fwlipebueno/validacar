# Anotações de Pesquisa

## Fluxo atual do CAR
Anotações sobre como usuários atualmente revisam, corrigem ou reenviam informações do CAR.

## Observações do sistema

### Central do Proprietário/Possuidor
Área de entrada para o usuário acompanhar imóveis, mensagens e ações relacionadas ao cadastro.

- Permite selecionar um imóvel rural.
- Lista propriedades cadastradas vinculadas ao usuário.
- O acesso às informações acontece a partir do imóvel selecionado.
- Para o ValidaCAR, essa visão reforça a necessidade de orientar o usuário sobre próximos passos, não apenas repetir dados já disponíveis.

### Página inicial do imóvel
Visão resumida que concentra sinais importantes para a primeira leitura do imóvel.

- Mostra a situação do cadastro.
- Mostra a condição da análise.
- Apresenta área do imóvel.
- Apresenta município e UF.
- Exibe coordenadas.
- Pode oferecer botões como baixar arquivo .RET, ficha do imóvel, recibo de inscrição e baixar CAR.
- Para a demo, essa página é referência direta para o dashboard inicial do imóvel no ValidaCAR.

### Demonstrativo do imóvel
Concentra informações técnicas e cadastrais do imóvel rural.

- Apresenta APP.
- Apresenta Reserva Legal.
- Apresenta áreas de uso restrito.
- Apresenta cobertura do solo.
- Apresenta sobreposições.
- É técnico e pouco orientado para ação.
- É uma fonte importante para a demo porque mostra que o problema não é apenas acessar os dados, mas entender o que eles significam antes de uma retificação.

### Central de mensagens
Canal em que pendências, comunicações ou avisos podem aparecer para o usuário.

- Mostra notificações sobre análise e cancelamento.
- As mensagens são úteis, mas não explicam bem o próximo passo para o usuário.
- O ValidaCAR pode usar essa lógica como referência para transformar sinais técnicos em alertas mais claros e acionáveis.

### Retificação
Fluxo sensível, pois envolve alterar ou reenviar informações do cadastro.

- Pode mostrar que não é possível retificar naquele momento.
- Isso reforça a necessidade de orientar o usuário antes de tentar corrigir.
- O MVP deve se posicionar antes dessa etapa, ajudando o usuário a revisar riscos, lacunas e evidências antes de prosseguir.

### Análise
Etapa em que informações do imóvel são avaliadas.

- Mostra documentos recebidos.
- Mostra documentos pendentes.
- Mostra documentos enviados ou justificados.
- Mostra restrições.
- A informação existe, mas falta uma camada de priorização e orientação.
- A oportunidade do ValidaCAR está em explicar os pontos de atenção de forma simples, conectando mapa, dados declarados e checklist de revisão.

### Cadastro pré-preenchido
Indica que parte dos dados pode vir pronta ou sugerida pelo sistema.

- Possui caminhos como listar imóveis.
- Possui caminho para cadastrar novo imóvel.
- Possui caminho para gerenciar cadastrante.
- Pode ser usado como referência para o fluxo inicial da nossa demo.
- O ValidaCAR deve ajudar o usuário a revisar essas informações e entender quando algo precisa de confirmação técnica.

## Dores dos usuários
Dificuldades observadas ou relatadas por produtores rurais, técnicos, agrônomos e topógrafos.

- O sistema pode apresentar muitos dados, mas nem sempre deixa claro qual ação o usuário deve tomar.
- A diferença entre uma inconsistência simples, uma pendência relevante e um risco de retificação pode não ser evidente.
- Usuários precisam conectar informações cadastrais, análise visual no mapa e documentação de apoio.
- Antes de retificar, o usuário precisa saber o que revisar, o que confirmar com um profissional e o que preparar como evidência.

## Capturas de tela e observações
Capturas de tela, referências de interface, observações de mapa e notas de fluxo coletadas durante a pesquisa.

## Links úteis
Recursos oficiais relevantes, referências técnicas, bases de dados e inspirações de produto.

## Perguntas em aberto
Perguntas que ainda precisam de validação durante a descoberta do MVP e o desenvolvimento no haCARthon.

- Quais alertas são mais úteis para uma primeira demo de pré-retificação?
- Quais dados mockados representam melhor o fluxo real sem depender de integração oficial?
- Como diferenciar visualmente alerta, observação e recomendação?
- Qual formato de checklist/relatório é mais claro para produtores e técnicos?
