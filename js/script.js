const text = document.querySelector('.text-area');
const previous_word = document.querySelector('.previous-word') ;
const past_word = [];
const reset_button = document.querySelector('.reset');
const history = document.querySelector('.history');
const word_history = document.querySelector('.word-history');
const start_array = [
  "りんご",
  "さくら",
  "ねこ",
  "つみき",
  "いぬ",
  "くつ",
  "ひこうき",
  "そら",
  "はな",
  "みず"
];


// 初めの単語をstart_array配列からランダムで選ぶ関数
function start() {
    const randomIndex = Math.floor(Math.random() * start_array.length);
    previous_word.textContent = start_array[randomIndex];
};

// リセット関数
function reset() {
    past_word.length = 0; 
    text.value = '';
    start();
    word_history.innerHTML = '';
};

window.onload = function() {
  // ページが完全に読み込まれたときに実行したい処理
  start();
  reset();
};

// リセットボタンを押したとき
reset_button.addEventListener('click', function() {  
    reset();
});

// Enterキーを押したとき
text.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        addElement();
    }
});

function addElement() {
    // しりとり内部
    const previous = previous_word.textContent;
    const text_word = text.value;
    console.log(previous.slice(-1))
    console.log(text_word.slice(0,1));

    // 失敗条件１：もし「ん」で終わったら、即終了
    if (text_word.slice(-1) === "ん") {
        alert('「ん」がついたからまけだよ');
        reset();
        return;
    };

    // 失敗条件２：もし直前の単語の末尾と入力した単語の先頭が一緒じゃないなら、警告
    if (previous.slice(-1) !== text_word.slice(0,1)) {
        alert('前の言葉のおわりと、次の言葉のはじまりがちがってるよ');
        return;
    };

    // 失敗条件３：過去に使用した単語が入力されている
    if (past_word.includes(text_word) === true) {
        alert('もう使った言葉だから、まけだよ');
        reset();
        return;
    };

    past_word.push(text_word);
    text.value = '';
    const li = document.createElement('li');
    li.textContent = text_word;
    word_history.appendChild(li);

    // 直前の単語をtext_wordに変換
    previous_word.textContent = text_word;
    console.log(past_word);
};
