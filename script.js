// =========================
// キャラクター情報
// =========================

const characters = {
    "1": {
        storageKey: "machizukan_char1",
        number: "No.001",
        name: "ドングリくん",
        image: "Dongri.png",
        desc: "街のどこかに現れる謎のドングリ"
    },

    "2": {
        storageKey: "machizukan_char2",
        number: "No.002",
        name: "ヤチュウゴロン",
        image: "Yakutyuugoron.jpg",
        desc: "夜のどこかに現れる謎の怪物"
    }
};


// =========================
// キャラクターを発見
// =========================

function discoverCharacter(charId, showScreen = true) {

    const character = characters[charId];

    if (!character) {
        return;
    }


    // 図鑑の表示を変更

    document.getElementById(`char${charId}-name`).textContent =
        character.number + " " + character.name;

    document.getElementById(`char${charId}-image`).src =
        character.image;

    document.getElementById(`char${charId}-image`).alt =
        character.name;

    document.getElementById(`char${charId}-desc`).textContent =
        character.desc;


    // 発見済みとして保存

    localStorage.setItem(
        character.storageKey,
        "found"
    );


    // 発見数を更新

    updateCount();


    // 発見演出を表示

    if (showScreen) {

        showDiscoverScreen(
            character.name,
            character.image,
            character.desc
        );

    }

}


// =========================
// キャラ1を発見
// =========================

function discoverCharacter1() {

    discoverCharacter("1");

}


// =========================
// キャラ2を発見
// =========================

function discoverCharacter2() {

    discoverCharacter("2");

}


// =========================
// 発見数を更新
// =========================

function updateCount() {

    let count = 0;


    for (const charId in characters) {

        const character = characters[charId];

        if (
            localStorage.getItem(
                character.storageKey
            ) === "found"
        ) {
            count++;
        }

    }


    document.getElementById("count").textContent =
        "発見数 " +
        count +
        " / 15";

}


// =========================
// 保存済みデータを読み込む
// =========================

function loadSavedCharacters() {

    for (const charId in characters) {

        const character = characters[charId];

        if (
            localStorage.getItem(
                character.storageKey
            ) === "found"
        ) {

            // 発見画面は出さずに
            // 図鑑だけ復元する

            discoverCharacter(
                charId,
                false
            );

        }

    }

}


// =========================
// データをリセット
// =========================

function resetData() {

    const result = confirm(
        "図鑑の発見データをリセットしますか？"
    );


    if (!result) {
        return;
    }


    for (const charId in characters) {

        const character = characters[charId];

        localStorage.removeItem(
            character.storageKey
        );

    }


    location.reload();

}


// =========================
// URLからキャラクターを発見
// =========================

function unlockCharacterFromURL() {

    const params = new URLSearchParams(
        window.location.search
    );


    const charId =
        params.get("char");


    if (characters[charId]) {

        discoverCharacter(charId);

    }

}


// =========================
// 発見画面を表示
// =========================

function showDiscoverScreen(
    name,
    image,
    desc
) {

    document.getElementById(
        "discover-image"
    ).src = image;


    document.getElementById(
        "discover-image"
    ).alt = name;


    document.getElementById(
        "discover-name"
    ).textContent = name;


    document.getElementById(
        "discover-desc"
    ).textContent = desc;


    document.getElementById(
        "discover-screen"
    ).style.display = "flex";

}


// =========================
// 発見画面を閉じる
// =========================

function closeDiscoverScreen() {

    document.getElementById(
        "discover-screen"
    ).style.display = "none";

}


// =========================
// ページを開いたとき
// =========================

window.onload = function () {

    // 前に発見したキャラを復元

    loadSavedCharacters();


    // 発見数を更新

    updateCount();


    // URLに ?char=1 などがあれば発見

    unlockCharacterFromURL();

};