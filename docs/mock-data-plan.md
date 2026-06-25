# Plano de Dados Mockados
O MVP deve usar dados simulados para demonstrar a experiência sem depender de integração real com sistemas oficiais. Os dados precisam ser consistentes o suficiente para sustentar o dashboard, o mapa, os alertas, o checklist e o relatório.

## Dados necessários
- Imóvel rural fictício.
- Proprietário/técnico fictício.
- Código CAR fictício.
- Município/UF.
- Área declarada.
- Área calculada.
- Status do cadastro.
- Condição da análise.
- Indicação se pode retificar ou não.
- Polígono GeoJSON.
- Sobreposição simulada.
- Lista de alertas.
- Mensagens técnicas simuladas.
- Checklist final.

## Direção para o primeiro cenário
O primeiro cenário deve representar um imóvel com dados suficientes para a demo e algumas inconsistências compreensíveis:

- Diferença entre área declarada e área calculada.
- Possível sobreposição simulada.
- Mensagem técnica difícil de interpretar.
- Retificação temporariamente indisponível ou condicionada à revisão.
- Checklist com ações práticas para o usuário preparar antes de tentar corrigir.

## Uso esperado na aplicação futura
- Alimentar o dashboard do imóvel.
- Renderizar o polígono no mapa.
- Calcular ou comparar áreas com Turf.js.
- Gerar alertas priorizados.
- Exibir explicações simples.
- Montar o checklist e o relatório final.
