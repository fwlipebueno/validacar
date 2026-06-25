# Backlog do Produto
Este backlog organiza o desenvolvimento do MVP do ValidaCAR. A prioridade é construir uma experiência clara de pré-retificação: imóvel carregado, mapa, alertas, explicação simples, checklist e relatório.

## Must have
- Dashboard do imóvel com situação do cadastro, condição da análise, área, município/UF e principais sinais de atenção.
- Mapa com polígono do imóvel para apoiar a leitura visual.
- Alertas de inconsistência baseados nos dados simulados da demo.
- Checklist de ação com próximos passos antes da retificação.
- Relatório simples consolidando resumo do imóvel, alertas e checklist.
- Dados mockados em JSON para permitir uma demo sem integração real.
- Fluxo de demo claro, do imóvel carregado ao relatório final.

## Should have
- Upload/mock de GeoJSON para simular a entrada do polígono.
- Cálculo de área com Turf.js para comparar área declarada e área calculada.
- Priorização dos alertas por severidade ou urgência.
- Explicação simples para cada pendência, conectando o problema ao próximo passo recomendado.

## Could have
- Exportação em PDF do relatório.
- IA para reescrever mensagens técnicas em linguagem mais simples.
- Comparação com base externa simulada para demonstrar sobreposição ou conflito de dados.

## Out of scope
- Login Gov.br.
- Integração real com SICAR.
- Envio real de .CAR.
- Decisão oficial de regularidade ambiental.
- Análise jurídica completa.
