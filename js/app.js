console.log(data);

var obtenerSedes = function (dataObj) {
    var select = document.getElementById("sedes");
    
    var dataKey = Object.keys(dataObj)
    
    console.log(dataKey, dataKey.length);
    
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
    // console.log(data[sedes]);
    var dataSedes= Object.keys(data[sedes])
    generationList.innerHTML = "";
    for(var g=0; g < dataSedes.length; g++){
        console.log(dataSedes[g])
        // generation option
        var eachOptionGeneration = document.createElement("option");
        eachOptionGeneration.setAttribute("class","each-option");
        eachOptionGeneration.setAttribute("value",dataSedes[g]);
        eachOptionGeneration.innerHTML= dataSedes[g];
        generationList.appendChild(eachOptionGeneration);
        }
}
//llamada a select de generacion
var generationList = document.getElementById("generationList");
//Llamada a sedes 
var sedes = document.getElementById("sedes")
sedes.addEventListener("change", obtenerGeneracion);
//Llamada de  a las geneneraciones individuales 
obtenerSedes(data);