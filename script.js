'use strict'

// マス全域を変数に格納
const masuTagTd = document.getElementsByTagName('td');

// マス行を変数に格納
const masuTagTr = document.getElementsByTagName('tr');

// 黒のターンかどうかのブーリアン値
let blackTurn = true;

// 白石の置いてあるマスのindex番号の配列
const whiteStonesArr = [];

// 黒石の置いてあるマスのindex番号の配列
const blackStonesArr = [];

// 盤づくり
for (let i = 0; i < 8; i++) {
    masuTagTr[i].classList.add('board');
    // console.log(masuTagTr[i])
}
// 白石を置く関数
function putWhiteStone(index) {
    if (blackTurn === false) {
        masuTagTd[index].className = 'white';
        masuTagTd[index].textContent = "●";
        blackTurn = !blackTurn;
    }
}
// 黒石を置く関数
function putBlackStone(index) {
    if (blackTurn === true) {
        masuTagTd[index].className = 'black';
        masuTagTd[index].textContent = "●";
        blackTurn = !blackTurn;
    }
}
// 初期状態を作成
putBlackStone(28);
putWhiteStone(27);
putBlackStone(35);
putWhiteStone(36);

// 白石の置けるところを黄色で表示する関数
function canPutWhiteStone() {
    for (let i = 0; i < masuTagTd.length; i++) {
        if (masuTagTd[i].className === 'white') {
            whiteStonesArr.push(i);
        }
    }
    console.log('whiteArr',whiteStonesArr)
    /* Upper line check. */
    whiteStonesArr.map(function(numOfWhite){
        for (let upperIndex = numOfWhite + 8; upperIndex >= 0
            && upperIndex < 64
            && masuTagTd[upperIndex].id !== 'canPut'; upperIndex -= 8) {
                if (masuTagTd[upperIndex].className === 'black') {
                    if (upperIndex - 8 > 0){
                        if (masuTagTd[upperIndex - 8].className === '') {
                            masuTagTd[upperIndex - 8].id = 'canPut';
                        }
                    }
                }
            }
    });
    /* Under line check. */
    whiteStonesArr.map(function(numOfWhite){
        for (let underIndex = numOfWhite - 8; underIndex < 64
            && underIndex >= 0
            && masuTagTd[underIndex].id !== 'canPut'; underIndex += 8) {
                if (masuTagTd[underIndex].className === 'black') {
                    if (underIndex + 8 < 64) {
                        if (masuTagTd[underIndex + 8].className === '') {
                            masuTagTd[underIndex + 8].id = 'canPut';
                        }
                    }
                }
            }
    });
    /* Left line check. */
    whiteStonesArr.map(function(numOfWhite){
        for (let leftIndex = numOfWhite + 1; leftIndex >= 0
            && leftIndex < 64
            && leftIndex % 8 !== 0
            && masuTagTd[leftIndex].id !== 'canPut'; leftIndex -= 1) {
                if (masuTagTd[leftIndex].className === 'black') {
                    if (leftIndex - 1 > 0) {
                        if (masuTagTd[leftIndex - 1].className === '') {
                            masuTagTd[leftIndex - 1].id = 'canPut';
                        }
                    }
                }
            }
    });
        /* Right line check. */
    whiteStonesArr.map(function(numOfWhite){
        for (let rightIndex = numOfWhite - 1; rightIndex < 64
            && rightIndex >= 0
            && rightIndex % 8 !== 7
            && masuTagTd[rightIndex].id !== 'canPut'; rightIndex += 1) {
                if (masuTagTd[rightIndex].className === 'black') {
                    if (rightIndex + 1 < 64) {
                        if (masuTagTd[rightIndex + 1].className === '') {
                            masuTagTd[rightIndex + 1].id = 'canPut';
                        }
                    }
                }
            }
    });
        /* Diagonally upper the left line check. */
    whiteStonesArr.map(function(numOfWhite){
        for (let upperLeftIndex = numOfWhite - 9; upperLeftIndex >= 0
            && upperLeftIndex < 64
            && masuTagTd[upperLeftIndex].id !== 'canPut'; upperLeftIndex-= 9) {
                if (masuTagTd[upperLeftIndex].className === 'black') {
                    if (upperLeftIndex - 9 > 0) {
                        if (masuTagTd[upperLeftIndex - 9].className === '') {
                            masuTagTd[upperLeftIndex - 9].id = 'canPut';
                        }
                    }
                }
            }
    });
        /* Diagonally upper the right line check. */
    whiteStonesArr.map(function(numOfWhite){
        for (let upperRightIndex = numOfWhite + 7; upperRightIndex >= 0
            && upperRightIndex < 64
            && masuTagTd[upperRightIndex].id !== 'canPut'; upperRightIndex -= 7) {
                if (masuTagTd[upperRightIndex].className === 'black') {
                    if (upperRightIndex - 7 > 0) {
                        if (masuTagTd[upperRightIndex - 7].className === '') {
                            masuTagTd[upperRightIndex - 7].id = 'canPut';
                        }
                    }
                }
            }
    });
        /* Diagonally under the left line check. */
    whiteStonesArr.map(function(numOfWhite){
        for (let underLeftIndex = numOfWhite - 7; underLeftIndex < 64
            && underLeftIndex >= 0
            && masuTagTd[underLeftIndex].id !== 'canPut'; underLeftIndex += 7) {
                if (masuTagTd[underLeftIndex].className === 'black') {
                    if (underLeftIndex + 7 < 64) {
                        if (masuTagTd[underLeftIndex + 7].className === '') {
                            masuTagTd[underLeftIndex + 7].id = 'canPut';
                        }
                    }
                }
            }
    });
        /* Diagonally under the right line check. */
    whiteStonesArr.map(function(numOfWhite){
        for (let underRightIndex = numOfWhite - 9; underRightIndex < 64
            && underRightIndex >= 0
            && masuTagTd[underRightIndex].id !== 'canPut'; underRightIndex += 9) {
                if (masuTagTd[underRightIndex].className === 'black') {
                    if (underRightIndex + 9 < 64) {
                        if (masuTagTd[underRightIndex + 9].className === '') {
                            masuTagTd[underRightIndex + 9].id = 'canPut';
                        }
                    }
                }
            }
    });
}

