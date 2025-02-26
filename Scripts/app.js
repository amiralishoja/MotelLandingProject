const navToggleIcon = document.querySelector('.btn-menu')
const menu = document.querySelector(".menu")
const cover = document.querySelector('.cover')
const panelsItems = document.querySelectorAll('.panels-item')

navToggleIcon.addEventListener('click',function (){
    this.classList.toggle('btn-menu--active')
    menu.classList.toggle('menu--show')
    cover.classList.toggle('cover--show')
})

function navigationTabsInit(listItems, listItemActiveClass, contentItemShowClass) {
    listItems.forEach(listItem => {
        listItem.addEventListener('click', function () {
            removeActiveClass(listItemActiveClass)
            removeActiveClass(contentItemShowClass)
            this.classList.add(listItemActiveClass)
            let contentId = this.getAttribute('data-content-id')
            document.querySelector(contentId).classList.add(contentItemShowClass)
        })
    })
}
function removeActiveClass(className){
    document.querySelector(`.${className}`).classList.remove(className)
}

navigationTabsInit(panelsItems,'panels-item--active','package--show')