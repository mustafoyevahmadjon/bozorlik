// let book = {
//     title: "Shaytanat",
//     author: "Tohir Malik",
//     price: 300,
//     page: 100,
//     id: 7,
//     demo: function(){
//         alert("Assalom Xush keldiz");
//     }
// }
// document.write(book.demo());
// document.write(book.page);

// let txt = document.querySelector('h1');
// let elbtn = document.querySelector('.btn');
// let eltext = document.getElementById('text');
// console.log(txt);
// console.log(elbtn);
// console.log(eltext);
let elbtnleft = document.querySelector('.btn_left');
let elbtnright = document.querySelector('.btn_right');
let proname = document.querySelector('.product_name');
let proremov = document.querySelector('.product_remove');
let elbtnremov = document.querySelector('.btn_remove');
let list = document.querySelector('.product-list');
let bozorlik = [];

// 36 -DARS 12.11.2021 14:11;
elbtnleft.addEventListener('click', function () { // boshidan qoshish
        if (proname.value) {
                if (bozorlik.indexOf(proname.value) == -1) {
                        bozorlik.unshift(proname.value); // boshidan qoshadi
                        list.innerHTML = bozorlik.join("<br>") // ekranga chiqaradi
                        proname.value = "";
                        proname.focus();
                } else { // maxsulot bolsa bor deydi
                        alert("bunday maxsulot bor")
                }

        } else {
                alert("maxsulot kiriting ")
        }
});
// oxiridan
elbtnright.addEventListener('click', function () { // oxiridan qoshish
        if (proname.value) {
                if (bozorlik.indexOf(proname.value) == -1) {
                        bozorlik.push(proname.value); // boshidan qoshadi
                        list.innerHTML = bozorlik.join("<br>") // ekranga chiqaradi
                        proname.value = "";
                        proname.focus();
                } else { // maxsulot bolsa bor deydi
                        alert("bunday maxsulot bor")
                }

        } 
        else {
                alert("maxsulot kiriting ")
        }
});
// delete
elbtnremov.addEventListener("click",function(){
        if(proremov.value){
                var indexRemov = parseInt(proremov.value);
                if(indexRemov >= 0 && indexRemov < bozorlik.length){
                        bozorlik.splice(indexRemov,1);
                        list.innerHTML = bozorlik.join("<br>");
                        proremov.value = "";
                        proremov.focus();
                }
        }else{
                alert("maxsulot indeksini kiriting: ");
        }
});


// list.style.background = "black";
list.style.color = "#fff";
// list.style.padding = "20px";
