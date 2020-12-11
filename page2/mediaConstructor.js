var listOfFiles = [];

function FileForLoad(howToLoad, type) {
    this.howToLoad = howToLoad;
    this.type = type;
}

function addMediaToListForLoad(file) {
    var type = file.getAttribute('data-type');
    var file = file.getAttribute('data-file');

    listOfFiles.push(new FileForLoad(type, file));
}