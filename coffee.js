let coffeemenu = document.getElementsByClassName('coffeemenu')[0];
let coffees = [
    {
        name:"Coretto",
        smallprice:"80",
        midprice:'130',
        largeprice:"190",
        imgsrc:"https://images.everydayhealth.com/images/heart-health/coffee-and-your-heart-stimulant-or-stressor-alt-722x406.jpg?sfvrsn=5f221870_0"
    },
    {
        name:"Cioccolato-macchiato",
        smallprice:"50",
        midprice:'100',
        largeprice:"130",
        imgsrc:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg"
    },
    {
        name:"Coretto-machachino",
        smallprice:"30",
        midprice:'70',
        largeprice:"90",
        imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqjRfPDXy81k3OUoyZ9oVanZFcoae7QFyljXKmHJdYe5G9JkqxZi8fhJ-z2lyiuAQKNPM&usqp=CAU"
    },
    {
        name:"Caramel Macchiatto",
        smallprice:"100",
        midprice:'150',
        largeprice:"190",
        imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6L5fPbW4gEpI91p5RVnml3yHrwikAd7XyFzbQ5u54uNmB2nhdlBaQKJpR_jN1ZK2eOw&usqp=CAU"
    },
    {
        name:"Irish Coffee",
        smallprice:"120",
        midprice:'180',
        largeprice:"210",
        imgsrc:"https://www.incimages.com/uploaded_files/image/1920x1080/getty_500740897_200013331653767347294_333325.jpg"
    },
    {
        name:"Americano",
        smallprice:"10",
        midprice:'20',
        largeprice:"30",
        imgsrc:"https://static.toiimg.com/thumb/84855613.cms?width=680&height=512&imgsize=230846"
    }
]

let html='';

coffees.forEach((element,index)=>{
    html=html+  `<div class="coffee" id=${index}>
    <div class="rel"><img src=${element.imgsrc}>
    <div class="blackdiv">
    <img class="mug" src="./images/mug.png">
    </div>
    </div>
    <p class="coffeename">${element.name}</p>
    <p>Rs <span>${element.smallprice}</span></p>
    <div class="flexsize"><p class="sizep">Size : 
    <form><p>
    <input type="radio" value="small" id="small${index}" onchange="pricefunc(event)" name="size${index}"><label for="small${index}">Small</label>
    <input type="radio" value="medium" id="mid${index}" onchange="pricefunc(event)" name="size${index}"><label for="mid${index}">Medium</label>
    <input type="radio" value="large" id="large${index}" onchange="pricefunc(event)" name="size${index}"><label for="large${index}">Large</label>
    </p></form>
    </div>
    <button onclick="buyfunc()"class="buybutton">Buy</button>
    <div class="flexstar nonestar">
    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
    </div>
    <div class="fstardiv flexstar">
    <i class="fas fstar fa-star" ></i><i class="fas fstar fa-star" ></i><i class="fas fstar fa-star"></i><i class="fas fstar fa-star"></i><i fstar class="fas fstar fa-star"></i></div>
    </div>`
})
coffeemenu.innerHTML=html;




let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    alert("We got your message.Will contact you soon");
})

let pricefunc = (e) => {
let coffee = e.target.parentElement.parentElement.parentElement.parentElement;
let small = coffee.getElementsByTagName('input')[0];
let mid = coffee.getElementsByTagName('input')[1];
let large = coffee.getElementsByTagName('input')[2];
let price = coffee.getElementsByTagName('span')[0];
let id = coffee.id;
if(small.checked){
  price.innerText=coffees[id].smallprice;

}
else if(mid.checked){
    price.innerText=coffees[id].midprice;
}
else if(large.checked){
    price.innerText=coffees[id].largeprice;
}
else{
    alert("Please select a size")
}
}


let buyfunc=()=>{
    alert("We got your order.We will get that for you in minutes")
}

let coffee= document.getElementsByClassName('coffee');
Array.from(coffee).forEach((el)=>{
            el.addEventListener("mouseover",()=>{
                let anime = el.getElementsByClassName("blackdiv")[0];
                anime.style.display="flex"
                let p = el.getElementsByTagName('p');
                Array.from(p).forEach((ele)=>{ele.style.color="#c7a17a"})
                let stars = el.getElementsByClassName('fstar');
                Array.from(stars).forEach((ele)=>{
                    ele.style.color="white"
                    })
})  
let stars = el.getElementsByClassName('fstar');
let starsarray=Array.from(stars);
starsarray.forEach((elm,index)=>{
    elm.addEventListener('click',()=>{
        el.getElementsByClassName("fstardiv")[0].style.display="none";

    let nstar= el.getElementsByClassName("nonestar")[0];
    nstar.style.display="block";
    let nstars = nstar.getElementsByTagName('i');

let ratedstar= Array.from(nstars);
let s;
console.log(ratedstar);
console.log(index);
for(s=index+1;s<ratedstar.length;s++){
    console.log(s);
    ratedstar[s].style.color="white";
}
    })
})
})


Array.from(coffee).forEach((el)=>{
    el.addEventListener("mouseout",()=>{
        let anime = el.getElementsByClassName("blackdiv")[0];
        anime.style.display="none"
        let p = el.getElementsByTagName('p');
         Array.from(p).forEach((ele)=>{ele.style.color="white"})
         let stars = el.getElementsByClassName('fstar');
         Array.from(stars).forEach((ele)=>{ele.style.color="black"});

})  
})
