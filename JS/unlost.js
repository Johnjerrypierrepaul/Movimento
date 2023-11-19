function get_all(){
    fetch("http://127.0.0.1:8000/api/formlogs")
    .then(response => response.json())
    .then(data => {
      // faça algo com os dados retornado
      console.log(data)
    })
    .catch(error => {
      // trate erros de requisição
    });
}

// essa função obter todos os dados cadastrado no banco de dados