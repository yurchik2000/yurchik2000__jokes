let addButton = document.querySelector(".add__btn");
let jokes = document.querySelector(".jokes");
let jokesArray = [];

addButton.addEventListener('click', function(){
    console.log('Ok');
    getJoke();        
});

function createItem(content){
    let item = document.createElement("div")
    item.classList.add("item");
    let li = document.createElement("li"); 
    li.textContent = content;
    let checker = document.createElement("input"); 
    checker.type = "checkbox";
    item.append(li);
    item.append(checker);
    jokes.append(item);        
    checker.addEventListener('click', changeCheck);
    li.addEventListener('click', deleteItem);
}    

function changeCheck(){    
    if (this.checked) this.parentElement.classList.add("checked");
           else this.parentElement.classList.remove("checked");    
}

function deleteItem(){    
    console.log(this);    
    let index = jokesArray.indexOf(this.textContent);
    console.log(index);                
    console.log(jokesArray);
    jokesArray.splice(index,1);         
    console.log(jokesArray);
    this.parentElement.remove();    
}

function getJoke (){
    let jokeText = fetch('https://api.chucknorris.io/jokes/random')
    .then (function (resp) {
        return resp.json();
    })
    .then (data =>{                            
        createItem(data.value);
        jokesArray.push(data.value);
        //console.log(jokesArray);
    })
} ;

