// const dataList = document.getElementById('data-list');
// const thoughtDisplay = document.getElementById('thoughtDisplay');
// const nameDisplay = document.getElementById('nameDisplay');
// const nextBtn = document.getElementById('next');
// const prevBtn = document.getElementById('prev');

// let data = [];
// let currentIndex = 0;

// // Function to fetch data from the server
// const fetchData = () => {
//     axios.get('/api/test')
//         .then(res => {
//             data = res.data;
//             currentIndex = 0;
//             displayData();
//         })
//         .catch(error => {
//             console.error(error);
//         });
// };

// // Function to display data one by one
// const displayData = () => {
//     if (currentIndex < data.length) {
//         const item = data[currentIndex];
//         thoughtDisplay.innerHTML = item.thought;
//         nameDisplay.innerHTML = item.name;
//         currentIndex++;
//     }
// };

// // Event listener for the "Next" button
// nextBtn.addEventListener('click', displayData);

// // Initial data fetch when the page loads
// fetchData();


const dataList = document.getElementById('data-list');
const thoughtDisplay = document.getElementById('thoughtDisplay');
const nameDisplay = document.getElementById('nameDisplay');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let data = [];
let currentIndex = 0;

// Function to fetch data from the server
const fetchData = () => {
    axios.get('/api/test')
        .then(res => {
            data = res.data;
            currentIndex = 0;
            displayData();
        })
        .catch(error => {
            console.error(error);
        });
};

// Function to display data one by one
const displayData = () => {
    if (currentIndex >= 0 && currentIndex < data.length) {
        const item = data[currentIndex];
        thoughtDisplay.innerHTML = `"${item.thought}"`;
        nameDisplay.innerHTML = `by ${item.name}`;
    }
};

// Event listener for the "Next" button
nextBtn.addEventListener('click', () => {
    if (currentIndex < data.length - 1) {
        currentIndex++;
        displayData();
    }
});

// Event listener for the "Previous" button
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayData();
    }
});

// Initial data fetch when the page loads
fetchData();


function handleSubmit(event) {
    event.preventDefault(); 

    const thought = document.getElementById('thought').value;
    const name = document.getElementById('name').value;

    if (thought.trim() === '' || name.trim() === '') {
        alert("Please enter both a thought and your name.");
        return;
    }

    const data = {
        thought: thought,
        name: name
    };

    axios.post('/api/user-data', data)
        .then(res => {
            console.log(res.data);
            // Clear the textarea and input fields
            document.getElementById('thought').value = "";
            document.getElementById('name').value = "";

            // Hide the modal
            const modal = document.getElementById('exampleModal');
            bootstrap.Modal.getInstance(modal).hide();
        })
        .catch(error => {
            console.error(error);
        });
}