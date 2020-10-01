function createParagraph(){
    //create space
    let para = document.createElement('p');
    //create that I clicked the button 
    para.textContent = 'You clicked the button!'; 
    //Append the button in the browser
    document.body.appendChild(para); 
}

const buttons = document.querySelectorAll('button'); 

for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click',createParagraph)
}
//event listener
//listens to browsers DOMCONTENTLoaded
//defer attribute solved the problem for us 
//<script src="script.js" defer></script>
//Game data files to load
//But to display the front page first we use async
//async and defer both instruct the document to down
/*
    Select random number between 1 and 100 

    loop 10 times{
        
        let userchoose something; 

        if(something === a){
            The guess was correct
            Restart the game
        }
        else if(something<50){
            The guess was too low

        }
        else{
            The guess was too high
        }
        
        Go back to loop after 10 times 
    }
*/