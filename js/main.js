
//lightbox

lightbox.option({
      'resizeDuration': 100,
      'imageFadeDuration': 100,
      'wrapAround': true,
      'disableScrolling': true,
    })

//searchJS

const inputSearchIcon = document.querySelector('.input__search-icon')
const inputCloseIcon = document.querySelector('.input__close-icon')
const searchInput = document.querySelector('.search__input')
const searchInputBox = document.querySelector('.search__input-box')
 const sendIcon = document.querySelector('.send-icon')

 function inputAnimaned() {
      searchInput.classList.toggle('input-active')
      searchInputBox.classList.toggle('search__input-box-active')

       inputSearchIcon.classList.toggle('icon-disactive')
       inputSearchIcon.classList.toggle('icon-active')

       inputCloseIcon.classList.toggle('icon-disactive')
       inputCloseIcon.classList.toggle('icon-active')


      
       sendIcon.classList.toggle('icon-disactive')
      

       searchInput.focus()
       searchInput.value = ''
 }

  function dropdownAnimated(){
      setTimeout(() =>{
            dropdownContainer.classList.toggle('scale-none')
            dropdownContainer.classList.toggle('scale')

            // setTimeout(() =>{
            //     if(dropdown.classList.contains('disactive')){
            //        dropdownContainer.classList.add('scale-none')
            //        dropdownContainer.classList.remove('scale')
            //     } else if (dropdown.classList.contains('active')){
            //       dropdownContainer.classList.add('scale')
            //       dropdownContainer.classList.remove('scale-none')
            //     }
            // }, 300)
       }, 300)
  }

inputSearchIcon.addEventListener('click', () =>{
      inputAnimaned()
      dropdownAnimated()
})

document.addEventListener('scroll', () =>{
      document.querySelector('.header')
      .style.boxShadow = '1px 1px 10px rgb(232, 220, 220)';
})

// notificationJS

const notificationIcon = document.querySelector('.notification-icon')
const notificationDiv = document.querySelector('.notification-div')
const notificationCloseIcon = document.querySelector('.notification__clear-icon')

function notificationAnimated(){
      notificationDiv.classList.toggle('icon-active')

      notificationDiv.classList.toggle('notification-div-default')
      notificationDiv.classList.toggle('notification-div-animation')

      const noNotification = document.querySelector('.no-notification')

      const notifLength = notificationDiv.children.length

      if(notifLength === 2){
            noNotification.classList.add('dblock')
            noNotification.classList.remove('dnone')
      } else if (notifLength > 2) {
            noNotification.classList.add('dnone')
            noNotification.classList.remove('dblock')
      }
}

notificationIcon.addEventListener('click', notificationAnimated)

notificationCloseIcon.addEventListener('click', () =>{
      notificationDiv.classList.remove('icon-active')
      notificationDiv.classList.toggle('notification-div-default')
      notificationDiv.classList.toggle('notification-div-animation')
})


//dropdownJS

const dropdownContainer = document.querySelector('.dropdown-container')
const popularTheme = document.querySelectorAll('.most-popular-item')

for (const item of popularTheme) {
      item.addEventListener('click', () =>{
         searchInput.value = item.childNodes[1].textContent 
      })  
}


//registration dropdown 

const registrationIcon = document.querySelector('.registration-icon')
const registrationDropdown = document.querySelector('.registration-dropdown')

registrationIcon.addEventListener('click', () =>{
      registrationDropdown.classList.toggle('reg-dropdown-disactive')
})