// 黒石の置けるところを黄色で表示する関数
function canPutBlackStone() {
    for (let i = 0; i < masuTagTd.length; i++) {
        if (masuTagTd[i].className === 'black') {
            blackStonesArr.push(i);
        }
    }
    console.log('blackArr',blackStonesArr)
    /* Upper line check. */
    blackStonesArr.map(function(numOfBlack){
        for (let upperIndex = numOfBlack + 8; upperIndex >= 0
            && upperIndex < 64
            && masuTagTd[upperIndex].id !== 'canPut'; upperIndex -= 8) {
                if (masuTagTd[upperIndex].className === 'white') {
                    console.log('true')
                    if (upperIndex - 8 > 0){
                        if (masuTagTd[upperIndex - 8].className === '') {
                            masuTagTd[upperIndex - 8].id = 'canPut';
                        }
                    }
                }
            }
    });
    /* Under line check. */
    blackStonesArr.map(function(numOfBlack){
        for (let underIndex = numOfBlack - 8; underIndex < 64
            && underIndex >= 0
            && masuTagTd[underIndex].id !== 'canPut'; underIndex += 8) {
                if (masuTagTd[underIndex ].className === 'white') {
                    if (underIndex + 8 < 64) {
                        if (masuTagTd[underIndex + 8].className === '') {
                            masuTagTd[underIndex + 8].id = 'canPut';
                        }
                    }
                }
            }
    });
    /* Left line check. */
    blackStonesArr.map(function(numOfBlack){
        for (let leftIndex = numOfBlack + 1; leftIndex >= 0
            && leftIndex < 64
            && leftIndex % 8 !== 0
            && masuTagTd[leftIndex].id !== 'canPut'; leftIndex -= 1) {
                if (masuTagTd[leftIndex].className === 'white') {
                    if (leftIndex - 1 > 0) {
                    if (masuTagTd[leftIndex - 1].className === '') {
                            masuTagTd[leftIndex - 1].id = 'canPut';
                        }
                    }
                }
            }
    });
        /* Right line check. */
    blackStonesArr.map(function(numOfBlack){
        for (let rightIndex = numOfBlack - 1; rightIndex < 64
            && rightIndex >= 0
            && rightIndex % 8 !== 7
            && masuTagTd[rightIndex].id !== 'canPut'; rightIndex += 1) {
                if (masuTagTd[rightIndex].className === 'white') {
                    if (rightIndex + 1 < 64) {
                        if (masuTagTd[rightIndex + 1].className === '') {
                            masuTagTd[rightIndex + 1].id = 'canPut';
                        }
                    }
                }
            }
    });
        /* Diagonally upper the left line check. */
    blackStonesArr.map(function(numOfBlack){
        for (let upperLeftIndex = numOfBlack + 9; upperLeftIndex > 0
            && upperLeftIndex < 64
            && masuTagTd[upperLeftIndex].id !== 'canPut'; upperLeftIndex-= 9) {
                if (masuTagTd[upperLeftIndex].className === 'white') {
                    if (upperLeftIndex - 9 > 0) {
                        if (masuTagTd[upperLeftIndex - 9].className === '') {
                            masuTagTd[upperLeftIndex - 9].id = 'canPut';
                        }
                    }
                }
            }
    });
        /* Diagonally upper the right line check. */
    blackStonesArr.map(function(numOfBlack){
        for (let upperRightIndex = numOfBlack + 7; upperRightIndex > 0
            && upperRightIndex < 64
            && masuTagTd[upperRightIndex].id !== 'canPut'; upperRightIndex -= 7) {
                if (masuTagTd[upperRightIndex].className === 'white') {
                    if (upperRightIndex - 7 > 0) {
                        if (masuTagTd[upperRightIndex - 7].className === '') {
                            masuTagTd[upperRightIndex - 7].id = 'canPut';
                        }
                    }
                }
            }
    });
        /* Diagonally under the left line check. */
    blackStonesArr.map(function(numOfBlack){
        for (let underLeftIndex = numOfBlack - 7; underLeftIndex < 64
            && underLeftIndex >= 0
            && masuTagTd[underLeftIndex].id !== 'canPut'; underLeftIndex += 7) {
                if (masuTagTd[underLeftIndex].className === 'white') {
                    if (underLeftIndex + 7 < 64) {
                        if (masuTagTd[underLeftIndex + 7].className === '') {
                            masuTagTd[underLeftIndex + 7].id = 'canPut';
                        }
                    }
                }
            }
    });
        /* Diagonally under the right line check. */
    blackStonesArr.map(function(numOfBlack){
        for (let underRightIndex = numOfBlack - 9; underRightIndex < 64
            && underRightIndex >= 0
            && masuTagTd[underRightIndex].id !== 'canPut'; underRightIndex += 9) {
                if (masuTagTd[underRightIndex].className === 'white') {
                    if (underRightIndex + 9 < 64) {
                        if (masuTagTd[underRightIndex + 9].className === '') {
                            masuTagTd[underRightIndex + 9].id = 'canPut';
                        }
                    }
                }
            }
    });
}

