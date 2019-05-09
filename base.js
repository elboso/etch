
// consts
const mainGrid = document.querySelector('.container');
const restartButton = document.querySelector('#erase');
const initialSize = 16;
let cases = document.querySelectorAll('.case');

// main grid
function deleteChild() {
    //e.firstElementChild can be used.
    let child = mainGrid.lastElementChild;
    while (child) {
        mainGrid.removeChild(child);
        child = mainGrid.lastElementChild;
    };
};

function coloring (){
  cases.forEach((box)=> {
    box.addEventListener('mouseover',()=> {
      box.style.opacity +=0.1});
  });
};

function setup (size) {
  deleteChild();
  let bloc = document.createElement('div');
  for (let i = size*size ; i > 0; i--) {
    bloc = document.createElement('div');
    bloc.classList.add('case');
    mainGrid.appendChild(bloc);
  };
  mainGrid.style.gridTemplateColumns = (`repeat(${size}, 1fr)`);
  mainGrid.style.gridTemplateRows = (`repeat(${size}, 1fr)`);
  cases = document.querySelectorAll('.case');
  console.log(cases);
  coloring();

};

setup(initialSize);

// following setup
function clear () {
  cases.forEach((box)=> {
    box.classList.remove('scratch');
  });
  console.log('frak');
};

function resize () {
  const gridSide = prompt('Please select a new grid size', 16);
  // if (typeof(gridSide)!=='number') return;
  setup(gridSide);
};

restartButton.addEventListener('click', clear);
restartButton.addEventListener('click', resize);
