//condicional: en esta condicional voy a poner el valor de la pagina. 
const valorPagina = 1000; 
//variables: aca voy a declarar las variables. 
let cantidadDePaginas = parseInt(prompt("ingrese la cantidad de paginas que necesita para su sitio web"));
let costoTotal = valorPagina * cantidadDePaginas;
//ciclo y condicionales: aca esta un ciclo con los condicionales dentro.
while(cantidadDePaginas) {
    if(cantidadDePaginas >= 6) {
    costoTotal = costoTotal * 2;
    alert("te sale 12000");
}
else if(cantidadDePaginas === 2){
    alert("te sale 2000");
}
else if(cantidadDePaginas === 3){
    alert("te sale 3000");
}
else if(cantidadDePaginas === 4){
    alert("te sale 4000");
}
else if(cantidadDePaginas === 5){
    alert("te sale 5000");
}
{
    break
}
}
console.log("gracias por elegirnos, te pedimos que te pongas en contacto para mas informacion")
//funcion: esta funcion me deberia mostrar que opcion eligio el usuario.
function esLoQueEligio() {
    return cantidadDePaginas;
}
console.log(esLoQueEligio());