function canPutanVisible() {
    for (let i = 0; i < masuTagTd.length; i++) {
        masuTagTd[i].id = '';
    }
}

function putStones(index) {
if  (masuTagTd[index].className === ''){
    if (masuTagTd[index].id === 'canPut'){
        if (blackTurn === true) {
            putBlackStone(index);
            return 'white';
        } else {
            putWhiteStone(index); 
            return 'black';
        }
    } else {
        alert('このマスには置けないにゃ～ฅ^•ω•^ฅ');
    }
} else {
    alert('このマスはすでに置かれているにゃ～ฅ^•ω•^ฅ');
}
}

function reverseStone(stone,index) {
    const stoneArr = [];
    let reversedStone;
    if (stone === 'black') {
        reversedStone = 'white';
    } else {
        reversedStone = 'black';
    }
    for (let i = 0; i < masuTagTd.length; i++) {
        if (masuTagTd[i].className === reversedStone) {
            stoneArr.push(i);
        }
    }
    const reverseStonesArr = [];
    const provisionalArr = [];
    /* check the upper line. */
    for (let i = index - 8; i > 0; i -= 8) {
        if (masuTagTd[i].className === stone) {
            provisionalArr.push(i);
        }
        if (masuTagTd[i].className === reversedStone){
            provisionalArr.map(num => reverseStonesArr.push(num));
            console.log('upper')
        }
    }
    /* check the under line. */
    while (provisionalArr.length > 0) {
        provisionalArr.pop()
    }
    for (let i = index + 8; i < 64; i += 8) {
        if (masuTagTd[i].className === stone) {
            provisionalArr.push(i);
        }
        if (masuTagTd[i].className === reversedStone){
            provisionalArr.map(num => reverseStonesArr.push(num));
            console.log('under')
        }
    }
    /* check the left line. */
    while (provisionalArr.length > 0) {
        provisionalArr.pop()
    }
    while (provisionalArr.length > 0) {
        provisionalArr.pop()
    }
    for (let i = index - 1; i > 0 && i % 8 !== 0; i -= 1) {
        if (masuTagTd[i].className === stone) {
            provisionalArr.push(i);
        }
        if (masuTagTd[i].className === reversedStone){
            provisionalArr.map(num => reverseStonesArr.push(num));
            console.log('left')
        }
    }
    /* check the right line. */
    while (provisionalArr.length > 0) {
        provisionalArr.pop()
    }
    while (provisionalArr.length > 0) {
        provisionalArr.pop()
    }
    for (let i = index + 1; i < 64 && i % 8 !== 7; i += 1) {
        if (masuTagTd[i].className === stone) {
            provisionalArr.push(i);
        }
        if (masuTagTd[i].className === reversedStone){
            provisionalArr.map(num => reverseStonesArr.push(num));
            console.log('right')
        }
    }
    /* check the upper left line. */
    while (provisionalArr.length > 0) {
        provisionalArr.pop()
    }
    for (let i = index - 9; i > 0; i -= 9) {
        if (masuTagTd[i].className === stone) {
            provisionalArr.push(i);
        }
        if (masuTagTd[i].className === reversedStone){
            provisionalArr.map(num => reverseStonesArr.push(num));
            console.log('upper left', i)
        }
    }
    /* check the upper right line. */
    while (provisionalArr.length > 0) {
        provisionalArr.pop()
    }
    for (let i = index - 7; i > 0; i -= 7) {
        if (masuTagTd[i].className === stone) {
            provisionalArr.push(i);
        }
        if (masuTagTd[i].className === reversedStone){
            provisionalArr.map(num => reverseStonesArr.push(num));
            console.log('upper right')
        }
    }
    /* check the under left line. */
    while (provisionalArr.length > 0) {
        provisionalArr.pop()
    }
    for (let i = index + 7; i < 64; i += 7) {
        if (masuTagTd[i].className === stone) {
            provisionalArr.push(i);
        }
        if (masuTagTd[i].className === reversedStone){
            provisionalArr.map(num => reverseStonesArr.push(num));
            console.log('under left')
        }
    }
    /* check the under right line. */
    while (provisionalArr.length > 0) {
        provisionalArr.pop()
    }
    for (let i = index + 9; i < 64; i += 9) {
        if (masuTagTd[i].className === stone) {
            provisionalArr.push(i);
        }
        if (masuTagTd[i].className === reversedStone){
            provisionalArr.map(num => reverseStonesArr.push(num));
            console.log('under right')
        }
    }
    // console.log('stoneArr',stoneArr);
    // console.log('put',index);
    // console.log('provisional',provisionalArr);
    // console.log('reverse',reverseStonesArr);
    // console.log('after',reversedStone);
    // console.log('before',stone);
    reverseStonesArr.map(num => {
        masuTagTd[num].className = reversedStone
    })
}

