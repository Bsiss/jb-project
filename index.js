//shows date at top of article (how new or old article is)
var day = new Date();
document.getElementById("date").innerHTML = "published on:  " + day;

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

//Thank you message button at end of quiz & article, reveals thank you message to reader. (scroll animation)
function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}

// working True or false + window changing game on bottom of page

document.getElementById("true1").onclick = function(event){openclose(1);};
document.getElementById("true2").onclick = function(event){openclose(2);};
document.getElementById("true3").onclick = function(event){openclose(3);};

function openclose (true1) {
    
    let true1next = true1+1;
    document.getElementById("question"+true1).style.display = "none";
    document.getElementById("question"+true1next).style.display = "grid";
}

