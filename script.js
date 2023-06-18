var audio = new Audio();
var time =0;
const head = document.querySelector("h1");
const button1 = document.querySelector(".No.songbutton");
const button2 = document.querySelector(".The.songbutton");
const button3 = document.querySelector(".One.songbutton");
const pp = document.querySelector(".image");
const volup = document.querySelector(".plus");
const voldown = document.querySelector(".minus");
const loop = document.querySelector(".loop");
const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");
const addButtons = document.querySelectorAll(".add");
const poster = document.querySelector(".imgPoster");
const slider = document.querySelector(".slide");

for(var i=0; i<addButtons.length; i++){
    addButtons[i].addEventListener("click", function(e){
        var c = this;
        var select = "song" + c.id;
        var text = document.getElementById(select);
        c.style.backgroundColor = "#cca4f5";
        setTimeout(function(){
            c.style.backgroundColor = "#e7d7f7";
        }, 100);
        audio.addEventListener("ended", function(){
            if(audio.isEmpty){
                alert("empty");
            }
            text.click();
        })
    })
}
button1.addEventListener("click", function(){
    if(pp.classList.contains('image2')){
        pp.classList.add('image1');
        pp.classList.remove('image2');
        pp.src = "pause.png"  
    }
    if(loop.classList.contains('looped')){
        loop.classList.toggle('looped');
    }
    audio.pause();
    const sn = button1.textContent;
    poster.src = sn + ".jpg";
    const url = sn + ".mp3";
    head.textContent = sn + " Playing ";
    audio = new Audio(url);
    audio.play();
})
button2.addEventListener("click", function(){
    if(pp.classList.contains('image2')){
        pp.classList.add('image1');
        pp.classList.remove('image2');
        pp.src = "pause.png"  
    }
    if(loop.classList.contains('looped')){
        loop.classList.toggle('looped');
    }
    audio.pause();
    const sn = button2.textContent;
    poster.src = sn + ".jpg";
    const url = sn + ".mp3";
    head.textContent = sn + " Playing ";
    audio = new Audio(url);
    audio.play();
})
button3.addEventListener("click", function(){
    if(pp.classList.contains('image2')){
        pp.classList.add('image1');
        pp.classList.remove('image2');
        pp.src = "pause.png"  
    }
    if(loop.classList.contains('looped')){
        loop.classList.toggle('looped');
    }
    audio.pause();
    const sn = button3.textContent;
    const url = sn + ".mp3";
    poster.src = sn + ".jpg";
    head.textContent = sn + " Playing ";
    audio = new Audio(url);
    audio.play();
})
pp.addEventListener("click", function(){
    if(pp.classList.contains('image1')){
        audio.pause();
        pp.classList.toggle('image1');
        pp.classList.toggle('image2');
        pp.src = "play.png"
    }
    else{
        audio.play();
        pp.classList.toggle('image2');
        pp.classList.toggle('image1');
        pp.src = "pause.png"
    }
})
volup.addEventListener("click", function(){
    volup.style.backgroundColor = "#023edb";
    setTimeout(function(){
        volup.style.backgroundColor = "#346cff";
    }, 100);
    audio.volume += 0.02;

})
voldown.addEventListener("click", function(){
    voldown.style.backgroundColor = "#023edb";
    setTimeout(function(){
        voldown.style.backgroundColor = "#346cff";
    }, 100);
    audio.volume -= 0.02;
})
loop.addEventListener("click", function(){
    loop.classList.toggle('looped');
    if(loop.classList.contains('looped')){
        audio.loop = true;
    }
    else{
        audio.loop = false;
    }
})
forward.addEventListener("click", function(){
    forward.style.backgroundColor = "#023edb";
    setTimeout(function(){
        forward.style.backgroundColor = "#346cff";
    }, 100);
    audio.currentTime+=5;
    time-=5;
})
backward.addEventListener("click", function(){
    backward.style.backgroundColor = "#023edb";
    setTimeout(function(){
        backward.style.backgroundColor = "#346cff";
    }, 100);
    audio.currentTime-=5;
    time+=5;
})
function playNext(time){

}
audio.onloadedmetadata = function(){
    slider.max = audio.duration;
    slider.value = audio.currentTime;
}
slider.onchange = function(){
    audio.currentTime = slider.value;
}
if(audio.play()){
    setInterval(function(){
        slider.max = audio.duration;
        slider.value = audio.currentTime;
    }, 500);
}

