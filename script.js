       
let fonts =[
['Abril Fatface', 'cursive'],
['Almendra SC', 'serif'],
['Anton', 'sans-serif'],
['Arbutus', 'serif'],
['Bagel Fat One', 'cursive'],
// ['Bungee Hairline', 'cursive'],
['Handjet', 'cursive'],
// ['Nabla', 'cursive'],
['Rubik Iso', 'cursive']
]

// random yes or no
function dichotomousVariable(){
    return (Math.random())>=0.5? true : false;
}

function nameChange(){
    // this is to make the name change
    let nameNode = document.getElementsByClassName("myName");
    let name =nameNode[0].textContent
    console.log(name)
    let newName= ''
    for(let i=0; i<name.length; i++){
        newName = newName +(dichotomousVariable()? name[i].toLowerCase() :name[i].toUpperCase())

    }
    nameNode[0].textContent = newName
    document.getElementsByClassName("myJob")[0].style.fontFamily = fonts[Math.floor(Math.random() * (fonts.length+1) )]

    

    // below is script to make job bobble
    // let 
}


setInterval(nameChange, 1000);

