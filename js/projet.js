/* Ferme le menu */
function hideMenu() {
    /* Si le menu est ouvert on le referme en lui donnant une largeur de 0px */
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("pegasus").style.color = "black";
    $(".bar").css("background-color", "black");
}


$(document).ready(function() {

    /* Permet de fermer le menu en cliquant n'importe où sur la page */
    $(document).on("click", hideMenu);

    /* Actions sur le menu au click sur le burger */
    $(".burger").on("click", function(e) {
        /* Si le menu est ouvert on le referme en lui donnant une largeur de 0px */
        if (document.getElementById("sideNav").style.width == "290px") {
            hideMenu();
        } else {
            /* Empêche la fermeture du menu avant son ouverture */
            e.stopPropagation();
            /* Si le menu est fermé on l'ouvre en lui donnant une largeur de 290px */
            document.getElementById("sideNav").style.width = "290px";
            document.getElementById("pegasus").style.color = "white";
            $(".bar").css("background-color", "white");
        }
    });

    /* Fonction qui s'assure que le nav du menu ne
    se referme pas quand on clique dessus */
    $("nav").on("click", function(e) {
        /* Permet de ne pas croire qu'on clique sur le body,
        et donc de ne pas fermer le menu */
        e.stopPropagation();
    });

    /* Faire en sorte que le scroll quand on clique
    sur le bouton principal soit "smooth" */
    $(".scrollTo").on("click", function() { // Au clic sur un élément
        var page = $(this).attr("href"); // Page cible
        var speed = 950; // Durée de l'animation (en ms)
        $("html, body").animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });
});





/* Fonction de parallax */
function parallax() {
    /* Diviser le "pageYOffset" par un nombre positif ralentira l'effet de parallax.
    L'ajout d'un signe '-' avant (window.pageYOffset) fait bouger l'élément de parallax
    vers le haut plutôt que vers le bas quand on scroll */
    if (document.getElementById("separator") != null) {
        /* Condition nécessaire pour vérifier que la fonction s'applique
        uniquement quand on est sur la page index.html car l'élément
        séparateur n'existe que sur cette page */
        var separator = document.getElementById("separator");
        separator.style.top = (window.pageYOffset / 7.5) + "px";
    }
}


/* Ajoute un détecteur d'événement qui détecte le scroll
 et actionne la fonction parallax */

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

/* S'assure que le champs âge n'est pas vide */
function checkAge() {
    return (document.formulaire.age.value != "");
}

/* S'assure qu'un sexe a bien été sélectionné */
function checkSex() {
    return (document.formulaire.sexe[0].checked || document.formulaire.sexe[1].checked || document.formulaire.sexe[2].checked);
}

/* S'assure que le champs connaissance du site soit bien complété */
function checkSite() {
    var inputElements = document.getElementsByName("siteKnowledge");
    for (var i = 0; i < inputElements.length; i += 1) {
        /* une radio a bien étée cochée */
        if (inputElements[i].checked) {
            /* s'il s'agit de la radio autre */
            if (inputElements[i].value == "autre") {
                /* il faut que le champ texte à côté soit rempli */
                if (document.formulaire.siteKnowledgeOther.value != "") {
                    return true;
                } else {
                    return false;
                }
                /* si ce n'est pas autre il faut que le champ texte soit vide */
            } else if (document.formulaire.siteKnowledgeOther.value == "") {
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
}

/* Il faut qu'au moins une case soit cochée pour retourner true, sinon ça ne va pas */
function checkPage() {
    var inputElements = document.getElementsByName("visitedPage");
    for (var i = 0; i < inputElements.length; i += 1) {
        if (inputElements[i].checked) {
            return true;
        }
    }
    return false;
}