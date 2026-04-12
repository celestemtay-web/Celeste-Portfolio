 /*
For this exercise, I tried using stochastic techiniques to create small animations to a graphic design. 
I decided to use this technique as I found the grainy quality to be very reminiscent of risograph or screen printing. 
I wanted to hence achieve a similar effect by playing with overlap, density, and fading. 

For the background, I applied a Gaussian distribution to scatter orange points. 
For the pink and teal circles, I decided to use colours found in actual risograph printing. I used biased random distribitions.
To create a very dense circle with intense colours, I set i<50,000 However, this made phoneix code very laggy, as I was drawing 50,000 points per frame.  
The teal circles used varying biases to create vertically layered, semi-transparent shapes. Using the circles, I created a gradient from pink to teal. 

For the rotated purple square, I added positional biases, with a tilted effect. This made the square look like it was fading outwards.

Finally, for the blue wave at the bottom, I used a cosine function combined with random displacement.
This created a thin wavy line, that added asymmetrical balance to the composition.  

Overall, I was very surprised at the effectiveness of stochastic techiniques to create visual texture and interest and I would definitely use this method for graphic design projects and many other things in the future. 
*/


function setup() {
    createCanvas(700, 700);
    frameRate(30);
    noFill();
}

function draw() {
    background(245, 245, 245);

    // background
    stroke(255,125,41);
    var standardDeviation = 500;
    for (var i = 1; i < 50000; i++) {
        var backDist = randomGaussian(0, standardDeviation);
        var b = createVector(backDist, random(-height, height));
        point(b.x, b.y);
    }

     //circle pink 
    push();
    stroke(255, 72, 176);
    translate(width / 3, height / 2);
    for (var i = 0; i <50000; i++) {
        var cirDist = (max(random(1, 0.2), random(0, 1.4)) * width) / 10;
        var angle = random(0, PI * 5);
        var c = createVector(cos(angle), sin(angle));
        c.mult(cirDist);
        point(c.x, c.y);
    }
    pop();
    
     //circle teal
    push();
    stroke(0,131,138 );
    translate(width / 3, height / 1.5);
    for (var i = 0; i < 75000; i++) {
        var cirDist = (max(random(0, 1.4), random(0,2)) * width) / 10;
        var angle = random(0, PI * 2);
        var c = createVector(cos(angle), sin(angle));
        c.mult(cirDist);
        point(c.x, c.y);
    }
    pop();
    
     //circle top
    push();
    stroke(255, 72, 176);
    translate(width / 3, height / 3.5);
    for (var i = 0; i < 10000; i++) {
        var cirDist = (max(random(0, 1), random(0, 1)) * width) / 10;
        var angle = random(0, PI * 5);
        var c = createVector(cos(angle), sin(angle));
        c.mult(cirDist);
        point(c.x, c.y);
    }
    pop();
    
    //circle teal bottom 
    push();
    stroke(0,131,138);
    translate(width / 3, height / 1.1);
    for (var i = 0; i < 50000; i++) {
        var cirDist = (max(random(1, 2), random(0, 3)) * width) / 10;
        var angle = random(0, PI * 5);
        var c = createVector(cos(angle), sin(angle));
        c.mult(cirDist);
        point(c.x, c.y);
    }
    pop();
    

    // orange bottom line
    push();
    stroke(255, 125, 41);
    for (var i = 5; i < 10000; i++) {
        var lineX = random(700, 350);
        var lineY = random(350 - 100, 320 + 10);
        point(lineX, lineY);
    }
    pop();

    
    
    // roatated square
    push();
    stroke(255, 125, 41);
    for (var i = 0; i < 5000; i++) {
        var sqX = random(100, 250);
        var sqY = random(80, 230);
        push();
        rotate(-PI / 4);
        point(sqX, sqY);
        pop();
    }

    //rectangle 
    push();
     stroke(0, 169, 92);
    for (var i = 0; i < 5000; i++) {
        var sqX = random(10, 1040);
        var sqY = random(50, 245);
        push();
        rotate(-PI / 0);
        point(sqX, sqY);
        pop();
    }
    
    // purple chunk
    stroke(126, 72, 115);
    for (var i = 0; i < 5000; i++) {
        var sqBX = min(random(30, 300), random(30, 300));
        var sqBY = max(random(500, 100), random(50, 10));
        push();
        rotate(-PI / 8);
        point(sqBX, sqBY);
        pop();
    }

    // wave taller
    push();
    stroke(0, 120, 191,50);
    translate(0, height / 1.4);
    var amp = 60;
    for (var i = 0; i < 5000; i++) {
        var waveX = random(8, width);
        var waveY = cos((waveX / width) * PI * 4) * amp;
        waveY += random(-8, 8);
        point(waveX, waveY);
    }
    pop();

    // wave blue
    push();
    stroke(0, 120, 191);
    translate(0, height / 1);
    var amp = 20;
    for (var i = 0; i < 5000; i++) {
        var waveX = random(0, width);
        var waveY = cos((waveX / width) * PI * 6) * amp;
        waveY += random(-15, 15);
        point(waveX, waveY);
    }
    pop();
}