const modal = $(".modalDraw");
const body = $("body");
const carousel = $(".wrap>ul");
$(function() {
    modal.hide();

});

function closeModal() {
    modal.hide();
    body.removeClass("modalOpen")

}

function myModal(theme) {
    if (modal[0].style.display == "none") {
        modal.show();
        body.addClass("modalOpen")
    } else {
        modal.hide();
    }
    let Crayon = ["ALL-mights.png", "Bleach.png", "Broly.png", "Comics1.png", "Croquis.png", "ELFES.png", "Guerrier 1.png", "Guerrier 2.png", "Iron-spider.png", "Joker.png", "Naruto.png", "Panther.png", "Rabbit.png", "Solo leveling.png", "Sukuna.png", "Volt.png", "Wolverine.png"];
    let CreationsManuel = ["Among US 1.png", "Among US 2.png"];
    let Digital = ["Ecolière.png", "Hypnose.png", "Spider-Gwen.png"];
    let FeutreAlcool = ["Banana.png", "Boruto.png", "Broly.png", "Buu.png", "Dabi.png", "DBZ.png", "Ecolier.png", "Gangsta.png", "IM.png", "Kakashi.png", "Kirito.png", "Lakers.png", "Luffy.png", "Méliodas.png", "Momoshiki.png", "RABBIT'S.png", "Ratatouille.png", "Sanji.png", "Shoto 1.png", "Shoto 2.png", "SNK.png", "Spider-man 1.png", "Spider-man 2.png", "Spider-man 3.png", "Star Lord.png", "The promised Neverland.png", "Venom.png", "Win.png", "Zoro.png"];
    let NoiretBlanc = ["Bleach.jpg", "Fight.png", "Garoh.png", "Kirito line.png", "Naruto.png", "Pirates.png", "Sun ken rock.png"];
    let Photoshop = ["Bob.png", "Dr stone.png", "FINI AIZAWA.png", "Fissure.png", "Jujustsy.png", "KIRITO.png", "koro fini.png", "LIVAI.png", "Mirio.png", "Obito fini.png", "RATATOUILLE.png", "RIN.png", "Solo leveling.png", "Star Wars.png", "STITCH.png", "ZENITSU.png", "ZORO.png"];
    let Stage = ["Assiette Perso.png", "Borderie 1 .png", "Borderie 2 .png", "Borderie 3 .png", "Borderie 4 .png", "Boule.png", "croquis.png", "maison pâques.png", "origami.png", "Présentation Marchande 1 .png", "Présentation plante 1 .png", "Présentation plante 2.png", "sapin.png", "Traineau.png"];


    console.log(theme)
    switch (theme) {
        case "Crayon":
            repository = "Crayon";
            carousel.empty();
            Crayon.forEach(draw => {
                carousel.append('<li> <img src="./img/draw/' + repository + '/' + draw + '" /></li>');
            });

            break;
        case "CreationsManuel":
            repository = "Creations Manuel";
            carousel.empty();

            CreationsManuel.forEach(draw => {
                carousel.append('<li> <img src="./img/draw/' + repository + '/' + draw + '" /></li>');
            });
            break;
        case "Digital":
            repository = "Digital";
            carousel.empty();

            Digital.forEach(draw => {
                carousel.append('<li> <img src="./img/draw/' + repository + '/' + draw + '" /></li>');
            });
            break;
        case "FeutreAlcool":
            repository = "Feutre alcool";
            carousel.empty();

            FeutreAlcool.forEach(draw => {
                carousel.append('<li> <img src="./img/draw/' + repository + '/' + draw + '" /></li>');
            });
            break;
        case "NoiretBlanc":
            repository = "Noir et blanc";
            carousel.empty();

            NoiretBlanc.forEach(draw => {
                carousel.append('<li> <img src="./img/draw/' + repository + '/' + draw + '" /></li>');
            });
            break;
        case "Photoshop":
            repository = "Photoshop";
            carousel.empty();

            Photoshop.forEach(draw => {
                carousel.append('<li> <img src="./img/draw/' + repository + '/' + draw + '" /></li>');
            });
            break;
        case "Stage":
            repository = "Stage";
            carousel.empty();

            Stage.forEach(draw => {
                carousel.append('<li> <img src="./img/draw/' + repository + '/' + draw + '" /></li>');
            });
            break;

        default:
            repository = "Crayon";
            carousel.empty();

            Crayon.forEach(draw => {
                carousel.append('<li> <img src="./img/draw/' + repository + '/' + draw + '" /></li>');
            });
            break;
    }
    $("#modalCarouselTitle").empty();
    $("#modalCarouselTitle").append(repository);
}