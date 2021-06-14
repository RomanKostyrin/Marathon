const cars = document.querySelectorAll('.car')
const cities = document.querySelectorAll('.city')
const button = document.querySelector('.button')
const containers = document.querySelectorAll('.container')

cars.forEach((car) => {
  car.addEventListener('click', () => {
    cleareActiveClasses(cars)
    car.classList.add('active')
  })
})

cities.forEach((city) => {
  city.addEventListener('click', () => {
    cleareActiveClasses(cities)
    city.classList.add('active')
  })
})

function cleareActiveClasses(items) {
  items.forEach((item) => {
    item.classList.contains('active') ? item.classList.remove('active') : null
  })
}

button.addEventListener('click', () => {
  button.classList.toggle('button--top')
  containers.forEach((container) => {
    container.classList.toggle('container--active')
  })
})
