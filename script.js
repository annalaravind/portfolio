// DownloadButton
document.getElementById("downloadButton").addEventListener("click", function () {
    var resumeURL = "/Images/AnnaldasAravindResume.pdf";

    var downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", resumeURL);
    downloadAnchor.setAttribute("download", "AnnaldasAravindResume.pdf");
    downloadAnchor.style.display = "none";

    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();

    document.body.removeChild(downloadAnchor);
});

// Setup and start animation!
document.querySelector(".menu-icon").addEventListener("click", function () {
    const menuItems = document.querySelector("header nav ul");
    menuItems.classList.toggle("active");
});

