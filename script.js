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
    },

    "3": {
        storageKey: "machizukan_char3",
        number: "No.003",
        name: "おたすけちゃん",
        image: "HarukuruOtasukechan.jpeg",
        desc: "街で困っている人を助けてくれる精霊",

        skill: "びーむ",
        catchphrase: "たすけようか？",
        favoritePlace: "街の中",

        author: "ちゃんちゃん",
        authorAge: "7さい"

        
    },

    "4": {
        storageKey: "machizukan_char4",
        number: "No.004",
        name: "仮の名前4",
        image: "character4.png",
        desc: "仮の説明4"
    },

    "5": {
        storageKey: "machizukan_char5",
        number: "No.005",
        name: "仮の名前5",
        image: "character5.png",
        desc: "仮の説明5"
    },

    "6": {
        storageKey: "machizukan_char6",
        number: "No.006",
        name: "仮の名前6",
        image: "character6.png",
        desc: "仮の説明6"
    },

    "7": {
        storageKey: "machizukan_char7",
        number: "No.007",
        name: "仮の名前7",
        image: "character7.png",
        desc: "仮の説明7"
    },

    "8": {
        storageKey: "machizukan_char8",
        number: "No.008",
        name: "仮の名前8",
        image: "character8.png",
        desc: "仮の説明8"
    },

    "9": {
        storageKey: "machizukan_char9",
        number: "No.009",
        name: "仮の名前9",
        image: "character9.png",
        desc: "仮の説明9"
    },

    "10": {
        storageKey: "machizukan_char10",
        number: "No.010",
        name: "仮の名前10",
        image: "character10.png",
        desc: "仮の説明10"
    },

    "11": {
        storageKey: "machizukan_char11",
        number: "No.011",
        name: "仮の名前11",
        image: "character11.png",
        desc: "仮の説明11"
    },

    "12": {
        storageKey: "machizukan_char12",
        number: "No.012",
        name: "仮の名前12",
        image: "character12.png",
        desc: "仮の説明12"
    },

    "13": {
        storageKey: "machizukan_char13",
        number: "No.013",
        name: "仮の名前13",
        image: "character13.png",
        desc: "仮の説明13"
    },

    "14": {
        storageKey: "machizukan_char14",
        number: "No.014",
        name: "仮の名前14",
        image: "character14.png",
        desc: "仮の説明14"
    },

    "15": {
        storageKey: "machizukan_char15",
        number: "No.015",
        name: "仮の名前15",
        image: "character15.png",
        desc: "仮の説明15"
    }

};


// =========================
// キャラクターカードを作る
// =========================

function createCharacterCards() {

    const list =
        document.getElementById("character-list");

    list.innerHTML = "";


    for (const charId in characters) {

        const character =
            characters[charId];


        const card =
            document.createElement("div");

        card.className = "card";
        
        card.onclick = function () {
            if (
                localStorage.getItem(character.storageKey) === "found"
            ) {
                showCharacterDetail(charId);
            }
        };


        card.innerHTML = `

            <div class="card-number">
                SPIRIT ${character.number}
            </div>

            <h2 id="char${charId}-name">
                ???
            </h2>

            <div class="character-image-box">

                <img
                    id="char${charId}-image"
                    src="mark_question.png"
                    alt="未発見の精霊"
                >

            </div>

            <p id="char${charId}-desc">
                まだ発見していません
            </p>

        `;


        list.appendChild(card);

    }

}


// =========================
// キャラクターを発見
// =========================

function discoverCharacter(
    charId,
    showScreen = true
) {

    const character =
        characters[charId];


    if (!character) {
        return;
    }


    const nameElement =
        document.getElementById(
            `char${charId}-name`
        );

    const imageElement =
        document.getElementById(
            `char${charId}-image`
        );

    const descElement =
        document.getElementById(
            `char${charId}-desc`
        );


    if (!nameElement ||
        !imageElement ||
        !descElement) {

        return;

    }


    // 図鑑の表示を変更

    nameElement.textContent =
        character.number +
        " " +
        character.name;


    imageElement.src =
        character.image;


    imageElement.alt =
        character.name;


    descElement.textContent =
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
        character.desc,
        character.skill,
        character.catchphrase,
        character.favoritePlace,
        character.author,
        character.authorAge
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

        const character =
            characters[charId];


        if (
            localStorage.getItem(
                character.storageKey
            ) === "found"
        ) {

            count++;

        }

    }


    document.getElementById(
        "count"
    ).textContent =

        "発見数 " +
        count +
        " / " +
        Object.keys(characters).length;

}


