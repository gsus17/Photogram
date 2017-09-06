export let signinComponent = {
    template: `
<section id="main-container">
    <div class="container">
        <div class="row">
            <div class="col s10 push-s1">
                <div class="row">
                    <div class="col m5 hide-on-small-only">
                        <img src="assets/img/iphone.png" class="iphone">
                    </div>
                    <div class="col s12 m7">
                        <div class="row">
                            <div class="signup-box">
                                <h1 class="photogram">Photogram</h1>
                                <form class="signup-form">
                                    <h2>Registrate para ver fotos de tus amigos.</h2>
                                    <div class="section">
                                        <a class="btn btn-fb hide-on-small-only">Iniciar sesion con facebook</a>
                                        <a class="btn btn-fb hide-on-med-and-up">Iniciar sesion</a>
                                    </div>
                                    <div class="divider"></div>
                                    <div class="section">
                                        <input type="email" name="email" placeholder="Correo electronico">
                                        <input type="text" name="nombre" placeholder="Nombre completo">
                                        <input type="text" name="Username" placeholder="Nombre de usuario">
                                        <input type="text" name="Contraseña" placeholder="Password">
                                        <button class="btn waves-effect waves-light btn-signup" type="submit">Registrate</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                        <router-link to="/home">
                            <div class="login-box" >
                                ¿Tienes una cuenta? <a>Entrar</a>
                            </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
` }