document.getElementById('cv-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name-input').value;
    const education = document.getElementById('education-input').value;
    const skills = document.getElementById('skills-input').value;

    const photoFile = document.getElementById('photo-upload').files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        localStorage.setItem('photo', event.target.result);
        localStorage.setItem('name', name);
        localStorage.setItem('education', education);
        localStorage.setItem('skills', skills);

        // Redirect to the display page
        window.location.href = 'display.html';
    };

    if (photoFile) {
        reader.readAsDataURL(photoFile);
    }
});
