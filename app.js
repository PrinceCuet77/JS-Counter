/// set intial count
let counter = 0; 

// select value and buttons 
let value = document.querySelector('#value'); 
let btns = document.querySelectorAll('.btn'); 

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        let styles = e.currentTarget.classList; 
        if ( styles.contains('increase') ) {
            counter++; 
        }
        else if ( styles.contains('decrease') ) {
            counter--; 
        }
        else {
            counter = 0; 
        }

        if ( counter > 0 ) { 
            value.style.color = 'green'; 
        }
        else if ( counter < 0 ) {
            value.style.color = 'red'; 
        }
        else {
            value.style.color = '#222'; 
        }

        value.textContent = counter; 
    }); 
});