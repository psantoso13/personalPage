const container = document.querySelector('.isivillagaleri');
const besar = document.querySelector('.extra');
const thumbGambar = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    // check apakan yang di klik adalah thumb
    if(e.target.className == "thumb") {
        besar.src = e.target.src;
        besar.classList.add('gambarFade');
        setTimeout(function(){
            besar.classList.remove('gambarFade')
        },500);

        thumbGambar.forEach(function(thumb) {
            // if( thumb.classList.contains('gambarAktif')) {
            //     thumb.classList.remove('gambarAktif');
            // }
            thumb.className ='thumb';
        });

        e.target.classList.add('gambarAktif');

    }
});
