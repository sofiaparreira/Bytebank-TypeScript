import { FormatoData } from "../types/FormatoData.js";


export function formatarMoeda(valor: number): string {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor);
}

export function formatarData(data: Date, formato: FormatoData = FormatoData.padrao): string {
    if (formato === FormatoData.dia_semana_mes_ano) {


        return data.toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });

    } else if (formato === FormatoData.dia_mes) {
        return data.toLocaleDateString("pt-br", { day: "2-digit", month: "2-digit" })
    } else {
        return data.toLocaleDateString("pt-br")
    }
}