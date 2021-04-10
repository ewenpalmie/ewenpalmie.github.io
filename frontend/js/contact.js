function copyMail() {
    var $temp = $("<input>");
    $("body").append($temp);
    let mail = "ewen.p700@gmail.com"
    $temp.val(mail).select();
    document.execCommand("copy");
    $temp.remove();
    document.getElementById("myAlert").innerHTML = "Vous venez de copier le mail: <u>" + mail + "</u>";
    document.getElementById("myAlert").style.display = "block"
}