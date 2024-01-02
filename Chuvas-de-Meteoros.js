const chuvas_meteoros = [
    {nome: "Alfa Centaurios",        pico:"Fev 8",   velocidade: "56 km/s"},
    {nome: "Gama Normídeos",         pico:"Mar 14",  velocidade: "56 km/s"},
    {nome: "Pi Puídeos",             pico:"Abr 23",  velocidade: "18 km/s"},
    {nome: "Eta Aquáridas",          pico:"Mai 5",   velocidade: "66 km/s"},
    {nome: "Alfa Capricornídeos",    pico:"Jul 30",  velocidade: "23 km/s"},
    {nome: "Delta Aquáridas do Sul", pico:"Jul 28",  velocidade: "41 km/s"},
    {nome: "Piscis Autrinídeos",     pico:"Jul 28",  velocidade: "35 km/s"},
    {nome: "Fenícidas",              pico:"Dez 6",   velocidade: "18 km/s"},
    {nome: "Pupidas-Velidas",        pico:"Dez 6",   velocidade: "40 km/s"},
];


let titulo = "=== chuvas de meteoros - hemisfério sul ===";
console.log(titulo.toUpperCase());// toUpperCase() para deixar o título em maiúsculo
console.log("\n");

for ( const chuva of chuvas_meteoros ){ // estrutura de repetição para interação dos elementos

    let nome_chuva = chuva.nome;// obtendo o nome da chuva de meteoro
    let pico_chuva = chuva.pico;
    let velocidade_chuva = chuva.velocidade;

    let pico_mes_dia = pico_chuva.split(" ");// o método split() quebra a string pico_chuva com o caractere de espaço

    let pico_dia = pico_mes_dia[1];
    let pico_mes = pico_mes_dia[0];

    let pico_mes_nome = "";

    switch (pico_mes) {

        case "Jan":     pico_mes_nome = "Janeiro";     break;
        case "Fev":     pico_mes_nome = "Fevereiro";     break;
        case "Mar":     pico_mes_nome = "Março";     break;
        case "Abr":     pico_mes_nome = "Abril";     break;
        case "Mai":     pico_mes_nome = "Maio";     break;
        case "Jun":     pico_mes_nome = "Junho";     break;
        case "Jul":     pico_mes_nome = "Julho";     break;
        case "Ago":     pico_mes_nome = "Agosto";     break;
        case "Set":     pico_mes_nome = "Setembro";     break;
        case "Out":     pico_mes_nome = "Outubro";     break;
        case "Nov":     pico_mes_nome = "Novembro";     break;
        case "Dez":     pico_mes_nome = "Dezembro";     break;

        default:        pico_mes_nome = "Mês inválido";    break;

    }

    let pico_data_chuva_formatada = pico_dia + " de " + pico_mes_nome;

    let velocidade_formatada = velocidade_chuva.replace("km/s", "quilômetros por segundo");
    //com o método replace() substituimos a sigla que representa a velocidade da chuva pela sua descrição por extenso

    console.log("Nome: ".padEnd(30, ".") + nome_chuva);
    console.log("Pico: ".padEnd(30, ".") + pico_data_chuva_formatada);
    console.log("Velocidade: ".padEnd(30, ".") + velocidade_formatada);
    console.log("\n");
    // o método padEnd() ajuda a deixar aexibição mais organizada

}
