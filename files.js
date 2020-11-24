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

function TestApi() {
    let response = await fetch("https://localhost:44317/api/values/");
    response.json();
    response.status;
}