'use strict'

const tabBtn = document.querySelectorAll('.tab-item-btn');
const tabBtnContainer = document.querySelector('.tabbed-items-container');
const tabContent = document.querySelectorAll('.tab-items-content');

tabBtnContainer.addEventListener('click', e => {
    console.log(e.target)

    const clicked = e.target.closest('.tab-item-btn')
    
    // guard clause
    if(!clicked) return

    // remove class on not active tab
    tabBtn.forEach(btn => {
        btn.classList.remove('tab-active')
    })

    clicked.classList.add('tab-active')
})