function onLoad() {
    let url = window.location.href;

    document.getElementById("topic").style.display = "none";
    let topic = document.getElementById("topic").innerHTML;
    if (url.endsWith("goto")) {
        topic = "goto";
    }
    if (topic === "home_page") {
        document.getElementById("body_main").innerHTML = "<div class='content'>" +
            "<img src='https://vitekform.github.io/assets/images/wiki/ct_top.png' alt='crafting_table_top'/>" +
            "<button onclick='goto(\"recipes\")'>Recipes</button>" +
            "</div>";
        document.getElementById("head_main").innerHTML = "<title>Home Page</title>";
    }
    else if (topic === "recipes") {
        document.getElementById("body_main").innerHTML =
            "<div class=\"sidebar\">\n" +
            "<h2>Wiki of Project Goma</h2>" +
            "        \n" +
            "        <ul>\n" +
            "            <li><a href=\"https://vitekform.github.io/projects/goma/wiki/\">Home</a></li>\n" +
            "            <li><a href='https://vitekform.github.io/projects/goma/map/'>Map</a></li>\n" +
            "            <li><a href='https://vitekform.github.io/projects/goma/downloads/'>Download</a></li>\n" +
            "        </ul>\n" +
            "    </div>" +
            "<div class='content'>" +
            "<h2>Basic Metals</h2>" +
            "<div class='image-paragraph' data-image='https://vitekform.github.io/assets/images/goma/raw_aluminium.png'>" +
            "<img src='https://vitekform.github.io/assets/images/goma/raw_aluminium.png'><p>3x Raw Aluminium</p>" +
            "</div>" +
            "<div class='image-paragraph'>" +
            "<img src='../../../assets/images/goma/wiki/down_arrow.jpg'><p>Ingot Smelter</p>" +
            "</div>" +
            "<div class='image-paragraph' data-image='https://vitekform.github.io/assets/images/goma/aluminium_al_ingot.png'>" +
            "<img src='https://vitekform.github.io/assets/images/goma/aluminium_al_ingot.png'><p>Aluminium Ingot</p>" +
            "</div></div>";
        document.getElementById("head_main").innerHTML = "<title>Recipes</title>\n" +
            "    <link rel=\"icon\" type=\"image/x-icon\" href=\"https://vitekform.github.io/assets/images/wiki/ct_top.png\">\n" +
            "<link rel='stylesheet' href='../../../assets/css/wiki/side_bar.css'>" +
            "<link rel='stylesheet' href='../../../assets/css/wiki/p_image_allign.css'>";
    }
    else if (topic === "goto") {
        document.getElementById("head_main").innerHTML = "<title>Go To on Wiki</title>\n" +
            "<link rel='stylesheet' href='../../../assets/css/wiki/side_bar.css'>";
        document.getElementById("body_main").innerHTML = "<form><input type='text' id='goto_new' placeholder='Where you wanna go?'></form><button type='submit' onclick='f_goto()'>Go To!</button>"
    }
}
function goto(where) {
    document.getElementById("topic").innerHTML = where;
    onLoad();
}

function f_goto() {
    let where = document.getElementById("goto_new").value;
    console.log("You are going to: " + where);
    document.getElementById("topic").innerHTML = where;
    setTimeout(() => {
            goto(where);
    }, 250);
}