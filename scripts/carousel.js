function currentSlide(n) {
    //reset all before featuring one element
    var element1 = document.getElementById('slide-1').classList.remove('current');
    var element2 = document.getElementById('slide-2').classList.remove('current');
    var element3 = document.getElementById('slide-3').classList.remove('current');
    //add selected element as current
    var element = document.getElementById('slide-'+n);
    element.classList.add('current');  
}