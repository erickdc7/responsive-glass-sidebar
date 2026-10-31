/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId) => {
    const toggle = document.getElementById(toggleId),
        sidebar = document.getElementById(sidebarId)

    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('show-sidebar')
    })
}

showSidebar('header-toggle', 'sidebar')

/*=============== SHOW SIDEBAR LIST ===============*/
const drop = document.querySelectorAll('.drop')

drop.forEach(item => {
    const dropBtn = item.querySelector('.drop__button'),
        dropList = item.querySelector('.drop__list')

    dropBtn.addEventListener('click', () => {

    })
})