const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnRgb = document.createElement('button');
const btnGray = document.createElement('button');
const btnSize = document.createElement('button');
const section = document.querySelector('.section');
const buttonsContainer = document.querySelector('.buttons');

function creatDivs(col , rows) {
    for(let i = 0;i < (col * rows); i++) {
        const div = document.createElement('div') ;
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
}

creatDivs(16,16);

function grayColor() { 
    
    const boxs = container.querySelectorAll('.box');
    btnGray.textContent = "GRAY";
    btnGray.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=> {
            let RNum = Math.floor(Math.random() * 256);
            let GrayScale = `rgb(${RNum},${RNum},${RNum})`;
            box.style.background = GrayScale;
        }));
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn');
}
grayColor();

function blackColor() { 
    
    const boxs = container.querySelectorAll('.box');;
    btnBlack.textContent = "BLACK";
    btnBlack.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=> {
            box.style.background = 'black';
        }));
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn');
}
blackColor();

function rgbColor() { 
    
    const boxs = container.querySelectorAll('.box');;
    btnRgb.textContent = "RGB";
    
    btnRgb.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=> {
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            const RGB = `rgb(${R},${G},${B})`;
            box.style.background = RGB;
        }));
    })
    buttonsContainer.appendChild(btnRgb).classList.add('btn');
}
rgbColor();

function reSet() {
    const boxs = container.querySelectorAll('.box');
    boxs.forEach(box => { box.remove(); });
}


function reSize() {
   
    btnSize.textContent = 'GRID SIZE';
    btnSize.addEventListener('click', () => {
        let user = prompt('WHAT SIZE YOU WANT YOUR GRID TO BE?');
        if(user === null || user < 1){
            reSet();
            creatDivs(16,16);
            grayColor();
            rgbColors();
            blackColor();
        } else { 
            reSet();
            creatDivs(user,user);
            grayColor();
            rgbColors();
            blackColor();
        }
    });
    buttonsContainer.appendChild(btnSize).classList.add('btn');
}
reSize();

