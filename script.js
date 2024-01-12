let btn = document.querySelectorAll(".btn");
let reloads = document.getElementById("reloadbtn");
let timebox = document.getElementById("timebox");
let pointbox = document.getElementById("pointbox");
let mainbox = document.getElementById("mainbox");
let cardarr = ["afterhours", "bbtm", "dawn", "eos", "hob", "kissland", "mdm", "starboy", "afterhours", "bbtm", "dawn", "eos", "hob", "kissland", "mdm", "starboy"];
let cardss = ["url(/images/afterhours.jpg)", "url(/images/bbtm.jpg)", "url(/images/dawnfm.jpg)", "url(/images/eos.jpg)", "url(/images/hob.jpg)", "url(/images/kissland.jpg)", "url(/images/mdm.jpg)", "url(/images/starboy.jpg)", "url(/images/afterhours.jpg)", "url(/images/bbtm.jpg)", "url(/images/dawnfm.jpg)", "url(/images/eos.jpg)", "url(/images/hob.jpg)", "url(/images/kissland.jpg)", "url(/images/mdm.jpg)", "url(/images/starboy.jpg)", ]
let a, b;
let c = 0;
let mains = document.getElementById("mainboxs");
let firstcard, secondcard;
let checkcard = [];
let win = [];
let start = false;
let timestart;
let point = 0;
let playbtn = document.getElementById("play");
let mainsec = document.getElementById("main");
let startsec = document.getElementById("start");
let clear;
let _clear;





playbtn.addEventListener("click", function() {
    
    if (startsec.style.display != "none") {
        startsec.style.display = "none"
    }
    if (mainsec.style.display != "flex") {
        mainsec.style.display = "flex"
    }

})

function second() {

    a = this;
    console.log(a)
    timebox.innerHTML = a.innerText;
    btn.forEach((element, index) => {
        
        element.removeEventListener("click", second);
    });
    // Timer
    _clear = setInterval(() => {
        timebox.innerHTML -= 1;

        setTimeout(() => {
            if (timebox.innerHTML < 0) {
                if (win.length != 0 || win.length == 0)

                    clearInterval(_clear)
            }
        }, 500)










    }, 1000)
    mains.style.animationName = "mys";
    mains.style.animationDuration = "3s";

}
// add event listener to button
btn.forEach((element, index) => {
    element.addEventListener("click", second);

});
// Neustarten
reloads.addEventListener("click", () => {
    window.location.reload();
});
// wenn der Wert 0 ist ist wird das Fenster zurück gesetzt 
clear = setInterval(() => {
    if (timebox.innerHTML < 0) {


        setTimeout(() => {
            if (win.length != 0 || win.length == 0) {
                mains.innerHTML = "Time up!";
                mains.style.display = "flex";

                mains.style.animationName = "my";
                mains.style.animationDuration = "2s";
                timebox.innerHTML = "0";
                clearInterval(clear)
            }
        }, 1500)




    }
}, 1000);

// wir erschaffen eine card
function main() {
    for (let i = 0; i < 16; i++) {
        let boxs = document.createElement("div");
        boxs.setAttribute("id", i)
        boxs.className = "box";
        mainbox.appendChild(boxs)
    }
}
main()

// wir geben den cards neue Positionen neue Anordnungen Positionen  a = b and b = a
function reassemble() {
    let i, y, z, a, b;
    for (i = 0; i < cardarr.length; i++) {
        y = cardarr[i];
        a = cardss[i];
        z = Math.floor(Math.random() * 16);
        cardss[i] = cardss[z]
        cardarr[i] = cardarr[z];
        cardss[z] = a;
        cardarr[z] = y;
    }

    console.log(cardss)
    console.log(cardarr)
}
reassemble()

// wir benutzen diesen code wenn wir den code oben ausführen wird er error zrucück geben


function play(e) {
    if (checkcard.length < 2) {
        firstcard = this;
        let aa;
        aa = firstcard.getAttribute("id");

        firstcard.style.backgroundImage = cardss[aa];
        checkcard.push(firstcard)
    }


    if (checkcard.length == 2) {

        let a, b, c, d;
        a = checkcard[0].getAttribute("id");
        b = checkcard[1].getAttribute("id");
        c = checkcard[0].innerHTML;
        d = checkcard[1].innerHTML;

        if (a == b) {
            alert("You clicked the same cards !")
            checkcard[0].style.backgroundImage = `url("/images.unbenannt.jpg")`;
            checkcard = [];
        }
        if (a != b) {


            if (c == d) {
                checkcard[0].removeEventListener("click", play)
                checkcard[1].removeEventListener("click", play)
                win.push(checkcard[0])
                win.push(checkcard[1])
                console.log(win)
                if (win.length == 16) {
                    mains.innerHTML = "You win the game!";
                    mains.style.display = "flex";

                    mains.style.animationName = "my";
                    mains.style.animationDuration = "3s";
                    setTimeout(() => {
                        if (timebox.innerText.length != 0) {
                            window.location.reload();
                        }
                    }, 5000)
                }

                point += 1;
                pointbox.innerHTML = point;
                checkcard = [];
            } else {
                setTimeout(() => {
                    checkcard[0].style.backgroundImage = `url("/images/unbenannt.jp")`;
                    checkcard[1].style.backgroundImage = `url("/images/unbenannt.jpg")`;
                    checkcard = [];
                }, 1000)

            }

        }
    }




}






let card = document.querySelectorAll(".box");
card.forEach((element, index) => {
    element.innerText = cardarr[index]
    element.addEventListener("click", play);

});