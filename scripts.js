function generateCV() {
    const name = document.getElementById('nameField').value;
    const contact = document.getElementById('contactField').value;
    const address = document.getElementById('addressField').value;
    const fb = document.getElementById('fbField').value;
    const insta = document.getElementById('instaField').value;
    const linkedin = document.getElementById('linkedinField').value;
    const objective = document.getElementById('objectiveField').value;
    const workExperience = document.getElementById('weField').value;
    const academicQualification = document.getElementById('eqField').value;

    const cvTemplate = `
        <html>
        <head>
            <title>Generated CV</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
            <link rel="stylesheet" href="cv.css">
        </head>
        <body>
            <div class="container">
                <h1 class="text-center my-4">Curriculum Vitae</h1>
                <h3>Personal Information</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Contact:</strong> ${contact}</p>
                <p><strong>Address:</strong> ${address}</p>
                 <hr>
                <h3>Important Links</h3>
                <p><strong>Facebook:</strong> ${fb}</p>
                <p><strong>Instagram:</strong> ${insta}</p>
                <p><strong>LinkedIn:</strong> ${linkedin}</p>
                <hr>
                <h3>Professional Information</h3>
                <p><strong>Objective:</strong> ${objective}</p>
                <p><strong>Work Experience:</strong> ${workExperience}</p>
                <p><strong>Academic Qualification:</strong> ${academicQualification}</p>
                <hr>
            </div>
        </body>
        </html>
    `;

    const newWindow = window.open();
    newWindow.document.write(cvTemplate);
}

function AddNewwEField() {
    const newNode = document.createElement('textarea');
    newNode.classList.add('form-control', 'weField', 'mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter here');
    document.getElementById('we').appendChild(newNode);
}

function AddNewAQField() {
    const newNode = document.createElement('textarea');
    newNode.classList.add('form-control', 'eqField', 'mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter here');
    document.getElementById('aqAddButton').appendChild(newNode);
}
