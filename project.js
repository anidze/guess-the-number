
let secretNumber=Math.floor(Math.random() * 20)+1;
let tex2 = 20;
let highScore= 0;
document.querySelector('.checkBtn').addEventListener (
   'click',
   function(){
     const checkBtn = Number(document.querySelector('.myinp').value);
      console.log(checkBtn, typeof checkBtn);
      //if btn is zero
      if(!checkBtn){
         document.querySelector('.tex1').textContent = '❌No Number!';
         ///when number is correct
      }else if(checkBtn === secretNumber){
         document.querySelector('.tex1').textContent = '✔Correct Number!';
         document.querySelector('.secretNumber').textContent = secretNumber;
         document.body.style.backgroundColor = "green";
        if(tex2 > highScore){
          highScore = tex2;
         document.querySelector('.tex3').textContent = highScore;
        }
         ///when number is high then secret number
      }else if(checkBtn !== secretNumber){
         if(tex2 > 1){
            document.querySelector('.tex1').textContent = checkBtn > secretNumber ? '⬇ Too  High!' 
            : '⬇ Too  Low!' ;
            tex2--;
            document.querySelector('.tex2').textContent= tex2;
            
      }else{
         document.querySelector('.tex1').textContent = '🤦‍♀️You Lose The Game';
      }
   }
});
document.querySelector('.againBtn').addEventListener(
   'click', 
   function(){
      tex2 = 20;
      let secretNumber=Math.floor(Math.random() * 20)+1;
      document.querySelector('.secretNumber').textContent = '?';
      document.querySelector('.myinp').value= '';
      document.querySelector('.tex1').textContent = 'Guess The Number';
      document.querySelector('.tex2').textContent = tex2;
      
      document.body.style.backgroundColor = "black";
   }
)