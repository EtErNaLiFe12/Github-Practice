import Dropdown from 'bootstrap/js/dist/dropdown'
import Modal from 'bootstrap/js/dist/modal'
const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map(function (dropdownToggleEl) {
 return new Dropdown(dropdownToggleEl)
})

new Modal(document.querySelector('#exampleModal'),{ // Modal component 초기화 (component 마다 초기화 해서 사용해야되는 것들이 있음.)
  backdrop: 'static'
})
// return new bootstrap.Dropdown(dropdownToggleEl)

// const emailInputEl = document.querySelector('#exampleInputEmail1')
// const modalEl = document.querySelector('#exampleModal')

// modalEl.addEventListener('shown.bs.modal', function () {
//   emailInputEl.focus()
// })

// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })