'use strict'

{
    // classlistのメソッド例
    // contain, add, remove, toggle
    document.querySelector('button').addEventListener('click', () => {
        // if (document.querySelector('p').classList.contains('pink-bg') === true) {
        //     // removeメソッドでスタイルの削除が可能
        //     document.querySelector('p').classList.remove('pink-bg');
        // } else {
        //     // addメソッドはカンマ区切りで複数のスタイル指定ができる
        //     document.querySelector('p').classList.add('pink-bg');
        // }
        // ↑　と同じ処理　↓
        document.querySelector('p').classList.toggle('pink-bk');
    })
}

{
    console.log('複数の要素の操作')
    
}