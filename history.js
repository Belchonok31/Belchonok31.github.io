"use strict";
const faq=document.querySelector(".faq");
var case_number;
var text=-1;
let size=3;
faq.addEventListener('click', function(event){
    if(event.target.nodeName=="IMG" || event.target.nodeName=="P" || event.target.nodeName=="H1"){
        if(event.target.closest("DIV").className=="cont" || event.target.closest("DIV").className=="case1" || event.target.closest("DIV").className=="case2" || event.target.closest("DIV").className=="case3"){
            if(event.target.closest("DIV").className=="cont"){
                text=String(event.target.closest("DIV").id[4]);
            }
            else{
                text=String(event.target.closest("DIV").className[4]);
            }
            for(let i=1; i<4; i++){
                if(i==text){
                    console.log(text);
                    case_number= document.querySelector(`.case${text}`);
                    case_number.classList.add("active");
                }
                else{
                    case_number= document.querySelector(`.case${i}`);
                    if(case_number.classList.contains("active")){
                        case_number.classList.remove('active')
                    }
                }
            }
        }
        else{
            for(let i=1; i<4; i++){
                if(text!=-1){
                    case_number= document.querySelector(`.case${text}`);
                    case_number.classList.remove('active')
                }
                else return;
            }
        }
    }
    else{
        if(event.target.className=="cont" || event.target.className=="case" || event.target.className=="case2" || event.target.className=="case3"){
            if(event.target.className=="cont"){
                text=String(event.target.id[4]);
            }
            else{
                text=String(event.target.className[4]);
            }
            for(let i=1; i<4; i++){
                if(i==text){
                    case_number= document.querySelector(`.case${text}`);
                    case_number.classList.add("active");
                }
                else{
                    case_number= document.querySelector(`.case${i}`);
                    if(case_number.classList.contains("active")){
                        case_number.classList.remove('active')
                    }
                    
                }
            }
        }
        else{
            for(let i=1; i<4; i++){
                if(text!=-1){
                    case_number= document.querySelector(`.case${text}`);
                    case_number.classList.remove('active')
                }
                else return;
            }
        }
    }
});