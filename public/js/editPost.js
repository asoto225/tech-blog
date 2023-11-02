

// const editButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//         const id = event.target.getAttribute('data-id');
//         const dataToEdit = document.querySelector('#post-desc', '#post-name');

//         const response = await fetch(`/api/posts/${id}`, {
//             method: 'PUT',
//             body: JSON.stringify(dataToEdit),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (response.ok) {
//             document.location.replace('/profile');
//         } else {
//             alert('Failed to edit project');
//         }
//     }
// };

// function editPost() {
//     const titleElement = document.getElementById('title');
//     const descriptionElement = document.getElementById('description');

//     const titleInput = document.createElement('input');
//     titleInput.value = titleElement.textContent;
//     const descriptionInput = document.createElement('input');
//     descriptionInput.value = descriptionElement.textContent;

//     titleElement.innerHTML = '';
//     titleElement.appendChild(titleInput);
//     descriptionElement.innerHTML = '';
//     descriptionElement.appendChild(descriptionInput);

//     // Add a "Save" button to save the changes
//     const saveButton = document.createElement('button');
//     saveButton.textContent = 'Save';
//     saveButton.addEventListener('click', () => saveChanges(titleInput, descriptionInput));
//     descriptionElement.appendChild(saveButton);
// }

// async function saveChanges(titleInput, descriptionInput) {
//     const id = document.querySelector('.btn-warning').getAttribute('data-id'); // Get the post ID from the "EDIT" button

//     const newTitle = titleInput.value;
//     const newDescription = descriptionInput.value;

//     const dataToEdit = { title: newTitle, description: newDescription };

//     const response = await fetch(`/api/posts/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify(dataToEdit),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });

//     if (response.ok) {
//         document.location.replace('/profile');
//     } else {
//         alert('Failed to edit project');
//     }
// }


// document
//     .addEventListener('DOMContentLoaded', () => {
//         // Your event listener setup here
//         document.querySelector('.edit-btn').addEventListener('click', editPost);
//     });

document.addEventListener('DOMContentLoaded', () => {
    // Attach the click event listener to the button with class 'edit-btn'
    document.querySelector('.edit-btn').addEventListener('click', editPost);
});

function editPost() {
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');

    // Check if edit mode is already active (prevents multiple click issues)
    if (titleElement.querySelector('input') || descriptionElement.querySelector('input')) {
        return;
    }

    const titleText = titleElement.textContent;
    const descriptionText = descriptionElement.textContent;

    const titleInput = document.createElement('input');
    titleInput.value = titleText;

    const descriptionInput = document.createElement('input');
    descriptionInput.value = descriptionText;

    // Replace the existing content with the input fields
    titleElement.innerHTML = '';
    titleElement.appendChild(titleInput);
    descriptionElement.innerHTML = '';
    descriptionElement.appendChild(descriptionInput);

    // Add a "Save" button to save the changes
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.addEventListener('click', () => saveChanges(titleInput, descriptionInput));
    descriptionElement.appendChild(saveButton);
}

async function saveChanges(titleInput, descriptionInput) {
    const id = document.querySelector('.btn-outline-warning').getAttribute('data-id'); // Get the post ID from the "EDIT" button

    const newTitle = titleInput.value;
    const newDescription = descriptionInput.value;

    const dataToEdit = { title: newTitle, description: newDescription };

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(dataToEdit),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        alert('Post edited successfully!');
        document.location.replace('/profile');
    } else {
        alert('Failed to edit project');
    }
}
