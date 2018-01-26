$(document).ready(function() {
    $(".burger").on('click', function() {
        /* Si le menu est ouvert on le referme en lui donnant une largeur de 0px */
        if (document.getElementById("sideNav").style.width == "290px") {
            document.getElementById("sideNav").style.width = "0";
            document.getElementById("pegasus").style.color = "black";
            $(".bar").css("background-color", "black");
        } else {
            /* Si le menu est fermé on l'ouvre en lui donnant une largeur de 290px */
            document.getElementById("sideNav").style.width = "290px";
            document.getElementById("pegasus").style.color = "white";
            $(".bar").css("background-color", "white");
        }
    });

    // Faire en sorte que le scroll quand on clique sur la
    // flèche de la 1ere flèche soit "smooth"
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 1500; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });
});



// Create the parallax function.
function parallax() {
    if (document.getElementById('separator') != null) {
        var separator = document.getElementById("separator");
        // Dividing the pageYOffset by a positive number will slow down the parallax effect.
        // Adding a '-' before (window.pageYOffset) makes the parallax
        // layer move up instead of down when scrolling.
        separator.style.top = (window.pageYOffset / 13) + 'px';
    }
}
// Add an event listener which will detect scrolling and run
// the parallax function.

window.addEventListener("scroll", parallax);

/* true quand le formulaire est bien complété, false sinon */
function evaluateAnswer() {
    if (!(checkAge() && checkSex() && checkSite() && checkPage())) {
        alert("Veuillez bien compléter le formulaire");
        return false;
    } else {
        return true;
    }
}


function checkAge() {
    return (document.formulaire.age.value != "");
}

function checkSex() {
    return (document.formulaire.sexe[0].checked || document.formulaire.sexe[1].checked);
}

function checkSite() {
    var inputElements = document.getElementsByName('connaissanceSite');
    for (var i = 0; i < inputElements.length; ++i) {
        /* une radio a bien étée cochée */
        if (inputElements[i].checked) {
            /* s'il s'agit de la radio autre */
            if (inputElements[i].value == "autre") {
                /* il faut que le champ texte à côté soit rempli */
                if (document.formulaire.connaissanceSiteAutre.value != "") {
                    return true;
                } else {
                    return false;
                }
                /* si ce n'est pas autre il faut que le champ texte soit vide */
            } else if (document.formulaire.connaissanceSiteAutre.value == "") {
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
}

function checkPage() {
    var inputElements = document.getElementsByName('pageVisite');
    for (var i = 0; i < inputElements.length; ++i) {
        if (inputElements[i].checked) {
            return true;
        }
    }
    return false;
}
