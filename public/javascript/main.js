var amigosJson = [{"nome":"Carlos Alexandre Dias Leal","email":"carlos.diasleal@gmail.com"},{"nome":"Carlos Beirigo Fernandes","email":"carlosbeirigo@hotmail.com"},{"nome":"Carlos Eduardo Cabral","email":"edu.carlos2000@hotmail.com"},{"nome":"Gustavo William de Bessa","email":"gustavoux@yahoo.com.br"},{"nome":"Jaccques Jonas de Souza Júnior","email":"jacquesjr19@gmail.com"},{"nome":"Lucas Tayar Alvarenga Cunha","email":"lucastayar12@gmail.com"},{"nome":"Luciano Gobo Saraiva Leite","email":"lucianogobo@gmail.com"},{"nome":"Marco Antonio Guarato Alves","email":"demonhunter1512@gmail.com"},{"nome":"Mario Augusto Oliveira Souto","email":"mario1119@hotmail.com"},{"nome":"Márcio Alves Junior","email":"marcioalves.jr97@gmail.com"},{"nome":"Pedro Henrique Ribeiro Cortez","email":"pedrocortez877@gmail.com"},{"nome":"Rafael Silveira Assunção","email":"rafael.silveira.a12@gmail.com"},{"nome":"Tainá Costa Caetano Pires","email":"tainaccpires@gmail.com"}];

var dat = new Date();

function getFormattedDate() {
    var date = new Date()
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var formatterDay;	
    if (day < 10) {
        formatterDay = '0'+ day;
    } else {
        formatterDay = day;
    }
		
    var formatterMonth;	
    if (month < 10) {
        formatterMonth = '0'+ month;
    } else {
        formatterMonth = month;
    }

    return formatterDay +'/'+ formatterMonth +'/'+ year;
}

dat = getFormattedDate();

var p = document.getElementById("dat");

p.innerHTML = dat;


for (let index = 0; index < amigosJson.length-1; index++) {
    var tr = document.createElement("tr");
    var tdn = document.createElement("td");
    var tde = document.createElement("td");
    var tableBody = document.getElementById("tb");

    tdn.innerHTML = amigosJson[index].nome;
    tde.innerHTML = amigosJson[index].email;

    tableBody.appendChild(tr);
    tr.appendChild(tdn);
    tr.appendChild(tde);

    
}


