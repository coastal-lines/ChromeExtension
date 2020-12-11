function showAdditionalOptions() {
    let formAdditionalOptions = document.getElementById('formAdditionalOptions');

    if(formAdditionalOptions.style.visibility == "hidden") {
        formAdditionalOptions.style.visibility = "";
    }
    else {
        formAdditionalOptions.style.visibility = "hidden"
    }
}

function turnOnAutoFiller() {
    
}

window.onload = function() {
    dragula([document.getElementById('left1'), document.getElementById('right1')]);
}

