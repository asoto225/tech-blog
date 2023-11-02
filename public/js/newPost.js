const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-name').value.trim();
    const description = document.querySelector('#post-desc').value.trim();

    if (title && description) {
        console.log(title, description);
        console.log(JSON.stringify({ title, description }));
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description })
        });
        console.log(response)

        if (response.ok) {
            alert('Post created successfully');
            document.location.replace('/profile');
        } else {
            alert('Failed to create post');
        }
    }
};

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
