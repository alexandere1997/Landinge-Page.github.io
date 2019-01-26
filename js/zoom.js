let modal = document.querySelectorAll('.myModal'),
    img = document.querySelectorAll('.myImg'),
    modalImg = document.querySelectorAll('.modal-content'),
		captionText = document.querySelectorAll('.caption'),
		close = document.querySelectorAll('.close');

let mod = () => {
	img.forEach((element) => {
		element.addEventListener('click', (event) => {
			modal.forEach(modElement => {
				modElement.style.display = 'block';
				modalImg.forEach(modImg => {
					modImg.src = element.getAttribute('src');
				});
				captionText.forEach(capText => {
					capText.innerHTML = element.getAttribute('alt');
				});
			});
		});
	});
}
let clos = () => {
	close.forEach(cls => {
		cls.addEventListener('click', () => {
			modal.forEach(md => {
				md.style.display = 'none';
			});
		});
	});
}
mod();
clos();
