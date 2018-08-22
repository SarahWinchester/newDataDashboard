console.log(data);

// DATA IN SELECT
var obtenerSedes = function (dataObj) {
    var select = document.getElementById("sedes");
    var dataKey = Object.keys(dataObj)
    console.log(dataKey, dataKey.length);

    var optionDefault= document.createElement("option");
    optionDefault.innerHTML="SEDE"
    optionDefault.setAttribute("disabled", true)
    optionDefault.setAttribute("selected",true);
    select.appendChild(optionDefault);

    for (var i =0; i < dataKey.length;i++){
        var option = document.createElement("option");
        option.setAttribute("value", dataKey[i]);
        option.innerHTML = dataKey[i];
        select.appendChild(option);
        console.log(dataKey[i])
    }
}
var obtenerGeneracion = function(e){
    
    var sedes = e.target.value;
    console.log(data[sedes]);
    var dataSedes= Object.keys(data[sedes])
    generationList.innerHTML = "";
    var optionDefault= document.createElement("option");
    optionDefault.innerHTML="GENERACION"
    optionDefault.setAttribute("disabled", true)
    optionDefault.setAttribute("selected",true);
    generationList.appendChild(optionDefault);
    for(var g=0; g < dataSedes.length; g++){
        console.log(dataSedes[g])
        // generation option
        var eachOptionGeneration = document.createElement("option");
        eachOptionGeneration.setAttribute("class","each-option");
        eachOptionGeneration.setAttribute("value",dataSedes[g]);
        eachOptionGeneration.innerHTML= dataSedes[g];
        generationList.appendChild(eachOptionGeneration);
    }
    // obtenerAlumnas(dataSedes)
}

function obtenerAlumnas(e) {
    //trae el valor del elemento seleccionado de Sedes
    var dataSedes2 = document.getElementById("sedes").value;
    console.log(dataSedes2)
    //trae el elemento seleccionado de generacion
    var studentsGen= e.target.value;
    console.log(studentsGen);
    //trae la informacion de la generacion 
    var studentInfo= data[dataSedes2][studentsGen];
    console.log(studentInfo);
    //trae el objeto con estudiantes
    var studentPersonalData= data[dataSedes2][studentsGen].students;
    console.log(studentPersonalData);
    //trae el template
    var cardTemplate = document.getElementById("cardTemplate");
    var cardTemplateHtml= cardTemplate.innerHTML;
    var cardHtml = "";
    //iterar sobre el data 
    for(var key in studentPersonalData){
        cardHtml += cardTemplateHtml
        // .replace(/{{photo}}/g,studentPersonalData[key][photo])
        .replace(/{{name}}/g, cardTemplateHtml[key][name]);
    }
    document.getElementById("cardsHolder").innerHTML = cardHtml ;


    }

//llamada a select de generacion
var generationList = document.getElementById("generationList");
generationList.addEventListener("change",obtenerAlumnas)
//Llamada a sedes 
var sedes = document.getElementById("sedes")
sedes.addEventListener("change", obtenerGeneracion);
//Llamada de  a las geneneraciones individuales 
obtenerSedes(data);

