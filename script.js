document.getElementById('burgerMenuButton').addEventListener('click', function() {
	document.getElementById('navMenu').classList.toggle('hidden');
});

emailjs.init({
	publicKey: 'QziVgTYk_s-mwzp6_',
	blockHeadless: true,
	limitRate: {
		id: 'app',
		throttle: 10000,
	},
});

document.getElementById('form').addEventListener('submit', function(event) {
event.preventDefault();

const serviceID = 'service_mt2n0ij';
const templateID = 'template_74llryj';
   
emailjs.sendForm(serviceID, templateID, this)
	.then(() => {
		alert('You are added to our newsletter, Thank you!');
		this.reset();
	}, (err) => {
		alert('Error, write email to us');
	});
});
		
document.getElementById('form-send').addEventListener('submit', function(event) {
event.preventDefault();

const serviceID = 'service_mt2n0ij';
const templateID2 = 'template_74llryj';

if (!document.getElementById('terms').checked) { 
	alert('You need to accept the Terms');
	return false; }
   
emailjs.sendForm(serviceID, templateID2, this)
	.then(() => {
		alert('Sent, Thank you!');
		this.reset();
	}, (err) => {
		alert('Error, write email to us');
	});

});
