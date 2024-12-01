var names=new Array();
names[0]="Saltanat";
names[1]="Abylaikhan";
names[2]="Diana";
names[3]="Bekarys";
names[4]="Zhamilya";
names[5]="Dauren";
names[6]="Aida";
names[7]="Nuradyl";
names[8]="Ayaulym";
names[9]="Anelya";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
