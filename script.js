// 文法チェックボタンのイベントリスナー
document.getElementById('checkButton').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value;
    const results = document.getElementById('results');
    
    if (textInput.trim() === '') {
        results.innerHTML = '<p style="color: red;">文章を入力してください。</p>';
        return;
    }

    // 文のカウント
    const sentenceCount = countSentences(textInput);
    const wordCount = countWords(textInput);

    // 結果の表示
    results.innerHTML = `
        <p>文の数: ${sentenceCount}</p>
        <p>単語の数: ${wordCount}</p>
        <p>簡易的な文法チェック: <strong>${simpleGrammarCheck(textInput)}</strong></p>
    `;
});

// 文のカウント
function countSentences(text) {
    return text.split(/[。！？]/).filter(Boolean).length;
}

// 単語のカウント
function countWords(text) {
    return text.split(/\s+/).filter(Boolean).length;
}

// 簡易的な文法チェック
function simpleGrammarCheck(text) {
    const errors = [];
    if (text.includes('だ')) {
        errors.push("「だ」を避けることを推奨します。");
    }
    if (text.length > 300) {
        errors.push("文章が長すぎます。300文字以下にしてください。");
    }
    return errors.length > 0 ? errors.join(' ') : '特に問題ありません。';
}
