function discoverCharacter1() {

    document.getElementById("char1-name").textContent =
        "No.001 ドングリくん";

    document.getElementById("char1-image").src =
        "Dongri.png";

    document.getElementById("char1-desc").textContent =
        "街のどこかに現れる謎のドングリ";

    localStorage.setItem("char1", "found");

    updateCount();
}

function updateCount() {

    let count = 0;

    if (localStorage.getItem("char1") === "found") {
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

    updateCount();

    unlockCharacterFromURL();
}

function unlockCharacterFromURL() {

    const params = new URLSearchParams(window.location.search);

    const charId = params.get("char");

    if (charId === "1") {

        discoverCharacter1();
    }
}