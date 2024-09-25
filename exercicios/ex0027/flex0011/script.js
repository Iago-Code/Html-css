let pessoa, nome, idade, peso;

// Atribuindo valores às variáveis
nome = "Manuca";  // Nome deve estar entre aspas
idade = 22;
peso = 80;

// Concatenando as informações
pessoa = `Nome: ${nome}, Idade: ${idade}, Peso: ${peso}`;  // Usando template literals para formatação

// Atualizando o conteúdo de um elemento com id "texto"
document.getElementById("texto").textContent = pessoa;  // Usando textContent para definir o conteúdo