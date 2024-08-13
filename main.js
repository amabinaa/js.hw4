//a
function greeting(name, yearOfBirth, year ) {

    let text =  name + ' , ваш возраст ' + (year-yearOfBirth)
    return text
}
let name = prompt(" Введите свое имя: ")
let yearOfBirth = +prompt(" Введите свой год рождения: ")
let year = +prompt(" Введите нынешний год: ")

console.log(greeting(name, yearOfBirth, year));

//b

function rand(min,max) {
    return Math.floor(Math.random() * (max + 1 - min ) + min )
}


let minNumber = +prompt('Введите минимальный диапазон') 
let maxNumber = +prompt('Введите максимальный диапазон') 
let n = +prompt(" Количество математических примеров :")

for(let i = 0; i <=n ;i++) {
    const randomNumber = Math.round(Math.random() * 4)

    let one = rand(minNumber, maxNumber)
    let two = rand(minNumber, maxNumber)
    let res
    let task

    if (randomNumber === 1) {
        task = one + " + " + two
        res = one + two
    } else if (randomNumber === 2){
        task = one + " - " + two
        res = one - two
    } else if (randomNumber === 3){
        task = one + " * " + two
       res = one * two
    } else if (randomNumber === 4){
        task = one + " / " + two
        res = one / two
    }


    let answer = +prompt( task + ' = ' )
    let word = answer == (res) ? 'Ваш ответ верный - ' + answer : 'Ваш ответ не верный - ' + answer + ". Правильный ответ - " + res + " !"
    alert(word)
}