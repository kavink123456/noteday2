const button = document.querySelector(".addNote");
const desc = document.querySelector("#note");
const title = document.querySelector("#title");
const notesContainer = document.querySelector(".notes-container");
let notes = [];

button.addEventListener("click", (e) => {
   const titleText = title.value;
   const description = desc.value;
   const target = e.target;

   if (titleText.trim() && description.trim()) {
     notes.push({ title: titleText, description });
   }

   viewNotes();
 });

 const viewNotes = () => {
   notesContainer.innerHTML = "";
   if (notes.length) {
     notes.forEach((note, index) => {
       notesContainer.innerHTML += `<div class="note">
     <h2>${note.title}</h2>
     <p>${note.description}</p>
     <button id="${index}" onClick="deleteNode(this.id)">Delete</button>
   </div>` 
     
     });
   }
 };

 const deleteNode = (elem) => {
   notes.splice(elem, 1);
   viewNotes();
 };