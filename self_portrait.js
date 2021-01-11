//initializing variables
let backgroundColor = null;
let styleNumber= 2;
let purple = null;
let lightpeach= null;
let lightpeachMed= null;
let lightpeachFaded= null;
let lightpeachVeryFaded= null;
let lightblue= null;
let lightblueMed= null;
let lightblueFaded= null;
let lightblueVeryFaded= null;

// this function defines the colors and draws the default drawing
function setup() {
createCanvas(500, 500);
// defining colors
lightpeach = color(255, 164, 133);
lightblueVeryFaded = color(131,201,209, 60);
lightblueFaded = color(131,201,209, 80);
lightblueMed = color(131,201,209, 150);
lightblue = color(131,201,209);
lightpeach = color(255, 164, 133);
lightpeachFaded = color(255,164,133, 80);
lightpeachVeryFaded = color(255,164,133, 60);
lightpeachMed = color(255,164,133, 150);
purple= color(220, 200, 201);

//this sets up the default drawing
backgroundColor = lightblue;
hair= lightpeachMed;
shoulders= lightpeach;
neck= purple;
shadow= lightpeachFaded;
face= purple;
eye=lightpeach;
underEye= lightpeachFaded;
eyeShadow= lightpeachMed;
faceShadow= lightpeachVeryFaded;
nose= lightpeach;
mouth= lightpeach;
glasses= lightpeach;
}

//on clicking the mouse, the drawing color values change
function mousePressed() {
// if the style is equal to 1 it draws with values defined here
if (styleNumber ==1 ) {
  backgroundColor = lightblue;
  hair= lightpeachMed;
  shoulders= lightpeach;
  neck= purple;
  shadow= lightpeachFaded;
  face= purple;
  eye=lightpeach;
  underEye= lightpeachFaded;
  eyeShadow= lightpeachMed;
  faceShadow= lightpeachVeryFaded;
  nose= lightpeach;
  mouth= lightpeach;
  glasses= lightpeach;
  redraw();
  //print style number to check that it alternates correctly
  //print(styleNumber);
  //after drawing, it sets the style to sytle 2
  styleNumber = 2;
}
// if the style isn't style 1, the following values are used
else{
  backgroundColor = purple;
  hair= lightblueMed;
  shoulders= lightblue;
  neck= lightpeach
  shadow= lightblueFaded
  face= lightpeach
  eye=lightblue
  underEye= lightblueFaded
  eyeShadow= lightblueMed
  faceShadow= lightblueVeryFaded
  nose= lightblue
  mouth= lightblue
  glasses= lightblue
  // p5js is constantly drawing, 
  //so doesn't work to call draw again
  //hence, redraw
  redraw()
  //print style number to check that it alternates correctly
  //print(styleNumber);
  //after drawing, the style number is set to 1
  styleNumber = 1;
}
}

