const backbtn= document.getElementById("backbtn") 

backbtn.addEventListener("click" ,getback)

function getback(){
    document.location = '../index.html';
    return true;
}
const savebtn= document.getElementById("savebtn") 

savebtn.addEventListener("click" ,save)

function save(){
    var formuData = {
        name: document.formlogs.name.value,
        Lastname: document.formlogs.Lastname.value,
        telefone:  document.formlogs.telefone.value,
        email: document.formlogs.email.value,
        sexo: document.formlogs.sexo.value,
        estado_civil: document.formlogs.estado_civil.value,
        Data_nascimento: document.formlogs.Data_nascimento.value,
        nacionalidade: document.formlogs.nacionalidade.value,
    };
    
    var data = new FormData();
    data.append( "json", JSON.stringify( formuData ) );
    
    fetch("http://127.0.0.1:8000/api/formlogs",
    {
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(formuData)
    })
    .then(function(res){ return res.json(); })
    .then(function(data){ exibirMensagem(data);  })
}

function exibirMensagem() {
    document.getElementById("mensagem").innerText =  "Obrigado por se cadastrar!";
}