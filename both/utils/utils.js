let utils = {}

utils.ObjectToArray=function(obj, keyName){
  let arr= []
  for( var key in obj){
    if(obj.hasOwnProperty(key)){
      arr.push(obj[key])
    }
  }
  return arr
}

export default utils