import { TipoTransacao } from "./TipoTransacao.js";

export type Transacao = {
    typeTransaction: TipoTransacao;
    value: number
    date: Date
}