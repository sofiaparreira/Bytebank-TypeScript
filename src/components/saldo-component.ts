
import { formatarData } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarMoeda } from "../utils/formatters.js";

let saldo: number = 3000;


const elementoSaldo = document.querySelector(".valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement


if (elementoSaldo !== null) {
  const dataAcesso: Date = new Date();
  elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.dia_semana_mes_ano) 
}


export function getSaldo():number {
  return saldo //exportar saldo
}

atualizarSaldo(saldo); //exibir na tela ao carregar projeto

export function atualizarSaldo(novoSaldo: number): void {
  saldo = novoSaldo
  if (elementoSaldo !== null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
  }
}
