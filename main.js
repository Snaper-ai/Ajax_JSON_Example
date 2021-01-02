let request = new XMLHttpRequest();
let url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

request.open('GET', url, true);
request.send();

request.addEventListener('readystatechange', ()=>{
	if ((request.readyState == 4) && (request.status == 200)){
		drawBoard(request.responseText);
		}
});


function drawBoard(response){
	let obj  = JSON.parse(response);
	for (let index = 0; index < obj.length; index++) {
		document.write(obj[index].ccy + ' ');
		document.write(obj[index].buy + ' ');
		document.write(obj[index].sale + ' ');
		document.write('<br>');
	}
}
