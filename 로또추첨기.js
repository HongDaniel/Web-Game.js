var 후보군=Array(45).fill().map(function(요소,인덱스){
  return 인덱스+1;
})
//console.log(후보군)

var 셔플=[]

while(후보군.length>0){
  var 입력값=후보군.splice(Math.random()*후보군.length,1)[0]; //1개를 자른다
  셔플.push(입력값);
}
console.log(셔플)

var 보너스값 = 셔플[셔플.length-1];
var 당첨숫자=셔플.slice(0,6);

console.log(당첨숫자)
console.log(보너스값)

var 결과창=document.querySelector('#결과창');

function 공스타일(숫자,결과창){
  var 공=document.createElement('div');
  공.textContent=숫자;
  공.style.display='inline-block';
  공.style.border='2px solid black';
  공.style.borderRadius='20px';
  공.style.width='25px';
  공.style.height='25px';
  공.style.textAlign='center';
  공.style.marginRight= '10px';

  var 배경색;
  if(숫자<=10) 배경색 = 'red';
  else if (숫자<=20) 배경색 = 'orange';
  else if (숫자<=30) 배경색 = 'yellow';
  else if (숫자<=40) 배경색 = 'green';
  else  배경색 = 'blue'//
  공.style.background = 배경색;
  결과창.appendChild(공);
} 


setTimeout(function (){
  공스타일(당첨숫자[0],결과창)
},1000);
setTimeout(function (){
  공스타일(당첨숫자[1],결과창)
},2000);
setTimeout(function (){
  공스타일(당첨숫자[2],결과창)
},3000);
setTimeout(function (){
  공스타일(당첨숫자[3],결과창)
},4000);
setTimeout(function (){
  공스타일(당첨숫자[4],결과창)
},5000);
setTimeout(function (){
  공스타일(당첨숫자[5],결과창)
},6000);
//////////////////////////////////////////////////////
setTimeout(function (){
  var 보너스 = document.querySelector('#보너스');
  var word=document.createElement('div');
  word.textContent='보너스!';
  보너스.appendChild(word);
},6500);
var 보너스칸=document.querySelector('#보너스공');
setTimeout(function (){
  공스타일(보너스값,보너스칸);
},7000);

