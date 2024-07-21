const nowDateTime = new Date()
console.log(nowDateTime)
// час генеруєтся в залежності від того оточення де був визваний конструктор

//21-07-2024
//2024-07-21
//2024-21-07
//24-07-21

//насправді дата та час зберігаются в мілісекундах (числа)
//1721569468 - timestamp
console.log(nowDateTime.getFullYear())
console.log(nowDateTime.getMonth())
console.log(nowDateTime.getDate())

//для логізації (логі - logs)

const btn = document.querySelector("button")

btn.addEventListener("click", (e) => {
  e.preventDefault()
  const date = new Date()
  console.log(`Ця кнопка була натиснута в ${date}`)
})

// вимірювання часу (секундомір)

const startDate = new Date()
for (let i = 0; i < 6; i++) {
  let x = i + 125 + Math.random() // 0 -1 0.654654351651
}
const endDate = new Date()

console.log(`цикл працював ${endDate - startDate} мілісекунд`)

function updateTimer() {
  const endDate = new Date("2024-09-01")
  const currentDate = new Date()
  const delta = endDate - currentDate

  const day = Math.floor(delta / 86400000)
  const hour = Math.floor((delta - day * 86400000) / 3600000)
  const min = Math.floor((delta - (day * 86400000 + hour * 3600000)) / 60000)
  const sec = Math.floor(
    (delta - (day * 86400000 + hour * 3600000 + min * 60000)) / 1000
  )
  const cells = document.querySelectorAll(".cell__data")
  cells[0].textContent = day
  cells[1].textContent = hour
  cells[2].textContent = min
  cells[3].textContent = sec
}
setInterval(updateTimer,1000)


//регулярні вирази (регулярка)
// умовний оператор для роботи зі строками (перевірка, знаходження частини рядку, заміна символів або групи символів)

const userEmail = '54545Mykola5455'
//паттерн
//флаги
const regularExpression = new RegExp(/[0-9]/)
console.log(regularExpression.test(userEmail))



const input = document.querySelector('#format')

input.addEventListener('input', (e) => {
 const regEx = new RegExp(/^[A-C][0-9]$/)   
const text = e.target.value
const format__tooltip = document.querySelector(".format__tooltip")

if(!regEx.test(text)) {
format__tooltip.style.display = 'flex'
input.style.backgroundColor = "#cd2e2e"
} else {
  format__tooltip.style.display = "none" 
  input.style.backgroundColor = "green"
}
})