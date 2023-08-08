const menu = document.getElementById("menu-btn")
const sidebar = document.getElementById("sidebar")

menu.addEventListener("click",()=>{
    
    if(sidebar.classList.contains("hide")){
        sidebar.classList.add("show")
        sidebar.classList.remove("hide")
    }else{
        sidebar.classList.remove("show")
        sidebar.classList.add("hide")
    }
})
document.addEventListener('click', function (event) {
    const isClickInsideMenu = sidebar.contains(event.target) || menu.contains(event.target);

    // Verifica se o clique ocorreu dentro do menu ou no ícone do menu hamburguer
    if (!isClickInsideMenu && sidebar.classList.contains("show")) {
        // Esconde o menu
        sidebar.classList.remove("show")
        sidebar.classList.add("hide")
        
    
        
    }
})