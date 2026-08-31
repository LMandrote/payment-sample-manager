//Criando um objeto
const pagamento = {
    cliente: "Alpha Tech Ltda",
    fornecedor: "Adecco",
    invoice: "254",
    valor: 5400.50,
    vencimento: new Date(2026, 7, 26),
    status: "Pago",
}
//console.log(pagamento);

//Criando um array
const pagamentos = [
    {
        cliente: "Argo Sementes Ltda",
        fornecedor: "Ifood Benefícios",
        invoice: "4df56",
        valor: 54250.90,
        vencimento: new Date(2026, 7, 31),
        status: "Agendado",
    },
    {
        cliente: "Alpha Tech Ltda",
        fornecedor: "Adecco",
        invoice: "254",
        valor: 5400.50,
        vencimento: new Date(2026, 7, 26),
        status: "Pago",
    },
    {
        cliente: "UbiSoni Jogos Digitais Ltda.",
        fornecedor: "Cabum Eletrônicos",
        invoice: "67",
        valor: 4212.65,
        vencimento: new Date(2026, 7, 25),
        status: "Pendente",
    },
    {
        cliente: "LH Financeira Ltda.",
        fornecedor: "B4F Contabilidade",
        invoice: "1776",
        valor: 12650.90,
        vencimento: new Date(2026, 7, 25),
        status: "Pago",
    },
    {
        cliente: "Mercado 3 irmãos",
        fornecedor: "Crystal Produtos",
        invoice: "chff22",
        valor: 200.00,
        vencimento: new Date(2026, 8, 2),
        status: "Pendente",
    }
];   

//Monstrando no terminal informações dos objetos inseridos dentro do Array
//console.log(pagamentos[2].cliente);
//console.log(pagamentos[0].valor);
//console.log(pagamentos.length);

let pendentes = 0;
let agendados = 0;
let pagos = 0;
let valorTotal = 0;
let valorPendente = 0;
let valorAgendado = 0;
let valorPago = 0;

//Percorrendo os Arrays
for(let i = 0; i < pagamentos.length; i++) {
    console.log("Cliente: ", pagamentos[i].cliente);
    console.log("Status: ", pagamentos[i].status);
    console.log("Valor: ", pagamentos[i].valor);

    valorTotal = valorTotal + pagamentos[i].valor;

    if (pagamentos[i].status === "Pendente") {
        pendentes++;
        valorPendente = valorPendente + pagamentos[i].valor;

    } else if (pagamentos[i].status === "Agendado") {
        agendados++;
        valorAgendado = valorAgendado + pagamentos[i].valor;

    } else if (pagamentos[i].status === "Pago") {
        pagos++;
        valorPago = valorPago + pagamentos[i].valor;

    }

}
    console.log("Pagamentos pendentes: ", pendentes, "| R$ ", valorPendente);
    console.log("Pagamentos Agendados: ", agendados, "| R$ ", valorAgendado);
    console.log("Pagamentos Pagos: ", pagos, "| R$ ", valorPago);

    console.log("Valor total: ", valorTotal);



