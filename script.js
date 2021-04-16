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

const bookmark = document.querySelector(".btn-bookmark");

bookmark.addEventListener("click", () => {
  bookmark.innerHTML = `
  <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle fill="#147b74" cx="21" cy="21" r="21" />
                <path transform="translate(-7,-4)" fill="#FFF" d="M23 19v18l5-5.058L33 37V19z" />
              </g>
            </svg> Bookmarked
  `;
  bookmark.style.color = "#147b74";
  bookmark.style.background = `#d9e6e5`;
});

const open_nav = document.querySelector('#open_nav');
const close_nav = document.querySelector('#close_nav');
const nav_modalo = document.getElementById('ham-nav-modal_container');

open_nav.addEventListener('click', () => {
  nav_modalo.classList.add('show');
});

close_nav.addEventListener('click', () => {
  nav_modalo.classList.remove('show');
});