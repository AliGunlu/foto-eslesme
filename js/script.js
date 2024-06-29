let puanText = document.getElementById('puanText');
let puan = 0;

puanText.innerHTML = "0";

const kartTemplate = `
    <div class="kart-cerceve">
        <div class="kart-onyuz">
            <img src="https://via.placeholder.com/100x100?text=?">
        </div>
        <div class="kart-arkayuz">
            <img src="">
        </div>
    </div>
`;

const fotoNumaralari = [10, 20, 30, 20, 10, 40, 40, 30];

// HTML'e eklenen kutlama GIF div'i için id
const celebrationDiv = document.getElementById('celebration');

for (let fotoNumara of fotoNumaralari) {
    const yeniKart = document.createElement("div");
    yeniKart.innerHTML = kartTemplate;
    yeniKart.classList.add("kart");
    yeniKart.querySelector(".kart-arkayuz img").src = `https://lipsum.app/id/${fotoNumara}/100x100`;
    document.querySelector("div#oyun-cerceve").append(yeniKart);
    yeniKart.addEventListener("click", kartTiklama);
}

function kartTiklama(olay) {
    const secilenKart = olay.currentTarget;

    if (secilenKart.classList.contains("eslesti")) {
        return;
    }

    if (secilenKart.classList.contains("acik")) {
        return;
    }

    const tumAcikKartlar = document.querySelectorAll(".acik");
    if (tumAcikKartlar.length === 2) {
        return;
    }

    const acikKart = document.querySelector(".acik");
    if (!acikKart) {
        secilenKart.classList.add("acik");
        setTimeout(() => secilenKart.classList.remove("acik"), 1500);
        return;
    }

    secilenKart.classList.add("acik");

    const acikKartImg = acikKart.querySelector(".kart-arkayuz img");
    const secilenKartImg = secilenKart.querySelector(".kart-arkayuz img");

    if (acikKartImg.src === secilenKartImg.src) {
        acikKart.classList.add("eslesti");
        secilenKart.classList.add("eslesti");
        puan++;
        puanText.innerHTML = puan.toString();

        if (puan === 4) {
            celebrationDiv.style.display = 'block';
            setTimeout(() => {
                celebrationDiv.style.display = 'none';
            }, 5000);
        }

        acikKart.classList.remove("acik");
        secilenKart.classList.remove("acik");
    } else {
        setTimeout(() => {
            acikKart.classList.remove("acik");
            secilenKart.classList.remove("acik");
        }, 1500);
    }
}
