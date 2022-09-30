// alert('connected')
/*
    title: typewriter
    date: 9/29/22
*/

const Typewriter = function(txtElement, words, wait){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

Typewriter.prototype.type = function() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];
    if(this.isDeleting){
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }else{
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`
    let typeSpeed = 300;

    if(this.isDeleting){
        typeSpeed /= 2
    }

    if(!this.isDeleting && this.txt === fullTxt){
        typeSpeed = this.wait;
        this.isDeleting = true;
    }else if(this.isDeleting && this.txt === ''){
        this.isDeleting= false;
        this.wordIndex++;
        typeSpeed = 500;
    }

    setTimeout(()=>this.type(), typeSpeed)
}

document.addEventListener('DOMContentLoaded', init)

function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new Typewriter(txtElement, words, wait);
}

/*
    title: write-list
    date: 9/29/22
*/

var list = document.getElementById('home-skills-list');
var listItems = list.children;
var itemIndex = 0;
var triggered = false;


const writeList = ()=>{
    if(itemIndex == listItems.length){
        clearInterval()
    }else{
        listItems[itemIndex].classList.add('reveal')
        itemIndex++
    }
}


const isInViewPort = (element)=> {
    var bounding = element.getBoundingClientRect();
    if (
        bounding.left >= 0 &&
        bounding.top >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        console.log('In the viewport! :)');
        window.removeEventListener('scroll', executeWriteList, false);
        return true;
        
    } else {
        console.log('Not in the viewport. :(');
        return false;
    }
}

const executeWriteList = ()=>{
    if(isInViewPort(list)){
        console.log('executed')
        setInterval(() => {
            writeList()
        }, 1000);
    }
}

window.addEventListener('scroll', executeWriteList, false);

