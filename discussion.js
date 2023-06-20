// Select DOM elements 
var nameInput = document.getElementById('comment-name');
var commentInput = document.getElementById('comment-text'); 
var commentList = document.getElementById('comment-list'); 

// Add event listener to the comment form 
document.getElementById('comment-form').addEventListener('submit', function(e) {
	e.preventDefault();

	// Get the name and comment from the input fields
	var name = nameInput.value.trim(); 
	var comment = commentInput.value.trim();

	// Validate the input
	if (!name || !comment) {
		alert('Please enter your name and comment.');
		return;
	}

	// Create a new comment object 
	var newComment = document.createElement('li');
	newComment.classList.add('comment');
	newComment.innerHTML = `
	<p><strong>${name}:</strong> ${comment}</p>
	`;
	commentList.appendChild(newComment); 

	// Add the new comment to local storage 
	var comments = JSON.parse(localStorage.getItem('comments')) || [];
	comments.push({ name: name, comment: comment });
	localStorage.setItem('comments', JSON.stringify(comments));

	// Clear the input fields 
	nameInput.value = '';
	commentInput.value = '';
});

// Load existing comments 
var comments = JSON.parse(localStorage.getItem('comments')) || []; 
displayComments(comments); 

// Display comments in the comment section
function displayComments(comments) {
	for (var i = 0; i < comments.length; i++) {
		var comment = comments[i];

		var newComment = document.createElement('li'); 
		newComment.classList.add('comment');
		newComment.innerHTML = `
		<p><strong>${comment.name}:</strong> ${comment.comment}</p>
		`;
		commentList.appendChild(newComment);
	}
}
