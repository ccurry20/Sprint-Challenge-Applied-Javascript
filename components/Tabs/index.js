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
  const div = document.createElement("div");
  div.classList.add("tab");
  div.textContent = topic;
  return div;
}

//let tabs = document.querySelector(".topics");
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(data => {
    console.log("data.data: ", data.data);

    //   data.data.topics.forEach(item => {
    //     const newTopic = tabCreator(item);
    //     let tabs = document.querySelector(".topics");
    //     tabs.appendChild(newTopic);
    //   });
    // })

    //   const final = data.data.topics;
    //   for (var i = 0; i > final.length; i++) {
    //     const newTopic = tabCreator(item);
    //     let tabs = document.querySelector(".topics");
    //     tabs.appendChild(newTopic);
    //     //const t = data.data.topics[i].map(item => tabCreator(item));
    //     //t[i].forEach(item => {
    //     // tabs.appendChild(item);
    //     // });
    //   }
    // })

    const t = data.data.topics.map(item => tabCreator(item));
    let tabs = document.querySelector(".topics");
    t.forEach(item => {
      tabs.appendChild(item);
    });
  })

  .catch(err => {
    console.log("error: ", err);
  });
