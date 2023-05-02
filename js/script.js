/* ЗАДАЧА 9 - Стрелочная функция
1. Объявите переменную и присвойте ей стрелочную функцию
2. У функции не должно быть параметров
3. Явно верните из функции строку "Привет, мир!"
4. Вызовите функцию и выведите результат в консоль*/

let hw = 'Привет мир!'

let hello_world = function () {
    let say = hw
    console.log(say);
}

hello_world(hw)


/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */

setTimeout(function myFn() {
    console.log('Hello world')
}, 2000)



/** ЗАДАЧА 30 - Колбэк функция
 *
 * 1. Что будет выведено в консоль?
 * Постарайтесь ответить без запуска кода.
 *
 * 2. Нужно ли как-то исправить этот код?
 */

setTimeout(function myFn() {
    console.log('Привет из функции myFn')
}, 2000)


/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 * 5. новый объект должен вноситься через функцию
 */

let cars = [
    {
        carBand: 'Lada i5',
        price: 100000,
        isAvailableForSale: true
    },

    {
        carBand: "BMW",
        price: 50000,
        isAvailableForSale: false
    },

    {
        carBand: "Audi",
        price: 60000,
        isAvailableForSale: true
    }
]




let result = function () {
    for(let item of cars) {
        item.color = 'black'
    }
    console.log(cars);
}

result(cars)



/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const MIN = 1000
const MAX = 9999

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]


let num = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
console.log(num);

if (myNumbers === num) {
    let num2 = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
    console.log(num2);
} else {
    myNumbers.push(num)
    console.log(myNumbers);
}



/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ['London', 'New York', 'Singapore']


let cityInfo = myCities.forEach((city, index,) => {`${city} is at the ${index} in the myCities array`});
console.log(cityInfo);



