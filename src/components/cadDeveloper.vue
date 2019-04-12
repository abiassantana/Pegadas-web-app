<template>
<body>
    <!-- Nvabar fixed top -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-light  bg-light">
        <!-- Logo -->
        <a class="navbar-brand ml-4" href="#"><img src="img/logo/logo_pegadas.png" id="logo"></a>

        <!-- Btn de collapse navabr -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Atributos da navbar -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="nav justify-content-end mr-3">
                <li class="nav-item mr-5">
                    <a class="nav-link active" href="#">Ini­cio</a>
                </li>
                <li class="nav-item mr-5">
                    <a class="nav-link" href="#">Equipe</a>
                </li>
                <li class="nav-item mr-5">
                    <a class="nav-link" href="#">Sobre</a>
                </li>
                <li class="nav-item btn-sm">
                    <a class="nav-link pr-5 pl-5 pt-0 pb-0" href="#" tabindex="-1" aria-disabled="true" id="btn-cadastreJogo">Cadastre<br>seu jogo!</a>
                </li>
            </ul>
        </div>
        <!-- Fim da navbar -->
    </nav>
    <!-- Cadastro -->
    <section id="cadastro">
        <form class="form-group" @submit.prevent="cadDeveloper">
            <!-- BTN Entre -->
            <a class="btn btn-sm btn-primary pl-4 pr-4 pt-2 pb-2 mt-n3 mb-3" id="btn-entra1">Cadastre-se</a>
            <!-- Informe campos -->
            <h5 class="mb-5">(Todos os campos devem ser preenchidos)</h5>

            <div class="row">
                <div class="col pr-4">
                    <!-- Input nome -->
                    <input type="name" id="inputname" v-model="developer.firstName" class="form-control mb-5" placeholder="Nome" required="" autofocus="">
                </div>
                <div class="col pl-4">
                    <!-- Input sobre nome -->
                    <input type="lastname" id="inputlastname" v-model="developer.lastName"  class="form-control mb-5" placeholder="Sobrenome" required="" autofocus="">
                </div>
            </div>

            <!-- Input email -->
            <input type="email" id="inputEmail" v-model="developer.email" class="form-control mb-5" placeholder="E-mail" required="" autofocus="">

            <!-- Input senha -->
            <input type="password" id="inputPassword" v-model="developer.password" class="form-control mb-5" placeholder="Senha" required="" autofocus="">

            <!-- Input senha -->
            <input type="password" id="inputCPassword" class="form-control mb-4" placeholder="Confirme a senha" required="" autofocus="">

            <!-- BTN cadastrar -->
            <button class="btn btn-sm btn-primary pl-4 pr-4 " type="submit" id="btn-entra2">Cadastrar</button>

            <p class="text-muted">
                <!-- Ancora retorno de menu -->
                <a c href="#">Volte ao menu</a>
            </p>
        </form>
    </section>
</body>

</template>

<script>
import axios from 'axios'

export default {
  name: 'cadDev',
  data: function () {
    return {
      developer: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  },
  methods:{
      cadDeveloper(){
        axios.post('http://localhost:3000/developer', this.developer).then(response =>{
                console.log(this.developer.firstName)
            })
            .catch(e => {
                console.log(e)
          })
        }
  }
}
</script>

<style>
body {
    width: 100%;
    height: 100vh;
    background-image: url(img/background/cadastro.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

/* -----------------------------------*/
/* ---------->>> Cadastro <<<---------*/
/* -----------------------------------*/

#cadastro {
    background-color: #FFFFFF;
    margin-top: 11%;
    margin-right: 10%;
    float: right;
    width: 100%;
    height: 100%;
    max-width: 30%;
    max-height: 65%;
    padding-left: 2%;
    padding-right: 2%;
    text-align: center;
}

#cadastro .form-group {
    width: 100%;
    height: 100%;
    text-decoration: none;
}

#cadastro .btn {
    color: #FFFFFF;
    background-color: #2C4771;
    border: none;
    border-radius: 0;
    font-size: 100%;
}

#cadastro h5 {
    font-size: 60%;
    line-height: 10px;
}

#cadastro .form-control {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #8D8181;
}

#cadastro .form-control::placeholder {
    font-size: 90%;
    text-align: center;
}

#cadastro .form-control::placeholder:active {
    border-color: none;
    text-decoration: none;
}

#cadastro #inputCPassword::placeholder {
    text-align: left;
    font-size: 60%;
}

#cadastro #btn-entra2 {
    border-radius: 30px;
    font-size: 100%;
}

#cadastro .text-muted a {
    font-size: 60%;
    color: #12C790;
}

body {
    font-family: 'Roboto Mono', monospace;
}

/* -----------------------------------*/
/* ---------->>> Navbar <<<-----------*/
/* -----------------------------------*/

.navbar {
    background-color: #FFFFFF;

}

.navbar #logo {
    width: 100%;
    height: 100%;
    max-width: 55%;
    max-height: 70%;
}

.navbar ul li a {
    font-size: 110%;
    color: #8D8181;
}

#btn-cadastreJogo {
    background-color: #28F250;
    color: #FFFFFF;
    border-radius: 30px;
    font-size: 90%;
}

.navbar-toggler {
    border: none;
    border: 1px solid #28F250;
    color: #28F250;
    border-radius: 7px;
}

.navbar-toggler .navbar-toggler-icon {
    font-size: 130%;
}

.nav-link:hover {
    color: #8D8181;
    border-width: 0 0 4px;
    border-style: solid;
    border-color: #28F250;
}

#btn-cadastreJogo:hover {
    border: none;
}

</style>
