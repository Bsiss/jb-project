document.querySelector('.tothetop').addEventListener('click', event => {
    window.scrollTo({left:0, top:0, behavior:"smooth"})
}) // Back to top button

//Page Scroll Position Indicator
const scrollIndicatorElt = document.getElementById('scrollIndicator');
const maxScrollableHeight = document.body.scrollHeight - window.innerHeight;
window.addEventListener('scroll', moveScrollIndicator);

function moveScrollIndicator() {
    const percentage = ((window.scrollY) / maxScrollableHeight) * 100;
    scrollIndicatorElt.style.width = percentage + '%';
}

//Nav minimize on scroll, give users more room to read article and makes sections clear while at top.
window.onscroll = function() { scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav").style.fontSize = "20px";
    } else {
        document.getElementById("nav").style.fontSize = "40px";
    }
}

//Thank you message button at end of quiz & article, reveals thank you message to reader.
function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}


