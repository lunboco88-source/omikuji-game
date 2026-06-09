const button = document.getElementById("OmikujiButton");
const result = document.getElementById("result");
const resultImage = document.getElementById("resultImage");
const img = document.getElementById("img");

const omikujis = [
    {
        name: "大吉",
        image: "images/omikuji_daikichi.png"
    },
    {
        name: "吉",
        image: "images/omikuji_kichi.png"
    },
    {
        name: "中吉",
        image: "images/omikuji_chuukichi.png"
    },
    {
        name: "小吉",
        image: "images/omikuji_syoukichi.png"
    },
    {
        name: "末吉",
        image: "images/omikuji_suekichi.png"
    },
    {
        name: "大凶",
        image: "images/omikuji_daikyou.png"
    }
];

button.addEventListener("click", function() {

    // ランダム決定
    const idx = Math.floor(Math.random() * omikujis.length);

    // 前回のアニメーションをリセット
    img.classList.remove("spin");

    // ブラウザに再描画させる
    void img.offsetWidth;

    // 回転開始
    img.classList.add("spin");

    // 1秒後に結果表示
    setTimeout(function() {
        resultImage.classList.remove("hidden");

        result.textContent = omikujis[idx].name;
        resultImage.src = omikujis[idx].image;


    }, 1000);
});