
//Cria um formatador de moeda no padrão brasileiro
//Os valores continuam sendo números; a formatação só acontece na exibição!
const formatadorMoeda = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
});

//Cria um formatador para exibir objetos Date no padrão brasileiro.
const formatadorData = new Intl.DateTimeFormat("pt-BR");

//Lista da pagamentos fictícios.
//Cada pagamento é representado por um objeto com suas propriedades. 
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

//Contadores: armazenam a quantidade de pagamentos por status.
let pendentes = 0;
let agendados = 0;
let pagos = 0;
//Acumuladores: armazenam a soma dos valores dos pagamentos.
let valorTotal = 0;
let valorPendente = 0;
let valorAgendado = 0;
let valorPago = 0;

//Percorrendo todos os pagamentos do Array.
//"i" representa o índice do pagamento atual.
for(let i = 0; i < pagamentos.length; i++) {
    console.log("Cliente: ", pagamentos[i].cliente);
    console.log("Status: ", pagamentos[i].status);
    console.log("Valor: ", formatadorMoeda.format(pagamentos[i].valor));
    console.log("Vencimento: ", formatadorData.format(pagamentos[i].vencimento));

    //Soma o valor do pagamento atual ao total geral.
    valorTotal = valorTotal + pagamentos[i].valor;

    //Verifica o status do pagamento atual.
    //Além de contar os pagamentos, acumula o valor de cada categoria.
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
    //Exibe o resumo após todos os pagamentos terem sido processados.
    console.log("Pagamentos pendentes: ", pendentes, "|", formatadorMoeda.format(valorPendente));
    console.log("Pagamentos Agendados: ", agendados, "|", formatadorMoeda.format(valorAgendado));
    console.log("Pagamentos Pagos: ", pagos, "|", formatadorMoeda.format(valorPago));
    console.log("Valor total: ", formatadorMoeda.format(valorTotal));



