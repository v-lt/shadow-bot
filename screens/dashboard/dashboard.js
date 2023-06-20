let profile_popup = document.getElementById("profile-popup");
let profile_popup_label = document.getElementById("profile-popup-label");

function profileShowChangeStatusPopup(isAccountActivated = false) {
    if(isAccountActivated) {
        //Should deactivate
        profile_popup_label.textContent = "Do you want to deactivate this profile now?";
    } else {
        profile_popup_label.textContent = "Do you want to activate this profile now?";
    }
    profile_popup.classList.add("open-popup");
}
function profileHideChangeStatusPopup() {
    profile_popup.classList.remove("open-popup");
}

let recommended_popup = document.getElementById("recommended-popup");
let recommended_popup_label = document.getElementById("recommended-popup-label");

function recommendedShowChangeStatusPopup(isAccountActivated = false) {
    if(isAccountActivated) {
        //Should deactivate
        recommended_popup_label.textContent = "Do you want to deactivate this profile now?";
    } else {
        recommended_popup_label.textContent = "Do you want to activate this profile now?";
    }
    recommended_popup.classList.add("open-popup");
}
function recommendedHideChangeStatusPopup() {
    recommended_popup.classList.remove("open-popup");
}

function updateActiveTab() {
    var tabs = document.getElementsByClassName('sidebar-tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function () {
            for (var j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('active');
            }
            this.classList.add('active');
        });
    }
}

function showContent(id) {
    var divs = document.querySelectorAll('.content-div');
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].id === id) {
            divs[i].classList.remove('hidden');
        } else {
            divs[i].classList.add('hidden');
        }
    }
}

function clearAllCreateProfileValue() {
    var parent = document.getElementById("create-new-profile-content");
    
    var inputElements = parent.querySelectorAll("input, select, textarea");
    for (i = 0; i < inputElements.length; i++) {
        var child = inputElements[i];
        child.value = '';
    }
}

function clearAllUpdateProfileValue() {
    var parent = document.getElementById("update-profile-content");
    
    var inputElements = parent.querySelectorAll("input, select, textarea");
    for (i = 0; i < inputElements.length; i++) {
        var child = inputElements[i];
        child.value = '';
    }
}

function removeActive(el) {
    for (var i = 0; i < el.length; i++) {
        el[i].classList.remove('active');
    }
}

function switchProfileTab(id) {
    var profileDivs = document.querySelectorAll('.profile-tab-row a');
    var tabs = document.getElementsByClassName('sidebar-tab');

    removeActive(profileDivs);
    removeActive(tabs);
    if (id == 'profile-tab'){
        profileDivs[0].classList.add('active');
        tabs[1].classList.add('active');
    }
    else if (id == 'recommended-profile-tab') {
        profileDivs[1].classList.add('active');
        tabs[3].classList.add('active');
    }
}

updateActiveTab();
