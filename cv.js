function generateCV() {
    const name = document.getElementById('nameField').value;
    const username = document.getElementById('usernameField').value;
    const contact = document.getElementById('contactField').value;
    const address = document.getElementById('addressField').value;
    const fb = document.getElementById('fbField').value;
    const insta = document.getElementById('instaField').value;
    const linkedin = document.getElementById('linkedinField').value;
    const objective = document.getElementById('objectiveField').value;
    const workExperience = document.getElementById('weField').value;
    const academicQualification = document.getElementById('eqField').value;

    if (!name || !username) {
        alert("Please fill in the required fields: Name and Username!");
        return;
    }

    const uniqueLink = `https://yourdomain.com/resume/${username}`;
    const resumeData = {
        name,
        username,
        contact,
        address,
        fb,
        insta,
        linkedin,
        objective,
        workExperience,
        academicQualification
    };

    // Display the shareable link
    const linkElement = document.getElementById('resume-link');
    linkElement.href = uniqueLink;
    linkElement.innerText = uniqueLink;

    document.getElementById('share-link').style.display = 'block';
    document.getElementById('download-btn').style.display = 'block';

    // Save resume data in local storage (or backend in real app)
    localStorage.setItem(username, JSON.stringify(resumeData));

    // Optionally render the generated CV (for viewing)
    renderCV(resumeData);
}

function renderCV(data) {
    const container = document.createElement('div');
    container.innerHTML = `
        <h1>${data.name}'s Resume</h1>
        <p><strong>Contact:</strong> ${data.contact}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>Objective:</strong> ${data.objective}</p>
        <p><strong>Work Experience:</strong> ${data.workExperience}</p>
        <p><strong>Academic Qualification:</strong> ${data.academicQualification}</p>
    `;
    document.body.appendChild(container);
}

function downloadPDF() {
    const resumeSection = document.querySelector('.container');
    const opt = {
        margin: 1,
        filename: `${document.getElementById('usernameField').value}_resume.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Generate and download PDF
    html2pdf().set(opt).from(resumeSection).save();
}
