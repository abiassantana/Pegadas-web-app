<template>
    <body>
    <!-- Menu hamburger -->
    <header class="container-fluid header">
        <div class="row">
            <div class="col-3 ml-n3" id="hamburger-container">
                <!-- BTN hamburger -->
                <button id="hamburger" class="btn pb-2">
                    <div class="row">
                        <i class="fas fa-bars pl-3 pr-4 mb-n2 mt-n2 pt-3 pb-3"></i>
                        <a class="nav-link ml-n4" href="#" id="hamburger-title">Painel de Gerenciamento<br>De conta</a>
                    </div>
                </button>
                <!-- Itens menu hamburger -->
                <div id="main-nav">
                    <ul>
                        <!--  imagem pf-->
                        <li><a href="#"><img id="main-nav-img" src="#"></a></li>
                        <!-- nome pf -->
                        <li><a href="#" id="main-nav-none"><i class="fas fa-user mr-3 "></i>Perfil</a></li>
                        <!-- nome se -->
                        <li><a href="#" id="main-nav-alts"><i class="fas fa-lock mr-3"></i>Alterar Senha</a></li>
                        <!-- nome sa -->
                        <li><a href="#" id="main-nav-sair"><i class="fas fa-door-open mr-3"></i>Sair</a></li>
                    </ul>
                </div>
            </div>
            <!-- Nav itens -->
            <div class="col-9" id="brand-container">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link mr-5 ml-5 pr-3 pl-3 mt-3" href="">Desenvolvedores</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5 ml-5  pr-3 pl-3 mt-3" href="#">Cadastrar Atividade</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5 ml-5  pr-3 pl-3 mt-3" href="">Relatórios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5 ml-5  pr-3 pl-3 pr-5 mt-3" href="#">Ajuda</a>
                    </li>
                </ul>
            </div>

        </div>
    </header>

    <section id="conteudo">
        <div class="row mx-auto">
            <div class="col-lg-6">
                <img src="img/background/Grupo.png">
            </div>
            <div class="col-lg-6" style="padding-right: 5%;">
                <h1>#Deixe a sua Pegada</h1>
                <h2>O pegadas é um projeto sem fins lucrativos<br>Que atua diretamente com a sociedade, junte-se a nós .</h2>
                <a class="btn btn-success btn-sm pt-0 pb-0" href="#" role="button">Cadastre<br>seu jogo!</a>
            </div>
        </div>
    </section> 
    <!-- Scrip menu header -->
</body>

</template>

<script>
export default {
    mounted() {
    let menuAmburger = document.createElement('script')
    let menuAmburgerPerfil = document.createElement('script')
    menuAmburger.setAttribute('src', 'js/menuHamburger.js')
    menuAmburgerPerfil.setAttribute('src', 'js/btnMenuHamburgerPerfil.js')
    document.head.appendChild(menuAmburger)
    document.head.appendChild(menuAmburgerPerfil)
  }
}
</script>

<style>
/* -----------------------------------*/
/* ---------->>> Navbar <<<-----------*/
/* -----------------------------------*/

header,
.header {
    position: fixed;
    width: 100;
    background-color: #FFFFFF;
    color: white;
    border-bottom: 1px solid #8D8181;
    font-family: 'Roboto Mono';
    z-index: 2;
}

header #main-nav,
.header #main-nav {
    position: absolute;
    left: 10px;
    width: 93.4%;
    height: 45vh;
    background-color: #FFFFFF;
    border: 1px solid #000000;
    text-align: center;

}

header #main-nav li,
.header #main-nav li {
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    margin-left: -6%;

}

header #main-nav li a,
.header #main-nav li a {
    color: #8D8181;
}

header #brand-container,
.header #brand-container {
    text-align: center;
    letter-spacing: 0px;
}

header #hamburger,
.header #hamburger {
    color: #FFFCFC;
    background-color: #2C4771;
    border: none;
    border-radius: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    padding-left: 3%;
    padding-top: 1.5%;
}

header #hamburg6.5r,
.header #hamburger {
    border: none;
    border-radius: 0;
}

header #hamburger .fa-bars {
    font-size: 300%;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: #28F250;
    margin-right: 14%;
}


#hamburger-title {
    font-size: 70%;
    color: #FFFCFC;
}

#hamburger-title:hover {
    border: none;
}

.nav-link {
    color: #8D8181;
    font-size: 100%;
}

.nav-link:hover {
    color: #8D8181;
    border-width: 0 0 4px;
    border-style: solid;
    border-color: #28F250;
}

/* -----------------------------------*/
/* -------->>> Menu Perfil <<<--------*/
/* -----------------------------------*/

