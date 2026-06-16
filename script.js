function discoverCharacter1() {

    document.getElementById("char1-name").textContent =
        "No.001 ドングリくん";

    document.getElementById("char1-image").src =
        "Dongri.png";

    document.getElementById("char1-desc").textContent =
        "街のどこかに現れる謎のドングリ";

    localStorage.setItem("char1", "found");

    updateCount();

    showDiscoverScreen(
    "ドングリくん",
    "Dongri.png",
    "街のどこかに現れる謎のドングリ"
);
}

function updateCount() {
let count = 0;

    if (localStorage.getItem("char1") === "found") {
        count++;
    }

    if (localStorage.getItem("char2") === "found") {
        count++;
    }

    document.getElementById("count").textContent =
        "発見数 " + count + " / 15";
}

function resetData() {

    localStorage.clear();

    location.reload();
}

window.onload = function () {

    if (localStorage.getItem("char1") === "found") {

        document.getElementById("char1-name").textContent =
            "No.001 ドングリくん";

        document.getElementById("char1-image").src =
            "Dongri.png";

        document.getElementById("char1-desc").textContent =
            "街のどこかに現れる謎のドングリ";
    }

    if (localStorage.getItem("char2") === "found") {

    document.getElementById("char2-name").textContent =
        "No.002 ヤチュウゴロン";

    document.getElementById("char2-image").src =
        "Yakutyuugoron.jpg";

    document.getElementById("char2-desc").textContent =
        "夜のどこかに現れる謎の怪物";
}

    updateCount();

    unlockCharacterFromURL();
}



function discoverCharacter2() {

    document.getElementById("char2-name").textContent =
        "No.002 ヤチュウゴロン";

    document.getElementById("char2-image").src =
        "Yakutyuugoron.jpg";

    document.getElementById("char2-desc").textContent =
        "夜のどこかに現れる謎の怪物";

    localStorage.setItem("char2", "found");

    updateCount();
}


function unlockCharacterFromURL() {

    const params = new URLSearchParams(window.location.search);

    const charId = params.get("char");

    if (charId === "1") {

        discoverCharacter1();
    }

    if (charId === "2") {

    discoverCharacter2();
    }
}

function showDiscoverScreen(name, image, desc) {

    document.getElementById("discover-image").src =
        image;

    document.getElementById("discover-name").textContent =
        name;

    document.getElementById("discover-desc").textContent =
        desc;

    document.getElementById("discover-screen").style.display =
        "block";
}

function closeDiscoverScreen() {

    document.getElementById("discover-screen").style.display =
        "none";
}