let modal = document.getElementById('myModal');
let modal1 = document.getElementById('myModal1');
let modal2 = document.getElementById('myModal2');
let modal3 = document.getElementById('myModal3');
let modal4 = document.getElementById('myModal4');
let modal5 = document.getElementById('myModal5');
let modal6 = document.getElementById('myModal6');
let modal7 = document.getElementById('myModal7');
let modal8 = document.getElementById('myModal8');
let img = document.getElementById('myImg');
let modalImg = document.getElementById('img01');
let img2 = document.getElementById('myImg1');
let modalImg2 = document.getElementById('img02');
let img3 = document.getElementById('myImg2');
let modalImg3 = document.getElementById('img03');
let img4 = document.getElementById('myImg3');
let modalImg4 = document.getElementById('img04'); 
let img5 = document.getElementById('myImg4');
let modalImg5 = document.getElementById('img05');
let img6 = document.getElementById('myImg5');
let modalImg6 = document.getElementById('img06');
let img7 = document.getElementById('myImg6');
let modalImg7 = document.getElementById('img07');
let img8 = document.getElementById('myImg7');
let modalImg8 = document.getElementById('img08'); 
let img9 = document.getElementById('myImg8');
let modalImg9 = document.getElementById('img09'); 
let captionText = document.getElementById('caption');
let captionText2 = document.getElementById('caption2');
let captionText3 = document.getElementById('caption3');
let captionText4 = document.getElementById('caption4');
let captionText5 = document.getElementById('caption5');
let captionText6 = document.getElementById('caption6');
let captionText7 = document.getElementById('caption7');
let captionText8 = document.getElementById('caption8');
let captionText9 = document.getElementById('caption9');

img.onclick = function () {
	modal.style.display = 'block';
	modalImg.src = this.src;
	captionText.innerHTML = this.alt; 
}
let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
	modal.style.display = 'none';
}
img2.onclick = function () {
	modal1.style.display = 'block';
	modalImg2.src = this.src;
	captionText2.innerHTML = this.alt; 
}
let span1 = document.getElementsByClassName("close2")[0];
span1.onclick = function() {
	modal1.style.display = 'none';
}
img3.onclick = function () {
	modal2.style.display = 'block';
	modalImg3.src = this.src;
	captionText3.innerHTML = this.alt; 
}
let span2 = document.getElementsByClassName("close3")[0];
span2.onclick = function() {
	modal2.style.display = 'none';
}
img4.onclick = function () {
	modal3.style.display = 'block';
	modalImg4.src = this.src;
	captionText4.innerHTML = this.alt; 
}
let span3 = document.getElementsByClassName("close4")[0];
span3.onclick = function() {
	modal3.style.display = 'none';
}
img5.onclick = function () {
	modal4.style.display = 'block';
	modalImg5.src = this.src;
	captionText5.innerHTML = this.alt; 
}
let span4 = document.getElementsByClassName("close5")[0];
span4.onclick = function() {
	modal4.style.display = 'none';
}
img6.onclick = function () {
	modal5.style.display = 'block';
	modalImg6.src = this.src;
	captionText6.innerHTML = this.alt; 
}
let span5 = document.getElementsByClassName("close6")[0];
span5.onclick = function() {
	modal5.style.display = 'none';
}
img7.onclick = function () {
	modal6.style.display = 'block';
	modalImg7.src = this.src;
	captionText7.innerHTML = this.alt; 
}
let span6 = document.getElementsByClassName("close7")[0];
span6.onclick = function() {
	modal6.style.display = 'none';
}
img8.onclick = function () {
	modal7.style.display = 'block';
	modalImg8.src = this.src;
	captionText8.innerHTML = this.alt; 
}
let span7 = document.getElementsByClassName("close8")[0];
span7.onclick = function() {
	modal7.style.display = 'none';
}
img9.onclick = function () {
	modal8.style.display = 'block';
	modalImg9.src = this.src;
	captionText9.innerHTML = this.alt; 
}
let span8 = document.getElementsByClassName("close9")[0];
span8.onclick = function() {
	modal8.style.display = 'none';
}