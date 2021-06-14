const items = document.querySelectorAll('.item')
const placeholders = document.querySelectorAll('.placeholder')

items.forEach((item) => {
  item.addEventListener('dragstart', dragstart)
  item.addEventListener('dragend', dragend)
})

placeholders.forEach((placeholder) => {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
})

function dragstart(event) {
  event.target.classList.add('hold')
  setTimeout(() => {
    event.target.classList.add('hide')
  }, 0)
}
function dragend() {
  event.target.classList.remove('hold', 'hide')
}

function dragover(event) {
  event.preventDefault()
}
function dragenter(event) {
  event.target.classList.add('hovered')
}
function dragleave(event) {
  event.target.classList.remove('hovered')
}
function dragdrop(event) {
  items.forEach((item) => {
    item.classList.contains('hold') ? event.target.append(item) : null
  })
  event.target.classList.remove('hovered')
}
