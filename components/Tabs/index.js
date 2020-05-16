// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const tabFunction = (tabInfo) => {

    const tab = document.createElement('div')

    tab.textContent = tabInfo

    tab.classList.add('tab')

    return tab
}

const entryPoint = document.querySelector('.topics')

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
    console.log('api response', response.data)
response.data.topics.forEach((element) => {
    entryPoint.appendChild(tabFunction(element))
    })
})


