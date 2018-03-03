//variables
const counter = document.querySelector('h2');
const person = document.querySelector('input[type=text]');
const amount = document.querySelector('input[type=number]');
const add = document.querySelector('button');
const list = document.querySelector('ul');

let listData = [];

function getTotal() {
    let total = 0;
    listData.forEach(item=>{
        total+=item.amount;
    })
    counter.textContent=total+' $';
}

add.addEventListener('click',function () {
    var id = _.uniqueId();
    const html = `<li data-id="${id}">${person.value} $${amount.value}<span>X</span></li>`
    list.insertAdjacentHTML('afterbegin',html);

    listData.push({
        id:id,
        person:person.value,
        amount:parseFloat(amount.value),
    });

    getTotal();
    console.log(listData);

    person.value='';
    amount.value='';
});

list.addEventListener('click',function (e) {
    if(e.target.matches('span')){
        list.removeChild(e.target.parentNode);
    }
    const remove = e.target.parentNode.dataset.id;

    let sorted = listData.filter(item=>item.id!=remove);
    listData=sorted;
    getTotal();
});


