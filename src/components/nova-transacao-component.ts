import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import { atualizarSaldo, getSaldo } from "./saldo-component.js";

const elementoForm = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
if (elementoForm) {
  elementoForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from reloading the page on submit

    if (!elementoForm.checkValidity()) {
      alert("Preencha todos os campos");
      return;
    }

    const inputTypeTransaction = elementoForm.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValue = elementoForm.querySelector("#valor") as HTMLInputElement;
    const inputDate = elementoForm.querySelector('#data') as HTMLInputElement;

    let typeTransaction: TipoTransacao = inputTypeTransaction.value as TipoTransacao
    let value: number = inputValue.valueAsNumber;
    let date: Date = new Date(inputDate.value);
    let saldo: number = getSaldo();

     
    if (typeTransaction === TipoTransacao.deposito) {
      saldo += value;
    } else if (typeTransaction === TipoTransacao.transferencia || typeTransaction === TipoTransacao.boleto) {
      saldo >= value ? saldo -= value : alert("Saldo Insuficiente")
      ;
    } else {
      alert("Transação Inválida");
      return;
    }
    

    atualizarSaldo(saldo);

    const newTransaction : Transacao= {
      typeTransaction: typeTransaction,
      value: value,
      date: date
    };

    console.log(newTransaction);
    elementoForm.reset(); // Reset form values
  });
}
