import { formatarData } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarMoeda } from "../utils/formatters.js";
let saldo = 3000;
const elementoSaldo = document.querySelector(".valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldo !== null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.dia_semana_mes_ano);
}
export function getSaldo() {
    return saldo; //exportar saldo
}
atualizarSaldo(saldo); //exibir na tela ao carregar projeto
export function atualizarSaldo(novoSaldo) {
    saldo = novoSaldo;
    if (elementoSaldo !== null) {
        elementoSaldo.textContent = formatarMoeda(saldo);
    }
}
