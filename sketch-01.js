 const canvasSketch = require('canvas-sketch');






var ws = null; 				// objet websocket
var port = 54321; 			// port interne de communication (le même que celui de PureData)
var socket = "puredata";	// le nom du socket

let touche;

// message dans la console du navigateur
console.log( "Trying to open a websocket to PureData ..." );

// creation du client via un websocket
ws = new WebSocket("ws://localhost:"+port);
  
// affiche un message d'erreur dans la console
// http://stackoverflow.com/questions/18803971/websocket-onerror-how-to-read-error-description#18804298
ws.onerror = function(event) {
  console.log( "WebSocket error.", e.message );
};

// affiche les messages du serveur (PureData)
ws.onmessage = function(event) {
  console.log(event.data);
  touche = event.data;
  checkTouche(touche);
};





const settings = {
  dimensions : 'A5',
  pixelsPerInch: 300,
  orientation : 'landscape',
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#f72585'; //fushia
    context.fillRect(0, 0, width, height);

    for (let i=0; i<24; i++){
      for (let j=0; j<17; j++) {
        // const w = 100;
        // const h = 100;
        // let gap = 0;
        // let x = 40 + (w * i);
        // let y = 25 + (w * j);
        const w = 104;
        const h = 104;
        let x = (w * i);
        let y = (w * j);
        context.beginPath();

        if (i>5 && Math.random()<0.3 && i<15){ //Math.random is saying that this condition is true 30% of the time
          context.fillStyle = '#b5179e'; //mauve clair 
          context.fillRect(x+20, y+20, w-40, h-40);
        }

        
        if (Math.random()> 0.5) {
          context.fillStyle = '#7209b7'; //mauve1
          context.fillRect(x, y, w, h);
        }
        

        if (Math.random()> 0.5) {
          context.fillStyle = '#560bad'; //mauve2
          context.fillRect(x, y, w, h);
        }

        if (Math.random()> 0.64) {
          context.fillStyle = '#480ca8'; //mauve3
          context.fillRect(x, y, w, h);
        }

        
        if (Math.random()> 0.58) {
          context.fillStyle = '#3a0ca3'; //bleu fonce
          context.fillRect(x, y, w, h);
        }

        if (Math.random()> 0.8) {
          context.fillStyle = '#3f37c9'; //bleu
          context.fillRect(x, y, w, h);
        }

        if (Math.random()> 0.7) {
          context.fillStyle = '#4361ee'; //bleu1
          context.fillRect(x, y, w, h);
        }

        if (Math.random()> 0.8) {
          context.fillStyle = '#4895ef'; //bleu2
          context.fillRect(x, y, w, h);
        }
        
        if (Math.random()> 0.83) {
          context.fillStyle = '#4cc9f0'; //aqua
          context.fillRect(x, y, w, h);
        }


        if (Math.random()> 0.95) {
          context.fillStyle = '#48bfe3'; //aqua1
          context.fillRect(x, y, w, h);
        }

        if (i>=9 && Math.random()<0.1 && i<=16){ 
          context.fillStyle = '#ea84c9'; //aqua mauve 
          context.fillRect(x+15, y+15, w-30, h-30);
        }


        if (i>=15 && Math.random()<0.2 && i<=20){ 
          context.fillStyle = '#f1f1f1'; //offwhite 
          //context.rotate(10 * Math.PI / 10);
          context.fillRect(x+20, y+20, w-40, h-40);
        }

        if (i>0 && Math.random()<0.1 && i<8){ 
          context.fillStyle = '#f72585'; //fushia 
          context.fillRect(x+15, y+15, w-30, h-30);
        }

        

        if (i>=0 && Math.random()<0.1 && i<=23){ 
          context.fillStyle = '#80ffdb'; //aqua2  
          //context.rotate(20 * Math.PI / 180);
          context.fillRect(x+30, y+30, w-60, h-60);
        }

        if (i>12 && Math.random()<0.3 && i<20){ 
          context.fillStyle = '#f99cd4'; //pink 
          context.fillRect(x+20, y+20, w-40, h-40);
        }

        if (i>=0 && Math.random()<0.1 && i<=23){ 
          context.fillStyle = '#4361ee'; //bleu1  
          context.fillRect(x+14.5, y+30, w-30, h-60);
        }

        if (i>=0 && Math.random()<0.1 && i<=12){ 
          
          context.lineWidth = 5;
          context.arc(x+51, y+52, 20, 0, 2 * Math.PI);
          context.fillStyle = 'blue'; 
          context.fill();
        }

        if (i>=0 && Math.random()<0.2 && i<=23){ 
          context.lineWidth = 5;
          context.arc(x+51, y+52, 20, 0, 2 * Math.PI);
          context.fillStyle = '#fff0f3'; //white
          context.fill();
        }

        if (i>=6 && Math.random()<0.2 && i<=15){ 
          context.fillStyle = '#FED049'; //orange 
          context.fillRect(x+30, y+30, w-60, h-60);
        }

        if (i>=7 && Math.random()<0.07 && i<=19){ 
          
          context.lineWidth = 5;
          context.arc(x+52, y+52, 30, 0, 2 * Math.PI);
          context.fillStyle = '#F0FF42'; //yellow pastel 
          context.fill();
        }

        if (i>=7 && Math.random()<0.07 && i<=19){ 
          context.fillStyle = '#f72585'; //fushia
          context.fillRect(x+30, y+20, w-60, h-40);
        }





      

       
    


        

      }
      
    }
  };
};

canvasSketch(sketch, settings);

function checkTouche(){
  if(touche == 97){
    console.log('reloading');
    window.location.reload();
  }
}