#main-nav-img {
    border-radius: 50%;
    border: 1px solid black;
    width: 90px;
    height: 90px;
    margin-top: 3vh;
}

#main-nav-none {
    position: absolute;
    margin-top: 4vh;
    margin-left: -8vh;
}

#main-nav-alts {
    position: absolute;
    margin-top: 6vh;
    margin-left: -8vh;
}

#main-nav-sair {
    position: absolute;
    margin-top: 18vh;
    margin-left: 10vh
}

/* -----------------------------------*/
/* ---------->>> Conteudo <<<---------*/
/* -----------------------------------*/

#conteudo {
    text-align: center;
    font-family: 'Roboto Mono';
    color: #2C4771;
    z-index: 1;
}

#conteudo .row {
    padding-top: 5%;
}

#conteudo h1 {
    font-size: 270%;
    font-weight: 600;
    margin-bottom: 3%;
    padding-top: 20%;
}

#conteudo h2 {
    font-size: 120%;
    font-weight: 600;
    line-height: 150%;
    margin-bottom: 15%;
}

#conteudo .btn {
    color: #FFFFFF;
    background-color: #28F250;
    border: none;
    font-size: 80%;
    font-family: 'Roboto Mono';
    border-radius: 30px;
    width: 150px;
}

#conteudo img {
    width: 80%;
    height: 80%;
    margin-top: 5%;

}
/* -----------------------------------*/
/* ---------->>> Table <<<------------*/
/* -----------------------------------*/

#tabela-dev {
    width: 100%;
    height: 80%;
    padding-left: 3%;
    padding-right: 3%;

}

#tabela-dev h1 {
    font-size: 140%;
    font-weight: 500;
    font-family: 'Roboto Mono';
    color: #2C4771;
}

.table {
    width: 80%;
    text-align: center;
}

.table thead tr th {
    font-size: 100%;
    font-weight: 500;
    font-family: 'Roboto Mono';
    font-family: sans-serif;
    text-decoration: none;
    color: #2C4771;
    padding: 0;
}

.table tbody tr {
    padding-left: 1%;
    padding-right: 1%;
    background-color: #FCFCFC;
    border: 10px solid #FFFFFF;
    border-bottom: 10px solid #FFFFFF;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.9);
    font-size: 80%;
    font-weight: 500;
    font-family: 'Roboto Mono';
    color: #2C4771;
}

#tbl {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
}

#tbr {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
}

#tbl img {
    border: 1px solid #8D8181;
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

#tbr img {
    border: 1px solid #8D8181;
    border-radius: 50%;
    padding: 5px;
    width: 50px;
    height: 50px;
    border: 1px solid;
    opacity: 0;
}

#tbr img:hover,
img:active {
    opacity: 1;
}

/* -----------------------------------*/
/* ---------->>> Modal <<<------------*/
/* -----------------------------------*/

.modal {
    border: none;
    text-align: center;
    width: 100%;

}

.modal .modal-content {
    border-radius: 30px;
    width: 75%;
    height: 310px;
}

.modal .modal-header {
    border: none;
    padding: 0;
    padding-right: 5%;
    width:

}

.modal .modal-body #modal-img-pf {
    border: 1px solid #8D8181;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-bottom: 3%;
}

.modal .modal-body #modal-local h5 {
    font-size: 100%;
    text-align: left;
}

.modal .modal-body #modal-local img {
    width: 20px;
    height: 20px;
    float: right;
}

.modal .modal-body h2,
h3,
h4 {
    font-size: 100%;
    font-weight: 500;
}

.modal .modal-footer {
    width: 100%;
    height: 100px;
    border-color: #28F250;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: #28F250;
}

/* -----------------------------------*/
/* ----->>> TABLE RELATORIO <<<-------*/
/* -----------------------------------*/
#table-relatorio .row {
    width: 100%;
    margin-top: 10%;
}

#table-relatorio .table thead tr th {
    color: #2C4771;
    text-align: center;
    text-decoration: none;
    font-weight: 500;
    font-size: 100%;
    font-family: 'Roboto Mono';
    padding: 0;

}

#table-relatorio .table tbody tr td {
    color: #2C4771;
    text-align: center;
    text-decoration: none;
    font-weight: 500;
    font-size: 90%;
    font-family: 'Roboto Mono';
}

#trbl {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
}

#trbr {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
}

#estado-verde {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: 1px solid #5CFF7B;
    background-color: #5CFF7B;
}

#estado-amarela {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: 1px solid #F4F408;
    background-color: #F4F408;
}

#estado-vermelha {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: 1px solid #FF5C5C;
    background-color: #FF5C5C;
}

</style>
