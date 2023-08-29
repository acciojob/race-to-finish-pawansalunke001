
const promises = [];

for (let i = 0; i < 5; i++) {
    const randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve(`Promise ${i + 1} resolved in ${randomTime} milliseconds`);
        }, randomTime);
    });
    promises.push(promise);
}

Promise.any(promises)
    .then(result => {
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = result;
    })
    .catch(error => {
        console.error('Error:', error);
    });
In this code, we create an array promises containing five promises. Each promise resolves after a random time between 1 and 5 seconds. Then, we use Promise.any to wait for the first promise to resolve and display its result in the <div> element with the id output. If any of the promises reject, the .catch block will handle the error.

Remember that you need to have an HTML file with a <div> element having the id "output" where the result will be displayed. The provided JavaScript code should be included in a <script> tag in the HTML file.







// Do not change the code above this
// add your promises to the array `promises`
