const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

let pledge = document.querySelectorAll(".pledge");
let price = document.querySelectorAll(".price");
let radio = document.querySelectorAll("input[name=pledge1]");

function check() {
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].type == 'radio' && radio[i].checked) {
      radio[i].parentElement.parentElement.parentElement.style.borderColor = "#147b74";
      radio[i].parentElement.parentElement.nextElementSibling.style.display = "flex";
    } else {
      radio[i].parentElement.parentElement.parentElement.style.borderColor = `rgba(122,122,122,0.3)`;
      radio[i].parentElement.parentElement.nextElementSibling.style.display = "none";
    }
  }
}


const openo = document.querySelectorAll('#open');
const close = document.querySelector('#close');
const modalo = document.getElementById('modal_container');

for (let i = 0; i < openo.length; i++) {
  let opena = openo[i];
  opena.addEventListener('click', () => {
    modalo.classList.add('show');
  });

  close.addEventListener('click', () => {
    modalo.classList.remove('show');
  });
}