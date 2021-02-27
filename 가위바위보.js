var 이미지좌표 = 0;
var dic1 = {
  가위 : '-142px',
  바위 : '-0',
  보 : '-284px'
};

var dic2 ={
  '-142px':  '가위',
  '-0': '바위',
   '-284px': '보' 
}

console.log(Object.entries(dic1));

var 찾기 = Object.entries(dic1).findIndex(function(v)
{
console.log(v);
//return v[0];
});

var 인터벌;

function interval()
{
  인터벌= setInterval(function() {
  if(이미지좌표===dic1.가위)
  {
    이미지좌표 = dic1.바위;
  }
  else if(이미지좌표===dic1.바위)
  {
    이미지좌표 = dic1.보;
  }
  else
  {
    이미지좌표 = dic1.가위;
  }
  document.querySelector('#computer').style.background =
  'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' + 이미지좌표 + ' 0';
  },100);
}


interval();

document.querySelectorAll('.btn').forEach(function(b)
{
    b.addEventListener('click',function()
    {
      clearInterval(인터벌); //화면을 멈춘다.

      setTimeout(function()
      {
        interval();
        결과창.textContent = " ";  },1500  );


      var 나의선택=b.textContent;
      var 컴퓨터선택 = dic2[이미지좌표];
    console.log(나의선택, 컴퓨터선택);

    var 점수표 = 
    {
      '가위': 1,
      '바위': 0,
      '보': -1
    }

    var 나의점수 = 점수표[나의선택];
    var 컴퓨터의점수 = 점수표[컴퓨터선택];
    var 결과창 = document.querySelector('#결과창');

    if(나의점수-컴퓨터의점수===0)
    {

    결과창.textContent='비겼습니다!';

    }
    else if(나의점수-컴퓨터의점수===2||
      점수표[나의선택]-컴퓨터의점수===-1)
      {
        결과창.textContent='이겼습니다!!';
      }
      else
      {
        결과창.textContent='졌습니다ㅜㅜ';
      }
    }
    );
   


});