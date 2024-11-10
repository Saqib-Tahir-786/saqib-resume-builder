document.getElementById("resumeForm")?.addEventListener("input", updatePreview);

function updatePreview() {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;

    // Debugging log to see if values are being captured
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Experience:", experience);
    console.log("Education:", education);

    const preview = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>Experience</h4>
        <p>${experience}</p>
        <h4>Education</h4>
        <p>${education}</p>
    `;

    const resumePreview = document.getElementById("resumePreview") as HTMLElement;
    resumePreview.innerHTML = preview;
}
