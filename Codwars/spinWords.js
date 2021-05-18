function spinWords(text){
  text = text.split(" ");
  for(let i in text){
    if(text[i].length>4) text[i]=text[i].split("").reverse().join("");
}
  return text.join(" ")
}