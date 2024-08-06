import { TipoTransacao } from "../types/TipoTransacao.js";
import { atualizarSaldo, getSaldo } from "./saldo-component.js";
const elementoForm = document.querySelector(".block-nova-transacao form");
if (elementoForm) {
    elementoForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from reloading the page on submit
        if (!elementoForm.checkValidity()) {
            alert("Preencha todos os campos");
            return;
        }
        const inputTypeTransaction = elementoForm.querySelector("#tipoTransacao");
        const inputValue = elementoForm.querySelector("#valor");
        const inputDate = elementoForm.querySelector('#data');
        let typeTransaction = inputTypeTransaction.value;
        let value = inputValue.valueAsNumber;
        let date = new Date(inputDate.value);
        let saldo = getSaldo();
        if (typeTransaction === TipoTransacao.deposito) {
            saldo += value;
        }
        else if (typeTransaction === TipoTransacao.transferencia || typeTransaction === TipoTransacao.boleto) {
            saldo >= value ? saldo -= value : alert("Saldo Insuficiente");
        }
        else {
            alert("Transação Inválida");
            return;
        }
        atualizarSaldo(saldo);
        const newTransaction = {
            typeTransaction: typeTransaction,
            value: value,
            date: date
        };
        console.log(newTransaction);
        elementoForm.reset(); // Reset form values
    });
}
