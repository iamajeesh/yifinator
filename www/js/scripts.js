var movePages = function () {
	this.position = 0;
  this.place = "";
	//esta funcion nos permite desplazar una pagina de izquierda a derecha
	this.slideToLeft = function (idPage) {
		var page = document.getElementById(idPage);
		page.style.left = "-100%";
		position = this.getAbsoluteElementPosition(idPage);
		position = position.left;
	}
	//esta funcion nos permite desplazar una pagina de derecha a izquierda
	this.slideToRight = function (idPage) {
		var page = document.getElementById(idPage);
		page.style.left = "100%";
		position = this.getAbsoluteElementPosition(idPage);
		position = position.right;
	}
	//esta funcion nos permite desplazar una pagina de abajo hacia arriba
	this.slideToTop = function (idPage) {
		var page = document.getElementById(idPage);
		page.style.top = "-100%";
		position = this.getAbsoluteElementPosition(idPage);
		position = position.top;
	}
	//esta funcion nos permite desplazar una pagina de arriba hacia abajo
	this.slideToBottom = function (idPage) {
		var page = document.getElementById(idPage);
		page.style.top = "100%";
		position = this.getAbsoluteElementPosition(idPage);
		position = position.top;
	}
	this.comeBack = function (idPage){
 		document.getElementById(idPage).style.left = position+"px";
	}
	//funcion que permite obtener la posicion absoluta de un elemento
	this.getAbsoluteElementPosition = function(idPage) {
		if (typeof idPage == "string")
			idPage = document.getElementById(idPage)
	    
	  	if (!idPage) return { top:0,left:0 };
			var y = 0;
		  	var x = 0;
		  	while (idPage.offsetParent) {
		    x += idPage.offsetLeft;
		    y += idPage.offsetTop;
		    idPage = idPage.offsetParent;
		}
		return {top:y,left:x};
	}
};
var moveIt = new movePages();