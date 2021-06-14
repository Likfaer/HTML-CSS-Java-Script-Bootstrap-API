function calc(){
var a = Number(document.getElementById("a").value);
var b = Number(document.getElementById("b").value);
var c = Number(document.getElementById("c").value);
var d = b * b - 4 * a * c;
	if ( a == 0) {
		alert("Неправильный коэффициент при x²")
	}
	if ( d < 0 ) {
		var result = "Решений нет";
		document.getElementById("result").innerHTML = result;
  }
	else {
		if ( d == 0 ) {
			result = (-b + Math.sqrt(d))/(2*a);
			document.getElementById("result").innerHTML = result;
      }
		else {
			result = (-b + Math.sqrt(d))/(2*a);
			var result2 = (-b - Math.sqrt(d))/(2*a);
			document.getElementById("result").innerHTML = result;
			document.getElementById("result2").innerHTML = result2;
      }
  }
}