"use strict"

let sprav = prompt("Какой сайт вы хотите? 1-Справочник. 2-Сайт Визитка. 3-Соц.Сеть. 4-Магазин");

let disign = prompt("Каой дизайн? 1-Эконом. 2-Пристижный. 3-Самый лучший");

let virst = prompt("Универсальность: 1-Только для ПК. 2-Только для смартфонов. 3-Универсал");

if(sprav == 1){
    sprav = 500;
} 
if(sprav == 2){
    sprav = 550;
}
if(sprav == 3){
    sprav = 600;
}
if(sprav == 4){
    sprav = 700;
}

if(disign == 1){
    disign = 200;
}
if(disign == 2){
    disign = 500;
}
if(disign == 3){
    disign = 1000;
}

if(virst == 1){
    virst = 400;
}
if(virst == 2){
    virst = 600;
}
if(virst == 3){
    virst = 800;
}

let sum = sprav + disign + virst;
alert(sum);