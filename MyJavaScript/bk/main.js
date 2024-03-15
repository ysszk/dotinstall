'use strict';

// console.log(100);
// console.log(100);

// 早期リターン
// 特殊なケースの条件分岐を先に書いてしまう方法


// 関数宣言　関数の巻き上げ
// 関数式（無名関数）

// 関数宣言のメリット:
// 巻き上げ（Hoisting）: 関数宣言はコードの実行前に処理されるため、宣言より前のコードで関数を呼び出すことができます。
// 明確な意図: 関数名が指定されているため、コードの意図が明確になります。

// 関数宣言のデメリット:
// スコープの混乱: 関数宣言は巻き上げにより、意図しないスコープで利用される可能性があります。
// 再宣言の問題: 同じスコープ内で同じ名前の関数を再宣言すると、最初の宣言が上書きされます。

// 関数式のメリット:
// 巻き上げなし: 関数式は変数の巻き上げのみが行われ、関数自体は宣言された行から利用可能です。
// 条件付き定義: 実行時に条件に応じて関数を定義することができます。

// 関数式のデメリット:
// 匿名関数のデバッグ: 関数式で匿名関数を使用すると、デバッグ時に関数名が表示されないため、デバッグが難しくなることがあります。
// メモリとパフォーマンス: ループ内で関数式を使用すると、各イテレーションで新しい関数オブジェクトが作成されるため、メモリ使用量が増加し、パフォーマンスが低下する可能性があります。


// アロー関数式
// 関数宣言の場合
// {
//     function double(num) {
//         return num * 2;
//     }
// }

// 関数式の場合
{
    let double = function (num) {
        return num * 2;
    }
    console.log(double(2));
}

// アロー関数式の場合
{
    let double = (num) => {
        return num * 2;
    }
    console.log(double(3));
}

// アロー関数式の省略形 ()の省略
{
    let double = num => {
        return num * 2;
    }
    console.log(double(4));
}

// アロー関数式の省略形　{}とreturnの省略
{
    let double = num => num * 2;
    console.log(double(5));
}

// アロー関数式でしかできないこと
// ・関数Aの引数に関数Bを渡す
// ・関数Aから関数Bを返す
// 高階関数という

{
    const calc = (num, func) => {
        return func(num);
    }
    // 引数の関数には、()をつけないことがポイント
    console.log(calc(50, num => num * 2));
}

// 高階関数の用途例　3つ

// ①コールバック関数
// 関数Aが何らかの処理を行い、
// その処理が完了した後に関数Bを実行する場合に使います。
// 例えば、データの取得が完了した後にそのデータを処理する関数をコールバックとして渡すことができます。

const fetchData = (callback) => {
    // データ取得の模擬
    setTimeout(() => {
        const data = '取得したデータ';
        callback(data);
    }, 1000);
};

const processData = (data) => {
    console.log(`処理したデータ: ${data}`);
};

// fetchDataが完了した後にprocessDataを実行
fetchData(processData);

// ②配列のメソッドとしての利用
// 配列のメソッド（例えばmap, filter, reduceなど）は、
// 関数を引数として受け取り、配列の各要素に対してその関数を適用します

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// ③イベントリスナーとしての利用
// DOM要素にイベントリスナーを設定する際、
// アロー関数を使ってイベントが発生したときの動作を定義することができます。

// document.getElementById('myButton').addEventListener('click', () => {
//     console.log('ボタンがクリックされました！');
// });

{
    const double = num => num * 2;

    const calc = (num, func) => {
        return func(num);
    }
    console.log(calc(20, double));
}

// 配列
{
    const scores = [70, 90, 80, 85,];
    console.log(scores[2]);
    console.log(scores.length);
    scores[1] = 10;
    console.log(scores);

    scores.forEach()
}

