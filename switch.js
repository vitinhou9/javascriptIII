// Retorna o dia da semana correspondente a um número


function retornaDiaSemana(number) //ok
{
    switch (number){
        case (1):
            return "Domingo";
            break;
        case (2):
            return "Segunda-Feira";
            break;
        case (3):
            return "Terça-Feira";
            break;
        case (4):
            return "Quarta-feira";
            break;
        case (5):
            return "Quinta-Feira";
            break;
        case (6):
            return"Sexta-Feira";
            break;
        case (7):
            return "Sabado";
            break;
        default:
           return("Número inválido");}
}
function retornaPrecoProduto(code) //ok
{
    switch(code){
    case ("A"):
        return 10.99;
        break;
    case ("B"):
        return 5.99;
        break;
    case ("C"):
        return 7.5;
    default:
        return "Código inválido";
    } 


}
function retornaCategoriaProduto(type)//ok
 {
    switch(type){
        case "Eletrônicos":
            return "Tecnologia";
            break;
        case "Roupas":
            return "Moda";
            break;
        case "Alimentos":
            return "Alimentação";
            break;
        default:
            return "Categoria desconhecida";
    }
}
module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };