var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
	dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);

var textCharsAfter = text.replace('Velociraptor', dinosaurUpperCased);
/*rany, to jest dla mnie totalna magia. 
Nie wiem jakim cudem udało mi się to wymyśleć ;) */
var textCharsAfter2 = textCharsAfter.substr(0,textCharsAfter.length/2);
console.log(textCharsAfter2);
