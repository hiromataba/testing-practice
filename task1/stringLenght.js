const  stringLength = (text) => {
  if(text.length === 1){
    return 1
  }
  if(text.length < 10){
    return text.length
  }
  else {
    return "conditions are not met"
  }
}

module.exports = stringLength