function draw() {
//first the background color is drawn 
//based on the background color of the style
background(backgroundColor);

//the following sets the vertices for the drawing polygons

// hair
fill(hair);
noStroke();
beginShape();
vertex(279,277);
vertex(278,306);
vertex(276,316);
vertex(277,322);
vertex(289,330);
vertex(292,315);
vertex(302,313);
vertex(309,306);
vertex(319,311);
vertex(323,287);
vertex(327,245);
vertex(322,187);
vertex(317,165);
vertex(305,133);
vertex(282,108);
vertex(256,101);
vertex(233,99);
vertex(210,100);
vertex(191,106);
vertex(182,112);
vertex(171,119);
vertex(163,142);
vertex(156,164);
vertex(153,204);
vertex(150,233);
vertex(150,270);
vertex(144,294);
vertex(141,306);
vertex(139,317);
vertex(148,312);
vertex(151,318);
vertex(148,334);
vertex(161,329);
vertex(164,320);
vertex(172,314);
vertex(192,312);
vertex(194,297);
vertex(191,287);
vertex(186,277);
vertex(181,265);
  endShape()

 // shoulders
fill(shoulders);
noStroke();
beginShape();
vertex(274,344);
vertex(243,358);
vertex(188,356);
vertex(175,343);
vertex(152,300);
vertex(97,319);
vertex(91,324);
vertex(87,333);
vertex(80,345);
vertex(75,362);
vertex(72,370);
vertex(70,376);
vertex(67,386);
vertex(63,400);
vertex(61,407);
vertex(54,415);
vertex(57,429);
vertex(54,453);
vertex(47,485);
vertex(407,488);
vertex(406,454);
vertex(400,423);
vertex(396,402);
vertex(382,359);
vertex(355,333);
vertex(336,322);
vertex(300,316);
  endShape()

 // neck
fill(neck);
noStroke();
beginShape();
vertex(191,291);
vertex(189,301);
vertex(178,302);
vertex(165,302);
vertex(151,302);
vertex(171,339);
vertex(184,355);
vertex(238,359);
vertex(274,344);
vertex(297,319);
vertex(275,317);
vertex(273,283);
vertex(265,294);
vertex(250,306);
vertex(241,310);
vertex(223,312);
vertex(214,310);
vertex(203,304);
  endShape()


// neck shadow
fill(shadow);
noStroke();
beginShape();
vertex(190,284);
vertex(191,303);
vertex(185,310);
vertex(171,313);
vertex(163,316);
vertex(162,329);
vertex(172,329);
vertex(181,327);
vertex(201,326);
vertex(216,322);
vertex(231,319);
vertex(245,313);
vertex(253,310);
vertex(260,309);
vertex(265,313);
vertex(264,324);
vertex(268,328);
vertex(278,325);
vertex(283,311);
vertex(279,296);
vertex(276,284);
vertex(269,287);
  endShape()


// face
fill(face);
noStroke();
beginShape();
vertex(280,280);
vertex(286,267);
vertex(292,248);
vertex(298,221);
vertex(300,191);
vertex(294,161);
vertex(284,140);
vertex(263,124);
vertex(240,121);
vertex(213,120);
vertex(194,128);
vertex(176,152);
vertex(173,170);
vertex(173,184);
vertex(173,195);
vertex(176,212);
vertex(175,222);
vertex(175,233);
vertex(175,250);
vertex(177,262);
vertex(183,277);
vertex(194,289);
vertex(211,305);
vertex(220,310);
vertex(235,311);
vertex(248,307);
  endShape()

// right eye
fill(eye);
noStroke();
beginShape();
vertex(198,213);
vertex(206,211);
vertex(204,205);
vertex(195,203);
vertex(191,207);
  endShape()

// left eye
fill(eye);
noStroke();
beginShape();
vertex(255,216);
vertex(261,211);
vertex(257,205);
vertex(249,208);
vertex();
vertex();
  endShape()

// right under eye
fill(underEye);
noStroke();
beginShape();
vertex(189,211);
vertex(196,217);
vertex(189,217);
  endShape()

// left eye shadow
fill(eyeShadow);
noStroke();
beginShape();
vertex(269,212);
vertex(257,205);
vertex(243,211); 
  endShape()

 // right eye shadow
fill(eyeShadow);
vertex(211,211);
vertex(200,205);
vertex(186,210);
vertex();
vertex();
vertex();
 endShape() 

// nose shadow
fill(shadow);
noStroke();
beginShape();
vertex(240,249);
vertex(233,250);
vertex(227,252);
vertex(219,253);
vertex(223,261);
vertex(229,258);
vertex(235,256);
  endShape()

// face shadow
fill(faceShadow);
noStroke();
beginShape();
vertex(260,125);
vertex(274,136);
vertex(285,149);
vertex(289,171);
vertex(285,187);
vertex(272,188);
vertex(260,188);
vertex(244,189);
vertex(235,196);
vertex(233,207);
vertex(242,223);
vertex(283,228);
vertex(280,241);
vertex(274,251);
vertex(267,262);
vertex(279,259);
vertex(280,268);
vertex(295,224);
vertex(302,189);
vertex(294,157);
vertex(281,126);
vertex(265,118);
vertex(235,117);
vertex(214,117);
vertex(190,127);
vertex(172,156);
vertex(171,192);
vertex(173,228);
vertex(177,256);
vertex(181,262);
vertex(186,259);
vertex(182,242);
vertex(184,225);
vertex(196,223);
vertex(216,223);
vertex(221,212);
vertex(215,189);
vertex(190,181);
vertex(186,173);
vertex(191,157);
vertex(199,138);
vertex(205,126);
vertex(228,121);
  endShape()

// nose
fill(nose);
noStroke();
beginShape();
vertex(222,260);
vertex(216,258);
vertex(212,255);
vertex(223,256);
  endShape()

// mouth shadow
fill(shadow);
noStroke();
beginShape();
vertex(253,274);
vertex(240,277);
vertex(226,280);
vertex(207,277);
vertex(200,273);
vertex(215,271);
vertex(222,274);
vertex(231,271);
  endShape()

 //mouth
fill(mouth);
noStroke();
beginShape();
vertex(247,275);
vertex(239,277);
vertex(232,278);
vertex(225,278);
vertex(218,278);
vertex(212,277);
vertex(233,274);
vertex(201,272);
vertex();
vertex();
  endShape()

//glasses
//TODO: get glasses to shake on mouse hover
noFill();
strokeWeight(3)
stroke(glasses);
beginShape();
vertex(299,198);
vertex(290,203);
vertex(274,200);
vertex(261,198);
vertex(250,200);
vertex(239,202);
vertex(229,207);
vertex(220,205);
vertex(207,198);
vertex(194,195);
vertex(179,194);
vertex(168,194);
vertex(162,193);
vertex(161,200);
vertex(167,206);
vertex(171,219);
vertex(176,228);
vertex(183,235);
vertex(194,237);
vertex(205,236);
vertex(212,232);
vertex(214,227);
vertex(218,219);
vertex(220,208);
vertex(230,209);
vertex(232,226);
vertex(237,234);
vertex(251,240);
vertex(261,240);
vertex(269,238);
vertex(275,233);
vertex(282,227);
vertex(285,218);
vertex(293,205);
vertex(286,216);
  endShape()

}