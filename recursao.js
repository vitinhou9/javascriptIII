
function somaNumeros(n) //ok
{
if (n==1)
{
   return 1;
  }
else{
  return n +somaNumeros(n-1);
}
}
function ehPar(number) //ok
{
if (number % 2 == 0){
  return (true)
}else {
  return(false)
}
}

function fibonacci(n) {
  if(n<=1){
    return n;
  }
  else{
    return fibonacci(n - 2) + fibonacci (n-1)
  }

}
module.exports = { somaNumeros, ehPar, fibonacci };