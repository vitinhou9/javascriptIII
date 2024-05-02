
function dobrarNumeros(array) //ok
{
     return array.map((number) => number*2);
}
function somarValores(array) //ok
{
    return array.reduce((accumulator,currentValue) => accumulator + currentValue,0);
   
}
function filtrarPares(array)//ok
 {
    return array.filter((number) => number %2 ===0);
}
module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};