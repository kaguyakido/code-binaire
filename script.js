// Variables globales
var oCookie = document.getElementById('cookie');
var oCout = document.getElementById('cout');
var oTous = document.getElementById('tous');
var oWS = document.querySelector('#webstorage');

// Variables globales - Slider
var aImg = new Array('img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg',
		'img/slide4.jpg', 'img/slide5.jpg', 'img/slide6.jpg');
var oImg = document.getElementById('diapo').firstChild;
var iPos = 0;

// Fonctions événementielles
oTous.onclick = function() {
	var aChk = document.getElementById('repas').getElementsByTagName('input');
	for (var i = 0; i < aChk.length; i++) {
		aChk[i].checked = oTous.checked;
	}
};

window.onload = function() {
	afficherListe();
	slider();
};

oCout.onchange = function() {
	document.getElementById('coutVal').innerHTML = oCout.value;
};

oCookie.onclick = function() {
	console.log('Gaaaaaaaaateau');
	document.getElementById('nom').focus();
	// Boucle sur tous les INPUT
	var aInput = document.getElementById('frmRecette')
			.getElementsByTagName('*');
	for (var i = 0; i < aInput.length; i++) {
		if (aInput[i].name != undefined) {
			createCookie(aInput[i].name, aInput[i].value, 7);
		}
	}
};

oWS.onclick = function() {
	var aInput = document.querySelectorAll('form#frmRecette>div>*[name]');
	for (i = 0; i < aInput.length; i++) {
		localStorage.setItem(aInput[i].name, aInput[i].value);
	}
};

// Fonctions globales
afficherListe = function() {
	var liste = new Array('Lynda', 'Djamila', 'Ali', 'Didier', 'Alexandre',
			'Justin', 'Romain', 'Mohcen', 'Lesly');
	liste.sort();
	var i = 0;
	var oDiv = document.getElementById('pPage3');
	var sText = '<ul>';
	while (i < liste.length) {
		// document.writeln(liste[i]);
		sText = sText + '<li>' + liste[i] + '</li>';
		console.log(liste[i]);
		i++;
	}
	sText = sText + '</ul>';
	oDiv.innerHTML = 'Ont participé à ce projet :' + sText;
};

// Slider
slider = function() {
	oImg.src = aImg[iPos];
	if (iPos < aImg.length - 1) {
		iPos++;
	} else {
		iPos = 0;
	}
	setTimeout('slider()', 5000);
};

// Gestion des cookies
createCookie = function(sNom, sVal, iDuree) {
	// Test le type des arguments A FAIRE

	// Calcule la durée de vie du cookie
	var dExp = new Date();
	dExp.setTime(dExp.getTime() + (iDuree * 24 * 60 * 60 * 1000));
	// Ecriture du cookie
	document.cookie = sNom + '=' + sVal + ';expires=' + dExp.toGMTString()
			+ ';path=/';
};

readCookie = function(sNomCookie) {
	var sRecherche = sNomCookie + '=';
	var aCookies = document.cookie.split(';');
	for (var i = 0; i < aCookies.length; i++) {
		var sMembre = aCookies[i];
		if (sMembre.indexOf(sRecherche, 0) >= 0) {
			// var sResult = sMembre.substring(sRecherche.length);
			var aResult = sMembre.split('=');
			return aResult[1];
		}
	}
	return null;
};






