function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
return document.querySelector('.target')
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list')
  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}


function deepestChild(){
  var current = document.getElementById("grand-node");
 var next =current;
 while(next){
   current = next;
   next = current.querySelector("div")
 }
 return current;
}
