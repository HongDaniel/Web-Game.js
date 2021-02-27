
var 스크린 = document.querySelector('#screen');
var 결과창 = document.querySelector('#결과창');

//console.log(typeof(스크린));
 
var 상태 = 
{


};
var 시작시간;
var 끝시간;
var 기록 =[];
var 타임아웃;
var count =3;
스크린.addEventListener('click', function()
{
  
  if(스크린.classList.contains('waiting'))
  {
  스크린.classList.remove('waiting');
  스크린.classList.add('ready');
  스크린.textContent='초록색이 되면 클릭해주세요!';
  
  타임아웃 = setTimeout(function(){
    시작시간 = new Date();
    스크린.click();
  },
    Math.floor(Math.random()*1000)+2000); //2~3초 사이에 클릭 
    
  } 
  
  else if(스크린.classList.contains('ready'))
  {
    if(!시작시간)
    { 
      clearTimeout(타임아웃);
      스크린.classList.remove('ready');
      스크린.classList.add('waiting');
      스크린.textContent= '부정출발! 다시 실행해주세요!';
    }
    else
    {
  스크린.classList.remove('ready');
  스크린.classList.add('now');
  스크린.textContent='클릭해주새요!';
    }
}
 
else if(스크린.classList.contains('now'))
  {
     끝시간 = new Date();
    console.log((끝시간-시작시간)/1000,'초');
    기록.push(끝시간-시작시간);
  스크린.classList.remove('now');
  스크린.classList.add('waiting');
  스크린.textContent='클릭해서 실행하세요!';
  시작시간 = null;
  끝시간 = null;
  count--;
  if(count===0) 
  {
    var sum=0;
    for(var i=0;i<3;i++)
    {
      sum+=기록[i];
    }
    결과창.textContent = '평균속도 : '+ String((sum/3)/1000) + '초';
    count=3;
  }
  }
  //console.log("클릭!");
});
