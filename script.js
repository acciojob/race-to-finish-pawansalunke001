// Array to hold the promises
const promises = [];

// Function to generate a random time between 1 and 5 seconds
function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 1000; // Between 1000ms and 5000ms
}

// Create the promises and push them to the array
for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve) => {
    const time = getRandomTime();
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${time}ms`);
    }, time);
  });
  promises.push(promise);
}

// Use Promise.any() to wait for the first promise to resolve
Promise.any(promises)
  .then((result) => {
    // Print the result to the output div
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = result;
  })
  .catch((error) => {
    console.error('Error:', error);
  });


// Do not change the code above this
// add your promises to the array `promises`
