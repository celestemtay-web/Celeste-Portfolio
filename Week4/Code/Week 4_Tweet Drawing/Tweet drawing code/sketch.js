/* DN1010 Experimental Interaction, Celeste Tay 2026
 * Week 4 - Generative Drawing
 * p5 Tweets 
 */


i=0,k=450;function setup(){createCanvas(900,900);background(45,45,45);textSize(k)}function draw(){translate(k,k);fill(i%50*k/50,80);rotate(i+=+.05);text("pop",5,40,);stroke(205,40,200);}
