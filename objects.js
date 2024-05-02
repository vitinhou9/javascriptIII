// Calcula o perímetro e a área de um retângulo
const result = {
    perimetro:'',
    area:''
}
function calcularRetangulo(retangulo)//ok
 {
    result.area = (retangulo.largura*retangulo.altura);
    result.perimetro = (retangulo.altura *2 + retangulo.largura*2);
    return result;
}
function ehAdulto(pessoa) //ok
{
  if(pessoa.idade>18){
    return true;
  }
  else{
    return false;
  }
}
function concatenaValores(obj) //ok
{
    return `${obj.nome} ${obj.idade} ${obj.cidade}`
}
module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