// =========================
// 保存済みデータを読み込む
// =========================

function loadSavedCharacters() {

    for (const charId in characters) {

        const character =
            characters[charId];


        if (
            localStorage.getItem(
                character.storageKey
            ) === "found"
        ) {

            // 発見画面は出さず
            // 図鑑だけ復元

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

    const result =
        confirm(
            "図鑑の発見データをリセットしますか？"
        );


    if (!result) {
        return;
    }


    for (const charId in characters) {

        const character =
            characters[charId];


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

    const params =
        new URLSearchParams(
            window.location.search
        );


    const charId =
        params.get("char");


    if (characters[charId]) {

        discoverCharacter(
            charId
        );

    }

}


// =========================
// 発見画面を表示
// =========================

function showDiscoverScreen(
    name,
    image,
    desc,
    skill = "",
    catchphrase = "",
    favoritePlace = "",
    author = "",
    authorAge = ""
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


    // 詳細情報

    document.getElementById(
        "discover-skill"
    ).textContent = skill;


    document.getElementById(
        "discover-catchphrase"
    ).textContent = catchphrase;


    document.getElementById(
        "discover-favorite-place"
    ).textContent = favoritePlace;


    document.getElementById(
        "discover-author"
    ).textContent =
        author +
        (authorAge ? "（" + authorAge + "）" : "");


    // 詳細情報の表示・非表示

    const details =
        document.getElementById(
            "discover-details"
        );


    if (
        skill ||
        catchphrase ||
        favoritePlace ||
        author
    ) {

        details.style.display = "block";

    } else {

        details.style.display = "none";

    }


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

    // まずカードを15体生成
    createCharacterCards();


    // 保存済みデータを復元
    loadSavedCharacters();


    // 発見数を更新
    updateCount();


    // URLに ?char=1 などがあれば発見
    unlockCharacterFromURL();

};

// =========================
// キャラクター詳細画面
// =========================

function showCharacterDetail(charId) {

    const character =
        characters[charId];

    if (!character) {
        return;
    }


    document.getElementById(
        "detail-number"
    ).textContent =
        character.number;


    document.getElementById(
        "detail-name"
    ).textContent =
        character.name;


    document.getElementById(
        "detail-image"
    ).src =
        character.image;


    document.getElementById(
        "detail-image"
    ).alt =
        character.name;


    document.getElementById(
        "detail-desc"
    ).textContent =
        character.desc;


    document.getElementById(
        "detail-skill"
    ).textContent =
        character.skill || "―";


    document.getElementById(
        "detail-catchphrase"
    ).textContent =
        character.catchphrase || "―";


    document.getElementById(
        "detail-favorite-place"
    ).textContent =
        character.favoritePlace || "―";


    document.getElementById(
        "detail-author"
    ).textContent =
        character.author
            ? character.author +
              (character.authorAge
                ? "（" + character.authorAge + "）"
                : "")
            : "―";


    document.getElementById(
        "character-detail-screen"
    ).style.display = "flex";

}


// =========================
// キャラクター詳細を閉じる
// =========================

function closeCharacterDetail() {

    document.getElementById(
        "character-detail-screen"
    ).style.display = "none";

}


// =========================
// 大きな画像を表示
// =========================

function openBigImage() {

    const image =
        document.getElementById(
            "detail-image"
        );


    const bigImage =
        document.getElementById(
            "big-image"
        );


    bigImage.src =
        image.src;


    bigImage.alt =
        image.alt;


    document.getElementById(
        "big-image-screen"
    ).style.display = "flex";

}


// =========================
// 大きな画像を閉じる
// =========================

function closeBigImage() {

    document.getElementById(
        "big-image-screen"
    ).style.display = "none";

}