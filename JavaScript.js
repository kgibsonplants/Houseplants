//home button
const toHome = () => window.location.href='Quiz.html';

//calculate user results
function result(){
	if (document.getElementById('brightSun').checked && document.getElementById('pets').checked) {
      window.location.href='Echeveria.html';
    } 

    else if (document.getElementById('brightSun').checked && document.getElementById('noPets').checked) {
      window.location.href='Jade.html';
    } 

    else if (document.getElementById('someSun').checked && document.getElementById('pets').checked) {
      window.location.href='AfricanViolet.html';
    } 

    else if (document.getElementById('someSun').checked && document.getElementById('noPets').checked) {
      window.location.href='Pothos.html';    
    }}


    /* take user back to top
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'}); */