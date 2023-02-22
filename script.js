var start = 0;
slide();

function slide() {
    var i;
    var x = document.getElementsByClassName('slides');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    start++;
    if(start > x.length) {start = 1}
    x[start-1].style.display = 'block';
    setTimeout(slide, 2000);
}