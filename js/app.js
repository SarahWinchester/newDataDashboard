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
    var length= data[dataSedes2][studentsGen].students.length-1;
    document.getElementById("numberStudents").innerHTML= length
    //trae el template
    var cardTemplate = document.getElementById("cardTemplate");
    var cardTemplateHtml= cardTemplate.innerHTML;
    
    var cardHtml = "";
    //iterar sobre el data 
    for(var i=0 ; i<studentPersonalData.length;i++){
        cardHtml+= cardTemplateHtml.replace("{{name}}",studentPersonalData[i].name);
    }
    document.getElementById("cardsHolder").innerHTML = cardHtml ;
    obtenerRatings(studentsGen);
}
function obtenerRatings(studentsGen){
    var dataValue = document.getElementById("sedes").value;
    var dataRatings= studentsGen;
    var allDataRatings= data[dataValue][dataRatings].ratings;
    // console.log(allDataRatings);
    var dataStudentInfo= data[dataValue][dataRatings].students;
    // console.log(dataStudentInfo);
    var active= 0;
    var inactive=0;
    for(var j=0; j<dataStudentInfo.length-1; j++){
        console.log(dataStudentInfo[j].active);
        if (dataStudentInfo[j].active=== false) {
            inactive++
        }
        if(dataStudentInfo[j].active=== true){
            active++
        }
        // console.log(active,inactive)
        document.getElementById("activeStudents").innerHTML=active;
        document.getElementById("inactiveStudents").innerHTML=inactive;
        document.getElementById("studentsOut").innerHTML= Math.ceil((inactive/dataStudentInfo.length)*100) + '%';
    }
    
}
//llamada a select de generacion
var generationList = document.getElementById("generationList");
generationList.addEventListener("change",obtenerAlumnas)
//Llamada a sedes 
var sedes = document.getElementById("sedes")
sedes.addEventListener("change", obtenerGeneracion);
//Llamada de  a las geneneraciones individuales 
obtenerSedes(data);

