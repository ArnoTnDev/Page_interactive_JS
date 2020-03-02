//F.1
let foote = document.getElementsByTagName("footer");
let count = 0
//F.2
let navbar = document.getElementById("navbarHeader");
let nav_button = document.getElementsByClassName("navbar-toggler")
//F.3
let first_card = document.querySelectorAll("div.card")[0].querySelector("button.btn-outline-secondary");
//F.4
let second_button_card = document.querySelectorAll("div.card")[1].querySelector("button.btn-outline-secondary");
let second_card = document.querySelectorAll("div.card")[1];
//F.5
let find_head = document.querySelectorAll("Head")
let find_link = find_head[0].lastElementChild
       // let find_link = find_head[0].childNodes[1].nextSibling <== fonctionne 
//F.6
let find_view = document.getElementsByClassName("btn-success")
let find_picture = document.getElementsByClassName("card-img-top")
let find_text = document.getElementsByClassName("card-text")





//Fonctionnalité 1

foote[0].addEventListener("click", function(){
    count += 1
    console.log(`clicliclique n°${count}`)
})

//Fonctionnalité 2

nav_button[0].addEventListener("click", function(){
 navbar.classList.toggle("collapse")    
})

//Fonctionnalité 3

first_card.addEventListener("click", function(){
    document.querySelectorAll("div.card")[0].style.color = "red"
})

//Fonctionalité 4

second_button_card.addEventListener("click", function(){
    if( second_card.style.color === "green"){
        second_card.style.color = "";
    } else{
    second_card.style.color = "green"
    }
});

//Fonctionnalité 5
navbar.addEventListener("dblclick", function(){
    if(find_link.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"){
        find_link.removeAttribute("href")
    } else{
        find_link.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")

        // document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="styles.css" />'
        // var create_link = document.createElement('link');
        // create_link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
        // document.head.appendChild(create_link);
    }
})

//Fonctionnalité 6

for(let i = 0; i < find_view.length; i++){
    
    find_view[i].addEventListener("mouseover", function(){
        find_text[i].classList.toggle("collapse")
        if (find_picture[i].style.width === ""){
            find_picture[i].style.width = "20%"
        } else{
            find_picture[i].style.width = ""
        }
    })

}
