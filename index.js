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

 function calcularDistancia(vueltas){
	let calculo = vueltas * 320

 }