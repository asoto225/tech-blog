const delButtonHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id)

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });
        
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete project');
        }
    }
};

document
    .querySelector('.delete-btn')
    .addEventListener('click', delButtonHandler);
// document.addEventListener('DOMContentLoaded', () => {
//     // Your event listener setup here
//     document.querySelector('.post-list').addEventListener('click', delButtonHandler);
//   });
  