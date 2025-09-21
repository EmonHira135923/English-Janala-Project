// Load Data from json fetch

// Load Data
const loaddata = () => {
  const URL = "https://openapi.programming-hero.com/api/levels/all";
  fetch(URL)
    .then((res) => res.json())
    .then((data) => displaydata(data.data));
};

// load id data
const loadiddata = (id) => {
  const URL2 = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(URL2)
    .then((res) => res.json())
    .then((val) => displaydata2(val.data));
  // .then((val) => console.log(val.data));
  // console.log(id);
};

// Display Data
const displaydata = (lessons) => {
  const lessoncontainer = document.getElementById("lesson-container");
  lessoncontainer.innerHTML = "";

  for (const lesson of lessons) {
    // console.log(lesson.level_no);
    const div = document.createElement("div");
    div.innerHTML = `
                <button onclick=loadiddata(${lesson.level_no}) class="btn btn-outline btn-primary">
              <i class="fa solid fa-book-open"></i>Lesson - ${lesson.level_no}
            </button>
    `;
    lessoncontainer.append(div);
  }
};

// Display id data
const displaydata2 = (iddata) => {
  const displayiddata = document.getElementById("display-id-data");
  displayiddata.innerHTML = "";
  if (iddata.length === 0) {
    displayiddata.innerHTML = `
              <div
            class="text-center col-span-full py-10 rounded-xl bg-white gogle-font-bangla"
          >
          <img src="./assets/alert-error.png" alt="No Data Found" class="mx-auto"/>
            <p class="text-gray-500 lg:text-xl font-semibold sm:text-[16px]">
              এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
            </p>
            <h2 class="font-bold lg:text-5xl mt-5 sm:text-xl">
              নেক্সট Lesson এ যান
            </h2>
          </div>
          `;
    // alert("No Data Found");
    return;
  }
  iddata.forEach((idvalue) => {
    const div = document.createElement("div");

    //     {
    //     "id": 83,
    //     "level": 1,
    //     "word": "Door",
    //     "meaning": "দরজা",
    //     "pronunciation": "ডোর"
    // }
    div.innerHTML = `
        <div
          class="bg-white rounded-xl flex flex-col justify-center px-5 py-10 sm:px-10 sm:py-16 text-center sm:text-left hover:shadow-lg transition"
        >
          <h1 class="mb-5 text-2xl font-semibold">${
            idvalue.word ? idvalue.word : "শব্দ পাওয়া যায় ‍নি"
          }</h1>
          <p class="mb-5 text-sm font-medium text-gray-900">
            Meaning / Pronunciation
          </p>
          <div class="font-semibold text-2xl gogle-font-bangla break-words">
            ${idvalue.meaning ? idvalue.word : "Meaning পাওয়া যায় ‍নি"} / ${
      idvalue.pronunciation
        ? idvalue.pronunciation
        : "Pronunciation পাওয়া যায় ‍নি"
    }
          </div>
          <!-- Icon Btn -->
          <div
            class="flex justify-center sm:justify-between items-center text-xl mt-10 gap-4"
          >
            <button
              class="p-4 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-500 hover:text-white shadow transition-all duration-300"
            >
              <i class="fa-solid fa-circle-info"></i>
            </button>
            <button
              class="p-4 rounded-full bg-green-100 text-green-600 hover:bg-green-500 hover:text-white shadow transition-all duration-300"
            >
              <i class="fa-solid fa-volume-high"></i>
            </button>
          </div>
        </div>
`;

    displayiddata.append(div);
  });
};

loaddata();
