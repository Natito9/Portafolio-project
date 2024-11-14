import './style.css';
import './reset.css';
import './header.css';


window.addEventListener('scroll', function() {
    const quoteContainer = document.querySelector('.quote-container');
    const quote = quoteContainer.querySelector('.quote');
    const rect = quoteContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top >= 0 && rect.bottom <= windowHeight) {
        quoteContainer.style.visibility = 'visible'; // Make it visible
        quote.style.opacity = 1;
       
    }
});
