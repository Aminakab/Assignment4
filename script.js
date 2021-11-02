const button = document.getElementById("#calculate");
const bid = document.getElementById("#bid");
const education = document.getElementById("#education");
const family = document.getElementById("#family");
const caste = document.getElementById("#caste");
const skills = document.getElementsByName("#checkbox1");
const age = document.getElementsByName("#radiobtn");
const reputation = document.getElementsByName("#checkbox2");
const calculate = document.getElementById("#calculate");

button.EventListener('click', () => {
    let price = Number(bid.value);
    const Edu = educationaz.value;
    const Networth = family.value;
    const Castt = caste.value;
    if(Edu=="blank" || Networth=="blank" || Castt=="blank"){
        alert("Empty fiels!!!")
    }
    else{
    
        if(Edu == "1.5"){
            price*=1.5;
        }
        else if(Edu == "1.2"){
            price*=1.2;
        }
        else if(Edu == "1.05"){
            price*=1.05;
        }
        else if(Edu == "0.9"){
            price*=0.9;
        }

        if(Networth == "2"){
            price*=2;
        }
        else if(Networth == "1.5"){
            price*=1.5;
        }
        else if(Networth == "1.2"){
            price*=1.2;
        }

if(Castt == "+100$"){
    price+=100;
}
else if(Castt == "+50$"){
    price+=50;
}
else if(Castt == "+20$"){
    price+=20;
}
else if(Castt == "+10$"){
    price+=15;
}
else if(Castt == "-50$"){
    price-=50;
}

if(skills[1].checked){
    price+=10;
}
if(skills[2].checked){
    price+=20;
}
if(skills[3].checked){
    price+=15;
}
if(skills[4].checked){
    price+=10;
}
 
 if(age[1].checked){
    price*=1.5;
}
else if(age[2].checked){
    price*=1.2;
}
else if(age[3].checked){
    price*=0.95;
}

if(reputation[1].checked){
    price*=0.85;
}
if(reputation[2].checked){
    price*=0.9;
}
if(reputation[3].checked){
    price-=20;
}


calculate.innerHTML = "total " + price.toFixed(3) + "$";
}
})

