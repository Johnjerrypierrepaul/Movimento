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
        name: document.getElementById('nome').value,
        Lastname: document.getElementById('sobrenome').value,
        telefone:  document.getElementById('ltel').value,
        email: document.getElementById('email').value,
        sexo: document.getElementById('ssex').value,
        estado_civil: document.getElementById('lcivil').value,
        Data_nascimento: document.getElementById('nascimento').value,
        nacionalidade: document.getElementById('country').value,
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
    .then(function(data){  })
}