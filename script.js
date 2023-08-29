Promise.any(promises)
    .then(result => {
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = result;
    })
    .catch(error => {
        console.error('Error:', error);
    });





// Do not change the code above this
// add your promises to the array `promises`
