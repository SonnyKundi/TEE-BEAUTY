// const selectElement = document.querySelector('#myDropdown');
// const displayElement = document.querySelector('#selectedOption');

// selectElement.addEventListener('change', (event) => {
//   const selectedOption = event.target.value;
//   displayElement.textContent = selectedOption;
// });


//show navbar
const nav = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle');
toggle.onclick = function(){
    nav.classList.toggle('show-nav')
}


//remove navbar

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.querySelector('.nav-menu')
    navMenu.classList.remove('show-nav')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//change active color

const linkColor = document.querySelectorAll('.nav-link')
function colorLink(){
    if (linkColor) {
        linkColor.forEach(L => L.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(L => L.addEventListener('click', colorLink))

//Change Header Background when scrolling down

function scrollHeader(){
  const scrollHeader = document.getElementById('header')
  if(this.scrollY >= 200){
      scrollHeader.classList.add('scroll-header')
  }
  else{
      scrollHeader.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader);

//dropdown
const selectCategory = document.querySelector('#myDropdown');
const selectedOption = document.querySelector('#selectedOption span:last-of-type');

function selectOption() {
  console.log('selectOption function called!');
  var selectedValue = document.getElementById("myDropdown").value;
  document.getElementById("selectedOption").innerHTML = selectedValue;
}

selectCategory.addEventListener('change', () => {
  selectedOption.textContent = selectCategory.value;
});
