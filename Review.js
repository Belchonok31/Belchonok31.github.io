const container=document.querySelector(".slaider");
const box=document.querySelectorAll(".box");
const box_start=document.querySelector(".box_start");
const answer_1=document.querySelectorAll("#answer1");
const answer_2=document.querySelectorAll("#answer2");
const answer_3=document.querySelectorAll("#answer3");
var chet=0;
var chet_box=0;
var flag=false;
var flag_box=false;
var massiv_answer=new Array(3);
massiv_answer[0]=answer_1;
massiv_answer[1]=answer_2;
massiv_answer[2]=answer_3;
container.addEventListener("click",function(event){
    console.log(chet);
    if(event.target.closest("DIV") && event.target.closest("DIV").className=="answer"){
        let number=Number(event.target.id[6]);
        console.log(event.target.id[6]);
        flag=true;
        massiv_answer[number-1][chet].classList.add("active");
        for(let i=0; i<massiv_answer.length; i++){
            if((i!=number-1) && (massiv_answer[i][chet].classList.contains("active"))){
              massiv_answer[i][chet].classList.remove("active");
            }
        }
    }
    else if(event.target.closest("DIV") && event.target.closest("DIV").className=="label"){
        if(flag==true){
            if(flag_box==true){
              box[chet_box].classList.add("passive");
              chet_box++;
              chet++;
              flag=false;
              if(chet_box>=2){
                let part=document.querySelector(".finally");
                part.classList.add("boom");
              }
              else{
                box[chet_box].classList.add("active");
              }
            }
            else{
              box_start.classList.add("passive");
              flag=false;
              box[chet_box].classList.add("active");
              flag_box=true;
              chet++;
            }
        }
        else{
          if(flag_box==true){
            box[chet_box].classList.add("dance");
            let timer=setTimeout(()=>{box[chet_box].classList.remove("dance");},300);
          }
          else{
            box_start.classList.add("dance");
            let timer=setTimeout(()=>{box_start.classList.remove("dance");},300);
          }
        }
    }
});