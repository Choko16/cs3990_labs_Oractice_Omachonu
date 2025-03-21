document.getElementById('loginBtn').addEventListener('click', function() {
    let userType = prompt("Enter your user type (admin/student/other):");

    if (userType && userType.toLowerCase() === 'admin') {
        window.location.href = 'admin.html';
    } 
    else if (userType && userType.toLowerCase() === 'student') {
        window.location.href = 'student.html';
    } 
    else {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '<p>I don\'t know you</p>';
        contentDiv.classList.remove('hidden');
    }
});
