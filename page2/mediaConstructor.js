var listOfFiles = [];

//конструктор объекта Файл
function FileForLoad(howToLoad, type) {
    this.howToLoad = howToLoad;
    this.type = type;
}

function addMediaToListForLoad(file) {
    var type = file.getAttribute('data-type');
    var fileExtension = file.getAttribute('data-file');

    listOfFiles.push(new FileForLoad(type, fileExtension));
    addFileIntoPageList(fileExtension);
}

function addFileIntoPageList(file) {
    let uiUserList = document.getElementById("filesForLoadList");

    let tempText = uiUserList.innerText;
    uiUserList.innerText = tempText + " " + file;
}