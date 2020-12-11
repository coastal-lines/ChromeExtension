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

function dragAndDrop() {
    dragula([document.getElementById('btn1'), document.getElementById('frm1')]);
}

window.onload = function() {
    dragula([document.getElementById('left1'), document.getElementById('right1')]);
}