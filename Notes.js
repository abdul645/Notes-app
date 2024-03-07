const NotesContainer=document.querySelector('.notes-container');
const createButton=document.querySelector('#btn');
const notes=document.querySelectorAll('.input-box')


function showNotes(){
    const avc=NotesContainer.innerHTML= localStorage.getItem("notes");
    console.log(avc)
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", NotesContainer.innerHTML );
}


// clicking on create notes button

createButton.addEventListener("click", () =>{
   let inputBox=document.createElement("p");//creating p tag
   let img=document.createElement("img"); //creating img tag
   inputBox.className="input-box"; //adding class in p element
   inputBox.setAttribute("contenteditable","true"); // adding attribute contenteditable true
   img.src="./delete.png";
   NotesContainer.appendChild(inputBox).appendChild(img); //display p element and image inside p element
})


// deleting notes
NotesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    //if we anything in P element it should update data in the browser
    else if(e.target.tagName === "P"){
        const notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})