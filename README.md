■概要

本アプリは、しりとりを一人で楽しむことができるWebアプリケーションです。基本仕様に加え、以下の追加機能を実装しました。

■必須機能

・直前の単語を表示

・任意の単語を入力可能

・入力単語の先頭と直前の単語の末尾を比較し、一致すれば更新

・「ん」で終わる単語でゲーム終了

・過去に使われた単語の再使用でゲーム終了

・リセット機能でゲームを最初からやり直せる

■追加機能

・最初の単語がランダムに決定される

・入力された単語の履歴を画面に表示

■デザインの説明

　しりとりアプリということなので、アプリのデザインは子供向けにしました。スモールビジネスデザイン研究さんの『【コピペOK】おしゃれすぎる配色50選！ホームページ・ブログの見た目を一瞬で激変！』というサイトを参考に子供っぽい配色を選びぬき、使用しました。

　また、タイトルの周りをborder-radiusで雲のような形に調整し、フォントを『M PLUS Rounded 1c』に変えました。これにより、柔らかさを表現しました。

　さらに、漢字の上にルビを振ることで子供でも読めるように配慮しました。

■実行方法

ページを開いたら、しりとりの始まりです。「直前の単語」を参考に、テキストボックスに任意の単語を書いてください。Enterキーを押すと単語が送信され、「直前の単語」と「つかったことば」に反映されます。

■使用技術

開発環境：Visual Studio Code（VS Code）
言語：HTML / CSS / JavaScript

■AI使用箇所

AI（ChatGPT）を以下の場面で活用しました。

・条件分岐の書き方：IF文の入れ子とガード節の比較を依頼し、コードの可読性向上に活用
・初期単語のアイデア：ゲーム開始時に使えるランダムな単語の候補を相談
・ページ読込時に関数実行：DOMContentLoaded の使用方法などを確認
・単語履歴のUI調整：履歴の表示位置変更方法を相談し、改善

■参考にしたWebサイト

・スモールビジネスデザイン研究【コピペOK】おしゃれすぎる配色50選！ホームページ・ブログの見た目を一瞬で激変！
https://blogdesign-recipe.com/50-three-colors-combination-ideas/

・JAJAAAN / ジャジャーン【CSS】border‑radiusで円・角丸を作る！部分的に指定する方法も
https://jajaaan.co.jp/web-production/frontend/border-radius/

・TCDテーマ　【JavaScriptの基本】テキストの取得と書き込み -textContent
https://tcd-theme.com/2022/07/javascript-dom-textcontent.html

・MDN Web Docs　String.prototype.substring()
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/substring

・MDN Web Docs　Array.prototype.find()
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/find

・キノコログ　JavaScriptで先頭・末尾の文字列を取得・削除する方法
https://kinocolog.com/javascript_first_last_slice/

・ChatGPT（OpenAI）

