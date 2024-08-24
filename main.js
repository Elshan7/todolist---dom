let h2 = document.querySelector('h2');
h2.innerHTML = 'Form';

let li = document.querySelectorAll('ul>li');
li.forEach((item,index) => {
    if (index % 2 === 0)
    {
       return item.style.backgroundColor = 'aqua';
    }
    
else {
   return  item.style.backgroundColor = 'white';
    }
    
})