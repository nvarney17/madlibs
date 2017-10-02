//initialize variables
var sentence = [];
var replacements = [];
var index = 0;
//initialize users
alert ("Filler, Go Away.");
alert ("Enter after each word. End with Shift + 6 (^)");
//fill sentence
populate(index, sentence, "word");
alert (sentence);
index = 0;
//specify positions
populate(index,replacements, "position");
alert (replacements);
replace(index, sentence, replacements, "part of speech");

alert (sentence);


function populate(sindex,sarray,label) {
	do {
		sarray[sindex] = prompt("Next "+label+"?");
		sindex = sindex + 1;
	}
	while (sarray[sindex - 1] != "^");
	console.log(sarray);
	sarray.splice(-1,1);
	return sarray;
}

function replace(sindex, sarray, rarray, label) {
	for (sindex = 0; sindex < rarray.length; sindex++) {
		sarray[rarray[sindex]] = prompt("Next "+label+"?");
	}
	return sarray;
}
