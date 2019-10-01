export function render(htmlContent){
	const mainView = document.querySelector('#primaryView');
	mainView.innerHTML = htmlContent;
}