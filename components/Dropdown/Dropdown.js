class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => this.toggleContent())
  }

  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));

// @@@@@@@@@@@@@@@@@@@@ Stretch Goal @@@@@@@@@@@@@@@@@@@@
const knightButton = document.querySelector('.knight-button')

knightButton.addEventListener('click', () => {
  if (knightButton.textContent === 'Knight Mode') {
    document.querySelector('body').style.backgroundColor = 'black'
    document.querySelector('.header-container').style.backgroundColor = 'yellow'
    document.querySelector('.dropdown-button').style.borderColor = 'black'
    document.querySelector('.dropdown-button').style.color = 'black'
    document.querySelector('.dropdown-content').style.backgroundColor = 'black'
    document.querySelector('.dropdown-content').style.borderColor = 'yellow'
    document.querySelectorAll('.dropdown-link').forEach( item => item.style.color = 'yellow')
    document.querySelectorAll('.section').forEach(item => item.style.borderColor = 'yellow')
    document.querySelectorAll('.box-title').forEach( item => item.style.color = 'white')
    document.querySelectorAll('.box-description').forEach( item => item.style.color = 'white')
    document.querySelector('.tabs-links').style.backgroundColor = 'yellow'
    document.querySelectorAll('.tabs-link').forEach( item => item.style.backgroundColor = 'yellow')
    document.querySelectorAll('.tabs-link').forEach( item => item.style.color = 'black')
    document.querySelectorAll('.tabs-item').forEach( item => item.style.color = 'white')
    knightButton.textContent = 'Lambda Mode'
    knightButton.style.color = 'white'
    knightButton.style.backgroundColor = 'red'
  }
  else if (knightButton.textContent === 'Lambda Mode') {
    document.querySelector('body').style.backgroundColor = ''
    document.querySelector('.header-container').style.backgroundColor = ''
    document.querySelector('.dropdown-button').style.borderColor = ''
    document.querySelector('.dropdown-button').style.color = ''
    document.querySelector('.dropdown-content').style.backgroundColor = ''
    document.querySelector('.dropdown-content').style.borderColor = ''
    document.querySelector('.dropdown-link').style.color = ''
    document.querySelectorAll('.dropdown-link').forEach( item => item.style.color = '')
    document.querySelectorAll('.section').forEach(item => item.style.borderColor = '')
    document.querySelectorAll('.box-title').forEach( item => item.style.color = '')
    document.querySelectorAll('.box-description').forEach( item => item.style.color = '')
    document.querySelector('.tabs-links').style.backgroundColor = ''
    document.querySelectorAll('.tabs-link').forEach( item => item.style.backgroundColor = '')
    document.querySelectorAll('.tabs-link').forEach( item => item.style.color = '')
    document.querySelectorAll('.tabs-item').forEach( item => item.style.color = '')
    knightButton.textContent = 'Knight Mode'
    knightButton.style.color = ''
    knightButton.style.backgroundColor = ''
  }
})