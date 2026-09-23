# controle-consumo-energia

## Descrição do Problema

Uma empresa quer monitorar o consumo de energia de seus equipamentos para identificar quais ultrapassaram o limite mensal permitido.

## Requisitos

- Receber uma lista de equipamentos com nome, consumo mensal (em kWh) e limite permitido
- Identificar os equipamentos que excederam o limite
- Calcular a soma do consumo total de todos os equipamentos
- Informar qual equipamento teve o maior consumo individual

## Exemplo de Uso

const equipamentos = [
  { nome: "Servidor 1", consumo: 450, limite: 400 },
  { nome: "Ar Condicionado", consumo: 320, limite: 350 },
  { nome: "Impressora", consumo: 50, limite: 100 }
];

Saída:

Consumo total: 820 kWh
Maiores consumidores:
- Servidor 1
Equipamento com maior consumo: Servidor 1 (450 kWh)