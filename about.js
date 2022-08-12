console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Thank you for your feedback. Message successfully submitted!")
}
function overPicture(event) {
	event.preventDefault()
	alert("Thank you for petting our duck! You're just great")
}
let pic = document.querySelector('img')
pic.addEventListener('mouseover', overPicture)

let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);