console.log(data);

var obtenerSedes = function (dataObj) {
    var select = document.getElementById("sedes");

    var dataKey = Object.keys(dataObj)

    console.log(dataKey, dataKey.length);

    for (let i =0; i < dataKey.length;i++){
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
}
var sedes = document.getElementById("sedes")
sedes.addEventListener("change", obtenerGeneracion);

obtenerSedes(data);