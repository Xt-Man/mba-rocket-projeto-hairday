import { schedulesDay } from "./load" 
import { scheduleCancel } from "../../services/schedule-cancel"

const periods = document.querySelectorAll('.period')

// GEra event de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  // Captura o evento de clique da lista
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado.
      const item = event.target.closest("li")
      
      // Pega o id do agednamento para remover
      const { id } = item.dataset

      // Confirma que o id foi selecionado
      if(id) {
        // Confirma se o usuário quer remover/cancelar
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

        if (isConfirm) {
          // Faz a requisição de cancelamnento
          await scheduleCancel(id)
          // Recarrega os agendamentos
          schedulesDay()
        }
      }
    }
  })
})