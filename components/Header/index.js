// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container



function headerMaker() {
    const header = document.createElement('div')
    const day = document.createElement('span')
    const h1 = document.createElement('h1')
    const temperature = document.createElement('span')

    header.appendChild(day)
    header.appendChild(h1)
    header.appendChild(temperature)

    header.classList.add('header')
    day.classList.add('date')
    temperature.classList.add('temp')

    h1.textContent = "Lambda Times"
    temperature.textContent = "98°"
    day.textContent = "SMARCH 28, 2019"
    
    return header
}

const keeper = document.querySelector('.header-container')
keeper.appendChild(headerMaker());

