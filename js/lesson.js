// PHONE CHECKER
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

const tabContentBLock = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContentBLock.forEach((item) => {
        item.style.display = 'none'
    })

    tabContentItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')

    })

}

const showTabContent = (index = 0) => {
    tabContentBLock [index].style.display = 'block'
    tabContentItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabContentItems.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}

// CONVERTER
//
// const usdInput = document.querySelector('#usd')
// const somInput = document.querySelector('#som')
// const converter = (element, targetElement) => {
//     element.oninput = () => {
//         const request = new XMLHttpRequest()
//         request.open('GET', '../data/convertor.json')
//         request.setRequestHeader('Content-type', 'application/json')
//         request.send()
//
//         request.onload = () => {
//             const data = JSON.parse(request.response)
//             if (element.id === 'som')
//                 targetElement.value = (element.value / data.usd).toFixed(2)
//         }
//         if (element.id === 'usd') {
//             targetElement.value = (element.value * data.usd).toFixed(2)
//         }
//         element.value === '' && (targetElement.value = '')
//     }
// }
// converter(somInput, usdInput)
// converter(usdInput, somInput)











const usdInput = document.querySelector('#usd');
const somInput = document.querySelector('#som');
const eurInput = document.querySelector('#eur');

fetch('../data/convertor.json')
    .then(response => response.json())
    .then(data => {
        const converter = (element, targetElement1, targetElement2) => {
            element.oninput = () => {
                if (element.value === '') {
                    targetElement1.value = '';
                    targetElement2.value = '';
                    return;
                }

                const somValue = parseFloat(element.value);

                if (!isNaN(somValue)) {
                    targetElement1.value = (somValue / data.usd).toFixed(2); // В долларах
                    targetElement2.value = ((somValue / data.usd) * data.eur_to_usd).toFixed(2); // В евро
                }
            };
        };

        converter(somInput, usdInput, eurInput);
        converter(usdInput, somInput, eurInput);
        converter(eurInput, usdInput, somInput);
    })
  




//DRY - dont`t repeat yourself - не повторяй самого себя
//KISS - keep it simple stupid - делай проще, идиот
//SOLID



















