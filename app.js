var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("input", updatePreview);
function updatePreview() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var experience = document.getElementById("experience").value;
    var education = document.getElementById("education").value;
    // Debugging log to see if values are being captured
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Experience:", experience);
    console.log("Education:", education);
    var preview = "\n        <h3>".concat(name, "</h3>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h4>Experience</h4>\n        <p>").concat(experience, "</p>\n        <h4>Education</h4>\n        <p>").concat(education, "</p>\n    ");
    var resumePreview = document.getElementById("resumePreview");
    resumePreview.innerHTML = preview;
}
