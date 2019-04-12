<template>
    
<body>
    <!-- Nvabar fixed top -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-light  bg-light">
        <!-- Logo -->
        <a class="navbar-brand ml-4" href="#"><img src="/img/logo/logo_pegadas.png" id="logo"></a>

        <!-- Btn de collapse navabr -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Atributos da navbar -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="nav justify-content-end mr-3">
                <li class="nav-item mr-5">
                    <a class="nav-link active" href="#">Inicio</a>
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

    <h1 id="title">#Deixe a sua <br> Pegada</h1>

    <!-- Signin -->
    <section id="signin">
        <form class="form-signin" @submit.prevent="loginDeveloper">
            <button class="btn btn-sm btn-primary pl-5 pr-4 mt-n3 mb-5" type="submit" id="btn-entra1">Entrar</button>


            <input type="email" id="inputEmail" v-model="developer.email" class="form-control mb-5" placeholder="Informe seu e-mail" required="" autofocus="">


            <input type="password" id="inputPassword" v-model="developer.password" class="form-control mb-5" placeholder="Senha" required="">

            <button class="btn btn-success pl-4 pr-4 " type="submit" id="btn-entra2">Entrar</button>

            <p class="mt-4 mb-3 text-muted">
                <!-- Ancora criar conta -->
                <a href="/developer/signup" style="color: #12C790" class="mr-1">Criar conta</a>
                <a>|</a>
                <!-- Ancora Esqueceu a senha? -->
                <a href="#" style="color: #12C790" class="ml-1">Esqueceu a senha?</a></p>
        </form>
        <!-- Fim do signin -->
    </section>

    <!-- Footer da pagina -->
    <footer class="mx-auto">
        <!-- Btn do Footer -->
        <a class="btn btn-primary mx-auto pr-4 pl-4 pt-2 pb-2 mt-n4" href="#" role="button">Parceiros</a>

        <!-- Fim do Footer -->
    </footer>
</body>

</template>

<script>
import axios from 'axios'
export default {
  name: 'loginDev',
  data: function () {
    return {
      developer: {
        email: '',
        password: ''
      }
    }
  },
  methods:{
      loginDeveloper(){
        axios.post('http://localhost:3000/developer/login', this.developer).then(response =>{
            if(response.data.message == "User authenticated"){
                console.log(response.data)
                localStorage.setItem('token', response.data.token)
                this.$router.push('/developer/perfil')
            }
                
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
body {
    width: 100%;
    height: 100vh;
    background-image: url(img/background/signin.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 120% 100%;
    float: right;
}

#title {
    color: white;
    position: absolute;
    font-size: 90px;
    top: 12%;
    right: 10%;
    font-family: 'Market Pro';

}


/* -----------------------------------*/
/* ---------->>> Signin <<<-----------*/
/* -----------------------------------*/

#signin {
    position: absolute;
    background-color: #FFFFFF;
    padding-left: 3%;
    padding-right: 3%;
    margin-top: 10%;
    margin-left: 10%;
    width: 100%;
    height: 100%;
    max-height: 50%;
    max-width: 28%;
    text-align: center;
}

#signin .form-control {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #8D8181;
    font-size: 90%;
}

#btn-entra1 {
    margin-right: 90%;
    background-color: #2C4771;
    border: none;
    border-radius: 0;
    color: #FFFFFF;
    font-size: 100%;
}

#btn-entra2 {
    background-color: #50B165;
    border: none;
    border-radius: 30px;
    font-size: 100%
}

#inputPassword {
    margin-top: 20%;
}

.text-muted a {
    font-size: 60%;
}

/* -----------------------------------*/
/* ---------->>> Footer <<<-----------*/
/* -----------------------------------*/

footer {
    position: absolute;
    width: 100%;
    height: 100%;
    max-height: 16%;
    background-color: #6BBF9D;
    bottom: 0;
    text-align: center;
}

footer .btn {
    background-color: #2C4771;
    border: none;
    border-radius: 0;
    color: #FFFFFF;
    font-size: 80%;
}

@font-face {
    font-family: Market Pro;
    src: url(font/Market_Web_Regular.ttf);
}


</style>
