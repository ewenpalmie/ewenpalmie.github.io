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
    let Crayon = ["Batman crayon.jpg", "spider man crayon.jpg", "Lion crayon.jpg", "Kylo ren crayon.jpg", "crayon personnage.jpg", "ALL-mights.png", "dauphin crayob.jpg", "Broly.png", "Bleach.png", "Comics1.png", "Croquis.png", "ELFES.png", "Guerrier 1.png", "Guerrier 2.png", "Iron-spider.png", "Joker.png", "Naruto.png", "Panther.png", "Rabbit.png", "Solo leveling.png", "Sukuna.png", "Volt.png", "Wolverine.png"];
    let CreationsManuelles = ["Among US 1.png", "Among US 2.png"];
    let Digital = ["crabeeee.png", "Ecolière.png", "rat.png", "Hypnose.png", "Spider-Gwen.png"];
    let FeutreAlcool = ["Banana.png", "shoto feutre.jpg", "Momoshiki.png", "love feutre.jpg", "kiri feutre.jpg", "Boruto.png", "Broly.png", "Buu.png", "Dabi.png", "DBZ.png", "Ecolier.png", "Gangsta.png", "IM.png", "Kakashi.png", "Kirito.png", "Lakers.png", "Zoro.png", "Luffy.png", "Sanji.png", "Méliodas.png", "RABBIT'S.png", "Ratatouille.png", , "Shoto 1.png", "Shoto 2.png", "SNK.png", "Spider-man 1.png", "Spider-man 2.png", "Spider-man 3.png", "Star Lord.png", "The promised Neverland.png", "Venom.png", "Win.png", ];
    let NoiretBlanc = ["Bleach.jpg", "Sun ken rock.png", "Fight.png", "Garoh.png", "Kirito line.png", "Naruto.png", "Pirates.png", ];
    let Photoshop = ["Bob.png", "Obito fini.png", "Star Wars.png", "RATATOUILLE.png", "Fissure.png", "Dr stone.png", "FINI AIZAWA.png", "Jujustsu.png", "KIRITO.png", "koro fini.png", "LIVAI.png", "Mirio.png", "RIN.png", "Solo leveling.png", "STITCH.png", "ZENITSU.png", "ZORO.png"];
    let Stage = [, "Borderie 1 .png", "Borderie 2 .png", "Borderie 3 .png", "Borderie 4 .png", "origami.png", "sapin.png", "Traineau.png", "Boule.png", "croquis.png", "Assiette Perso.png", "maison pâques.png", "Présentation Marchande 1 .png", "Présentation plante 1 .png", "Présentation plante 2.png", ];

    let CreationsManuellesHist = "Ces 2 réalisations ont été faites à l'aide de cartons récupérés, j'ai tout d'abord dessiné les deux faces de mes personnages venant du jeu «Among us». Une fois découpées à l'aide d'une planche de découpe et d'un cutter.Je découpe des bandes de 3.5cm de largeur que je colle à l'aide de papier de journaux et de vernis col, cela va me permettre de donner du relief à ma réalisation 3D. Ensuite, je recouvre la structure en blanc, elle sert de pré-couche et me permettre de recouvrir plus facilement avec les peintures et couleurs finales. La peinture est de l'acrylique, elle permet de recouvrir facilement plusieurs supports et sèches plutôt rapidement.";
    let DigitalHist = "Mes dessins digitaux ont été réalisés sur une tablette graphique «Xp - Pen Artist 12 pro». Les logiciels utilisés sont Medibang ainsi que Photoshop. La plupart sont des réalisations que j'avais déjà dessinées en papier sous forme de croquis. Après les avoir pris en photo je les ai repris et appliqués sur tablette, afin de corriger les défauts et de rajouter des couleurs.";
    let NoirBlancHist = "Les dessins en noir et blanc sont des dessins réalisés avec des «micron pigma» avec une pointe en entre 0.5 et 5 mm d’ épaisseur ainsi qu’ une pointe - type brush. Après avoir effectué de l’encrage de mes traits internes et externes du dessin, je peux utiliser diverses hachures d'afin de créer des ombrages en faisant des hachures : on peut les   superposer pour les avoir plus sombres ou en faisant des aplats de noir.";
    let MontagePhotoHist = "Les montages exécutés sont composés de plusieurs types, de collage d'image ou des effets donnés à des personnages en superposant des calques ou des mises en scène. Il ne suffit pas de seulement coller des images aléatoires pour mes fonds collage. Je fais en sorte de mettre en valeur les émotions fortes telles que la peur,  la colère, la joie et des moments clés dans l' évolution du personnage en lui-même.";
    let CrayonHist = "J’ai commencé à dessiner par le crayon en utilisant des papiers de couleur différents, des épaisseurs différentes et des crayons plus ou moins gras du HB au 6 B. Afin d’adoucir les traits, j'utilise aussi une estompe pour créer des nuances claires.";
    let StageHist = "Voici des réalisations / présentations marchandes exécutées durant mes périodes de stage chez <b>«Vanessa Bruno»</b> une entreprise de prêt à porter, chez <b>«Truffaut»</b> une entreprise étant dans la vente de plantes, d'animaux de compagnie et d'agroalimentaire et pour finir le dernier chez <b>«Cultura»</b>, une entreprise qui vend, des livres, des instruments de musique, des films, des jeux vidéo des consoles, des fournitures scolaires, des jeux pour enfants,ainsi que du matériel en lien avec l 'art et le loisir  créatif. J'y ai développé des techniques de positionnement de produits, de la décoration, de la peinture. J'ai développé des compétences: travail en équipe, autonomie, techniques de merch, argumentaire de vente et aisance auprès des clients.";

    hist = "";
    switch (theme) {
        case "Crayon":
            repository = "Crayon";
            hist = CrayonHist;
            carousel.empty();
            Crayon.forEach(draw => {
                carousel.append('<li> <img onclick="bigImg(this)" src="./img/draw/' + repository + '/' + draw + '" /></li>');
            });

            break;
        case "CreationsManuelles":
            repository = "Creations Manuelles";
            hist = CreationsManuellesHist;
            carousel.empty();
            CreationsManuelles.forEach(draw => {
                carousel.append('<li> <img  onclick="bigImg(this)" src="./img/draw/' + repository + '/' + draw + '" /></li>');
            });
            break;
        case "Digital":
            repository = "Digital";
            hist = DigitalHist;
            carousel.empty();
            Digital.forEach(draw => {
                carousel.append('<li> <img onclick="bigImg(this)" src="./img/draw/' + repository + '/' + draw + '" /></li>');
            });
            break;
        case "FeutreAlcool":
            repository = "Feutre alcool";
            hist = FeutreAlcoolHist;
            carousel.empty();
            FeutreAlcool.forEach(draw => {
                carousel.append('<li> <img onclick="bigImg(this)" src="./img/draw/' + repository + '/' + draw + '" /></li>');
            });
            break;
        case "NoiretBlanc":
            repository = "Noir et blanc";
            hist = NoirBlancHist;
            carousel.empty();
            NoiretBlanc.forEach(draw => {
                carousel.append('<li> <img onclick="bigImg(this)" src="./img/draw/' + repository + '/' + draw + '" /></li>');
            });
            break;
        case "Photoshop":
            repository = "Photoshop";
            hist = MontagePhotoHist;
            carousel.empty();

            Photoshop.forEach(draw => {
                carousel.append('<li> <img onclick="bigImg(this)" src="./img/draw/' + repository + '/' + draw + '" /></li>');
            });
            break;
        case "Stage":
            repository = "Stage";
            hist = StageHist;
            carousel.empty();

            Stage.forEach(draw => {
                carousel.append('<li> <img onclick="bigImg(this)" src="./img/draw/' + repository + '/' + draw + '" /></li>');
            });
            break;

        default:
            repository = "Crayon";
            carousel.empty();

            Crayon.forEach(draw => {
                carousel.append('<li> <img onclick="bigImg(this)" src="./img/draw/' + repository + '/' + draw + '" /></li>');
            });
            break;
    }
    $("#modalCarouselTitle").empty();
    $("#modalCarouselTitle").append(repository);

    $("#themeHist").empty();
    $("#themeHist").append(hist);


}
console.log($(".wrap>ul>li>img"))

function bigImg(picture) {
    let urlPicture = picture.getAttribute('src');
    urlPicture = urlPicture.substring(2);

    let urlCurrent = window.location.origin;


    //console.log(urlCurrent+"/"+urlPicture)
    window.open(urlCurrent + "/frontend/" + urlPicture, "_blank")
}