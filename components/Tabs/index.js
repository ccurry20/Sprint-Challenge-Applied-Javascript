// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



function tabCreator(topic) {
    const div = document.createElement('div');
    div.classList.add('tab');
    div.textContent = topic.topics;

    let tabs = document.querySelector(".topics");
    tabs.appendChild(div);

    return tabs; 
}

// const final = axiosData.map(div => tabCreator(div));
// const [topicEl] = document.querySelector (".topics");
// final.forEach(div => {
//     topicEl.appendChild(final);
// })


axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((axiosData) => {
  console.log('axiosData.data: ', axiosData.data);
  tabCreator(axiosData.data)
})
.catch((err) => {
  console.log('error: ', err);
})

//console.log(tabCreator(topic))