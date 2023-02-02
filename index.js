document.getElementById("btn_convert").addEventListener("click", function() {
	html2canvas(document.getElementById("table_png")).then(function (canvas) {
            let anchorTag = document.createElement("a");
			document.body.appendChild(anchorTag);
			anchorTag.download = "cooper.png";
			anchorTag.href = canvas.toDataURL();
			anchorTag.target = '_blank';
			anchorTag.click();
		});
 });

 let vueltass = document.getElementById("vuelticas");
vueltass.onchange = function() {
	document.getElementById("calcular").disabled = false;
	return;
}
 document.getElementById("calcular").addEventListener("click", function() {
	let genero = document.getElementById("gender").value;
	let edad = document.getElementById("age").value;
	console.log(vueltass.value) 
	let calcularDato = vueltass.value
	finalResult = calcularDato * 320;
	let metersToKm = finalResult / 1000;
	if (genero === "" || edad === "" ) {
		alert('ya we hazlo bien')	
	}else{
		let texto = ` ${metersToKm} km en 12 min`;
		let wordText = ''
		let numberResult = document.querySelector("#number-result")
		let wordResult = document.querySelector("#word-result")

		if(genero === 'f' && edad ==='one'){
			if (finalResult < 1500) {
				wordText = 'Muy malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1500 && finalResult < 1600){
				wordText = 'Malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1600 && finalResult < 1900){
				wordText = 'Normal'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1900 && finalResult < 2001){
				wordText = 'Bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else{
				wordText = 'Muy bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}
		}
		if(genero === 'f' && edad ==='two'){
			if (finalResult < 1600) {
				wordText = 'Muy malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1600 && finalResult < 1900){
				wordText = 'Malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1900 && finalResult < 2000){
				wordText = 'Normal'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 2000 && finalResult < 2100){
				wordText = 'Bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else{
				wordText = 'Muy bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}
		}
		if(genero === 'f' && edad ==='three'){
			if (finalResult < 1700) {
				wordText = 'Muy malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1700 && finalResult < 1799){
				wordText = 'Malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1800 && finalResult < 2099){
				wordText = 'Normal'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 2100 && finalResult < 2300){
				wordText = 'Bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else{
				wordText = 'Muy bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}
		}
		if(genero === 'f' && edad ==='four'){
			if (finalResult < 1500) {
				wordText = 'Muy malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1500 && finalResult < 1799){
				wordText = 'Malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1800 && finalResult < 2200){
				wordText = 'Normal'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 2200 && finalResult < 2700){
				wordText = 'Bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else{
				wordText = 'Muy bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}
		}
		if(genero === 'f' && edad ==='five'){
			if (finalResult < 1400) {
				wordText = 'Muy malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1400 && finalResult < 1700){
				wordText = 'Malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1700 && finalResult < 2000){
				wordText = 'Normal'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 2500 && finalResult < 2500){
				wordText = 'Bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else{
				wordText = 'Muy bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}
		}
		if(genero === 'f' && edad ==='six'){
			if (finalResult < 1200) {
				wordText = 'Muy malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1200 && finalResult < 1500){
				wordText = 'Malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1500 && finalResult < 1900){
				wordText = 'Normal'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1900 && finalResult < 2301){
				wordText = 'Bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else{
				wordText = 'Muy bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}
		}
		if(genero === 'f' && edad ==='seven'){
			if (finalResult < 1100) {
				wordText = 'Muy malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1100 && finalResult < 1400){
				wordText = 'Malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1400 && finalResult < 1700){
				wordText = 'Normal'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1700 && finalResult < 2201){
				wordText = 'Bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else{
				wordText = 'Muy bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}
		}

		if(genero === 'm' && edad ==='one'){
			if (finalResult < 2100) {
				wordText = 'Muy malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 2100 && finalResult < 2200){
				wordText = 'Malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 2200 && finalResult < 2400){
				wordText = 'Normal'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 2400 && finalResult < 2701){
				wordText = 'Bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else{
				wordText = 'Muy bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}
		}
		if(genero === 'm' && edad ==='two'){
			if (finalResult < 2200) {
				wordText = 'Muy malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 2200 && finalResult < 2300){
				wordText = 'Malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 2300 && finalResult < 2500){
				wordText = 'Normal'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 2500 && finalResult < 2801){
				wordText = 'Bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else{
				wordText = 'Muy bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}
		}
		if(genero === 'm' && edad ==='three'){
			if (finalResult < 2300) {
				wordText = 'Muy malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 2300 && finalResult < 2500){
				wordText = 'Malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 2500 && finalResult < 2700){
				wordText = 'Normal'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 2700 && finalResult < 3001){
				wordText = 'Bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else{
				wordText = 'Muy bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}
		}
		if(genero === 'm' && edad ==='four'){
			if (finalResult < 1600) {
				wordText = 'Muy malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1600 && finalResult < 2200){
				wordText = 'Malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 2200 && finalResult < 2400){
				wordText = 'Normal'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 2400 && finalResult < 2800){
				wordText = 'Bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else{
				wordText = 'Muy bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}
		}
		if(genero === 'm' && edad ==='five'){
			if (finalResult < 1500) {
				wordText = 'Muy malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1500 && finalResult < 1900){
				wordText = 'Malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1900 && finalResult < 2300){
				wordText = 'Normal'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 2300 && finalResult < 2700){
				wordText = 'Bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else{
				wordText = 'Muy bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}
		}
		if(genero === 'm' && edad ==='six'){
			if (finalResult < 1400) {
				wordText = 'Muy malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1400 && finalResult < 1700){
				wordText = 'Malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1700 && finalResult < 2100){
				wordText = 'Normal'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 2100 && finalResult < 2501){
				wordText = 'Bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else{
				wordText = 'Muy bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}
		}
		if(genero === 'm' && edad ==='seven'){
			if (finalResult < 1300) {
				wordText = 'Muy malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1300 && finalResult < 1600){
				wordText = 'Malo'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 1600 && finalResult < 2000){
				wordText = 'Normal'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else if(finalResult >= 2000 && finalResult < 2401){
				wordText = 'Bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}else{
				wordText = 'Muy bueno'
				numberResult.innerHTML = texto;
				wordResult.innerHTML = wordText
			}
		}
	}
  
 })
