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

    // add the class active on clicked target btn
    clicked.classList.add('tab-active')

    // remove the active class on not active content
    tabContent.forEach(tab => {
        tab.classList.remove('items-content-active');
    })

    // now we have to put an active class on a content based on data set items from clicked btn
    document.querySelector(`.items-content-${clicked.dataset.items}`).classList.add('items-content-active')
})