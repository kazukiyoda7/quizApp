const answers_list = document.querySelectorAll('ol.answers li');

answers_list.forEach(li => li.addEventListener('click', checkClickedAnswer))

// 正しい答え
const correctAnswers = {
    question1: 'B',
    question2: 'A',
    question3: 'D',
    question4: 'B',
};

function checkClickedAnswer(event){
    // クリックされた答えの要素
    const clickedAnswerElement = event.currentTarget;
    // console.log(clickedAnswerElement)

    // 選択した答え
    const selectedAnswer = clickedAnswerElement.dataset.answer;

    const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;

    // 正しい答え
    const correctAnswer = correctAnswers[questionId];

    // メッセージを入れる変数を用意
    let message;

    // カラーコードを入れる変数を用意
    let answerColorCode;

    // 正しい答えか判定
    if (selectedAnswer === correctAnswer){
        // 正しい答えだった時
        message = "おめでとう！正解！";
        answerColorCode = "";
    } else{
        // 間違った答えだった時
        message = "残念！不正解！";
        answerColorCode = "red";
    }

    alert(message)

    // 色を変更
    document.querySelector("span#correct_answer").style.color = answerColorCode;
    // 答え全体を表示
    document.querySelector("div#section-correct-answer").style.display = 'block';
}

