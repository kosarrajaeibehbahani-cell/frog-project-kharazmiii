const questions = [
    { q: "15 + 27", answer: 42 },
    { q: "12 × 8", answer: 96 },
    { q: "5 - 12", answer: -7 },
    { q: "1/2 + 1/4 (به صورت اعشاری)", answer: 0.75 },
    { q: "3x + 5 = 20 ، مقدار x؟", answer: 5 }
];

let currentLevel = 0;
let score = 0;

function showQuestion() {
    document.getElementById("level").innerText =
        "مرحله " + (currentLevel + 1);

    document.getElementById("question").innerText =
        questions[currentLevel].q + " = ؟";
}

function checkAnswer() {
    const userAnswer = Number(
        document.getElementById("answer").value
    );

    const message = document.getElementById("message");

    if (document.getElementById("answer").value === "") {
        message.innerText = "اول جوابت را وارد کن!";
        return;
    }

    if (userAnswer === questions[currentLevel].answer) {

        score += 10;

        message.innerText = "آفرین! قورباغه پرید! 🐸";

        document.getElementById("score").innerText =
            "امتیاز: " + score;

        currentLevel++;

        if (currentLevel < questions.length) {

            document.getElementById("frog").style.right =
                (5 + currentLevel * 18) + "%";

            setTimeout(() => {
                showQuestion();
                document.getElementById("answer").value = "";
            }, 1000);

        } else {
            message.innerText =
                "🎉 تبریک! تمام مراحل را با موفقیت گذراندی!";
            document.getElementById("question").innerText =
                "تو برنده شدی!";
        }

    } else {
        message.innerText = "اشتباهه! دوباره تلاش کن.";
    }
}

showQuestion();