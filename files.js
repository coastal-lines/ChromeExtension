function openFilesTab() {
    let containerMaterials = document.getElementById("divContainerMaterials");
    let tabfilesContent = document.getElementsByClassName("tabcontent");
    
    if(containerMaterials.style.visibility == "hidden") {
        containerMaterials.style.visibility = "";
        tabfilesContent[0].style.display = "block";
    }
    else {
        containerMaterials.style.visibility = "hidden";
    }
}

async function TestApi() {
    let url = 'https://localhost:44317/api/values';
    let response = await fetch(url);
    let commits = await response.json(); // читаем ответ в формате JSON
    console.log(commits)
}