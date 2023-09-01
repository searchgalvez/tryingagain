const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const div = document.createElement("div");
  div.classList.add("topics");

  const tabDivOne = document.createElement("div");
  tabDivOne.classList.add("tab");
  tabDivOne.textContent = topics[0];
  div.appendChild(tabDivOne);

  const tabDivTwo = document.createElement("div");
  tabDivTwo.classList.add("tab");
  tabDivTwo.textContent = topics[1];
  div.appendChild(tabDivTwo);

  const tabDivThree = document.createElement("div");
  tabDivThree.classList.add("tab");
  tabDivThree.textContent = topics[2];
  div.appendChild(tabDivThree);

  // const tabDivFour
  const tabDivFour = document.createElement("div");
  tabDivFour.classList.add("tab");
  tabDivFour.textContent = topics[3];
  div.appendChild(tabDivFour);
  // const tabDivFive
  const tabDivFive = document.createElement("div");
  tabDivFive.classList.add("tab");
  tabDivFive.textContent = topics[4];
  div.appendChild(tabDivFive);
  return div;
};

const tabsAppender =  (res) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const tabContainer = document.querySelector(res);

  axios.get(`https://lambda-times-api.herokuapp.com/topics`).then((event) => {
    // arr is the array we are fetching from axios.get
    const arr = event.data.topics;
    //  appending div fetched from Tabs function
    tabContainer.append(Tabs(arr));
    console.log(event.data.topics);
  });
};

export { Tabs, tabsAppender };
