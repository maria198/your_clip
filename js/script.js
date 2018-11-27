function showNext(){

	var oCurrent = document.querySelector('.current');
	oCurrent.classList.remove('current');



	var oNext;
		
	if( oCurrent.nextElementSibling!= null){
		oNext = oCurrent.nextElementSibling;
	}
	else{
		oNext = oCurrent.parentNode.firstElementChild;
	}

	oNext.classList.add('current');
}

function showPrevious(){

	var oCurrent = document.querySelector('.current');
	oCurrent.classList.remove('current');



	var oPrevious;
		
	if( oCurrent.previousElementSibling!= null){
		oPrevious = oCurrent.previousElementSibling;
	}
	else{
		oPrevious = oCurrent.parentNode.lastElementChild;
	}

	oPrevious.classList.add('current');	
}

var oRightButton = document.querySelector('.fa-arrow-right');
oRightButton.addEventListener('click', showNext);

// setInterval(showNext,2000);

var oLeftButton = document.querySelector('.fa-arrow-left');
oLeftButton.addEventListener('click', showPrevious);


