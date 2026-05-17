  function adicionarTarefa() {
      //Varias formas de pegar o valor do input

          let inputTarefa = document.getElementById("inputTarefa");
           let tarefa = inputTarefa.value
          document.getElementById("mensagem").textContent = tarefa;
          //Adiciona a tarefa na lista
          let listaTarefas = document.getElementById("listaTarefas");
         let novaTarefa = document.createElement("li");
          //Adiciona o texto da tarefa no item da lista
         novaTarefa.textContent = tarefa; 
          listaTarefas.appendChild(novaTarefa);
          inputTarefa.value = "";  
    }

