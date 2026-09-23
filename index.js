const equipamentos = [
  { nome: "Servidor 1", consumo: 450, limite: 400 },
  { nome: "Ar Condicionado", consumo: 320, limite: 350 },
  { nome: "Impressora", consumo: 50, limite: 100 }
];

let total = 0;
let maior = equipamentos[0];
let excedidos = [];

for (let i = 0; i < equipamentos.length; i++) {
  const eq = equipamentos[i];
  total += eq.consumo;
  if (eq.consumo > maior.consumo) {
    maior = eq;
  }
  if (eq.consumo >= eq.limite) {
    excedidos.push(eq.nome);
  }
}

console.log("Consumo total: " + total + " kWh");
console.log("Maiores consumidores:");
excedidos.forEach(n => console.log("- " + n));
console.log("Equipamento com maior consumo: " + maior.nome + " (" + maior.consumo + " kWh)");