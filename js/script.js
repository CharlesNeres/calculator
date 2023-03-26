let result = document.querySelector("#result");
let td = document.querySelectorAll('td');

for(let i = 0; i < td.length; i++){
    td[i].addEventListener('click', function(){
        if(td[i].textContent == '='){
            result.textContent = eval(result.textContent)
        }else if(td[i].textContent == 'C'){
            result.textContent = '';
        }else{
            result.textContent += td[i].textContent;        
        }
    })
}