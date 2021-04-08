let counter = 1;

const buttons_div = document.querySelectorAll(".btn");
const value_span = document.querySelector("#value");

buttons_div.forEach(function(button) {
	button.addEventListener('click', function(e) {
		const styles = e.currentTarget.classList;
		if(styles.contains("increase")){
			counter++;
		} else if(styles.contains("decrease")){
			counter--;
		} else {
			counter=0;
		}
		if(counter>0){
			value.style.color = 'green';
		} else if(counter<0) {
			value.style.color = 'red';
		} else {
			value.style.color = 'black';
		}
		value_span.textContent=counter;
	})
});