// 白石の個数
const whiteStones = document.getElementsByClassName('white');

// 黒石の個数
const blackStones = document.getElementsByClassName('black');

// 全ての個数
const allStones = masuTagTd;

function resetStonesArr() {
    // console.log('white before',whiteStonesArr)
    while (whiteStonesArr.length > 0) {
        // console.log('white',whiteStonesArr.length)
        whiteStonesArr.pop()
    }
    whiteStonesArr.pop()
    // console.log('white after',whiteStonesArr)
    // console.log('black before',whiteStonesArr)
    while (blackStonesArr.length > 0) {
        // console.log('black',blackStonesArr.length)
        blackStonesArr.pop()
    }
    blackStonesArr.pop()
    // console.log('black after',blackStonesArr)
}

/* オセロ本体 */
function oseroStart() {
    resetStonesArr();
    canPutBlackStone();
    for (let index = 0; index < masuTagTd.length
        && allStones.length >= whiteStones.length + blackStones.length; index++) {
        masuTagTd[index].addEventListener('click',() => {
            reverseStone(putStones(index),index);
            canPutanVisible();
            resetStonesArr();
            if (blackTurn === true) {
                canPutBlackStone();
            } else {
                canPutWhiteStone();
            }
            console.log(`白：${whiteStones.length}`);
            console.log(`黒：${blackStones.length}`);
            console.log(`全：${allStones.length}`);
        })
    }
}

oseroStart()