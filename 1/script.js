function showProjectDetails(projectName) {
    const projectDetails = document.getElementById('projectDetails');
    const projectDescription = document.getElementById('projectDescription');

    if (projectName === 'Web Design') {
        projectDescription.textContent = '這是一個具有現代感的網站設計，使用了最新的前端技術。';
    } else if (projectName === 'Data Analysis App') {
        projectDescription.textContent = '這個應用程式是為了幫助用戶更好地理解和分析他們的數據。';
    }

    projectDetails.style.display = 'block';
}

function hideProjectDetails() {
    const projectDetails = document.getElementById('projectDetails');
    projectDetails.style.display = 'none';
}
