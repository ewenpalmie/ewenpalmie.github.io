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
    let Photoshop = ["Bob.png", "Dr stone.png", "FINI AIZAWA.png", "Fissure.png", "Jujustsu.png", "KIRITO.png", "koro fini.png", "LIVAI.png", "Mirio.png", "Obito fini.png", "RATATOUILLE.png", "RIN.png", "Solo leveling.png", "Star Wars.png", "STITCH.png", "ZENITSU.png", "ZORO.png"];
    let Stage = ["Assiette Perso.png", "Borderie 1 .png", "Borderie 2 .png", "Borderie 3 .png", "Borderie 4 .png", "Boule.png", "croquis.png", "maison pâques.png", "origami.png", "Présentation Marchande 1 .png", "Présentation plante 1 .png", "Présentation plante 2.png", "sapin.png", "Traineau.png"];

    let CreationsManuelHist = ["Mon frere est le meilleur"];
    let DigitalHist = "Mes dessins digitaux ont été réalisés sur une tablette graphique« Xp - Pen Artist 12 pro».Les logiciels utilisés sont Medibang ainsi que Photoshop. La plupart sont des réalisations que j 'avais déjà dessinées en papier sous forme de croquis et enfin après les avoir pris en photo les refaire, afin d'améliorer en corrigeant les défauts et en y mettant des couleurs.";
    let FeutreAlcoolHist = "Après avoir fait une grande partie de mes dessins aux crayons à papier, je me suis intéressé à la mise en couleur de ceux - là et au rendu avec des feutres traditionnels pour les aplats de couleurs. Pour faire la mise en couleurs de mes dessins aux feutres, je dessine tout d’ abord le croquis sur un papier avec un grain entre 75 et 90 gammes pour que l’ encre ne passe pas à travers ou au contraire soit totalement absorbée.Une fois ceci fait je repasse avec différents feutres« Micron pigma» noir avec une pointe entre 0.5 et 5 mm pour jouer sur les différentes textures.Dès lors je peux gommer mon croquis et appliquer la couleur en pensant bien à repasser plusieurs fois dessus pour avoir un bel aplat de couleur.";
    let NoirBlancHist = "Les dessins en noir et blanc sont des dessins réalisés avec des« micron pigma» avec une pointe en entre 0.5 et 5 mm d’ épaisseur ainsi qu’ une pointe - type brush. Après avoir fait de l’ encrage de mes traits internes et externes du dessin je peux utiliser diverses techniques afin de créer des ombrages en faisant des hachures plus il y en a qui sont superposés plus sombres(l’ on peut aussi les superposer pour les avoir plus sombres ou en faisant des aplats de noir.";
    let MontagePhotoHist = "Les montages que j’ai faits sont composés de plusieurs types, de collage d’ image ou des effets donner à des personnages en superposant des calques ou des mises en scène. Il ne suffit pas de seulement coller des images aléatoires pour mes fonds collage.Je fais en sorte de mettre en valeur les émotions fortes telles que la peur, la colère, la joie et des moments clés dans l’ évolution du personnage en lui - même.";
    let CrayonHist = "J’ai commencé à dessiner en commençant par le crayon en utilisant des papiers de couleur différents, des épaisseurs différentes et des crayons plus ou moins gras du HB au 6 B.Afin d’ adoucir les traits j 'utilise aussi une estompe pour créer des nuances claires.";
    let StageHist = "Voici des réalisations / présentations marchandes réaliser durant mes périodes de stage chez« Vanessa Bruno» une entreprise de prêt à porter,«Truffaut» une entreprise étant dans la vente de plantes,d 'animaux de compagnie et d'agroalimentaire et pour finir le dernier chez« Cultura»,une entreprise qui vend,des livres,des instruments de musique,des films,des jeux vidéo des consoles,des fournitures scolaires,des jeux pour enfants,ainsi que du matériel en lien avec l 'art et le loisir créatif.J 'y ai développé des techniques de positionnement de produits, de la décoration, de la peinture et des fonctionnements d'entreprise et des compétences requises pour y travailler.";

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
        case "CreationsManuel":
            repository = "Creations Manuel";
            hist = CreationsManuelHist;
            carousel.empty();
            CreationsManuel.forEach(draw => {
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
    window.open(urlCurrent + "/frontend/"+urlPicture, "_blank")
}