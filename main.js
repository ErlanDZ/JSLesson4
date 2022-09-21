
 var coun = document.getElementById("count");
 var blueScore = 0;


 document.getElementById('btn_plus').addEventListener('click', function(){
   
    blueScore++;
    coun.innerHTML = blueScore;
 });

 document.getElementById('btn_minus').addEventListener('click', function(){
   
    blueScore--;
    coun.innerHTML = blueScore;
 });