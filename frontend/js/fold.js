function hoverFolder(myFolderName) {
    console.log("hover... " + myFolderName)
    folder = $("#" + myFolderName)[0];
    //RaviFx(folder);


    icon = $('.folder__icon');
    folder = $('.folder__icon-img--back');
    folderCover = $('.folder__icon-img--cover');
    feedback = $('.folder__feedback');
    preview = $('.folder__preview');
    console.log(icon, folder, folderCover, feedback, preview)
        //this.DOM.previewElems = this.DOM.preview.children;
        //this.totalPreview = this.DOM.previewElems.length;
        //callFolder();



}