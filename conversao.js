
function convertToInt(st)//ok
 {
return parseInt(st)
}
function convertToString(number)//ok
 {
  return (number).toString()
}
function convertToBoolean(value)//ok
 {
    if(value==0|value=='false'){
    return Boolean(false)}
    else if (value==1|value=='true'){
        return Boolean(true)
    }   
}
module.exports = { convertToInt, convertToString, convertToBoolean };