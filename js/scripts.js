
// Business logic

function galToLit(number1) {
  let result = number1 * 3.78541;
  return result;
};

function fToC(number1) {
	let result = (number1 - 32) * .5556;
	return result;
};

// Below is UI logic

$(document).ready(function() {
  $("form#galToLit").submit(function(event) {
  event.preventDefault();
    let number1 = parseInt($("#gallons").val());
    let result = galToLit(number1).toFixed(2);
    $("#outputLiters").text(result);
	});
	
	$("form#fToC").submit(function(event) {
		event.preventDefault();
			let number1 = parseInt($("#fahrenheit").val());
			let result = fToC(number1).toFixed(2);
			$("#outputCelsius").text(result);
		});
});