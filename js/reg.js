//registration form

const signInLink = document.querySelector('.sign-in-link')
const logInLink = document.querySelector('.sign-up-link')
const signInForm = document.querySelector('.signIn-form')
const signUpForm = document.querySelector('.signUp-form')

const regFon = document.querySelector('.reg-fon')
const formsContainer = document.querySelector('.reg-form')


logInLink.addEventListener('click', (e) =>{
      e.preventDefault()
      signInForm.classList.add('center')
      signInForm.classList.remove('right')

      signUpForm.classList.remove('center')
      signUpForm.classList.add('left')

      formsContainer.style.height = '400px'
      regFon.style.background = 'url(./images/background/01.jpg)'
      regFon.style.backgroundSize = 'cover'
})

signInLink.addEventListener('click', (e) =>{
      e.preventDefault()
      signInForm.classList.remove('center')
      signInForm.classList.add('right')

      signUpForm.classList.add('center')
      signUpForm.classList.remove('left')

      formsContainer.style.height = '500px'

      regFon.style.background = 'url(./images/background/02.jpg)'
      regFon.style.backgroundSize = 'cover'
})



console.log(signInLink)