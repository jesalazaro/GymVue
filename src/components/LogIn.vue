<template>
    <div>
        <div class="background"></div>

        <div class="form shadow-lg ">
            <h3 style="color:yellow" >Iniciar Sesión</h3>
            <form v-on:submit.prevent="processLogIn">
                <input v-model="credentials.username" class="form-control" placeholder="Usuario"/>
                <input v-model="credentials.password" class="form-control" type="password" placeholder="Contraseña"/>
                <p v-if="show_error" class="error">Usuario o contraseña incorrectos</p> 
                <button v-bind:class="{'disabled': is_loading}" class="btn btn-primary">
                    <span v-if="!is_loading">Ingresar</span>
                    <div v-if="is_loading" class="spinner-border text-light" role="status"></div>
                </button>
            </form>
        </div>
    </div>
</template>


<script>
import gql from "graphql-tag";

export default {
    name: "LogIn", 
    data: function() {
        return {
            show_error: false,
            is_loading: false,
            credentials: {
                username: "",
                password: ""
            }
        }
    }, 
    methods: {
        processLogIn: async function (){
            this.is_loading = true;
            await this.$apollo.mutate({
                mutation: gql`
                    mutation Login($credentials: LoginInput!) {
                        login(credentials: $credentials) {
                            key
                        }
                    }
                `,
                variables: {
                    credentials: this.credentials
                }
            })
            .then((result) => {
                console.log("FUNCIONÓOOO")
                this.is_loading = false;
                this.show_error = false;
                let data = {
                    username: this.credentials.username,
                    token: result.data.login.key
                }
                this.$emit("completedLogin", data);
            })
            .catch((error)=>{
                this.show_error = true;
                console.log("DIO ERROR :c")
                console.log(error)
                this.is_loading = false;
            })
        }
    }, 
    created: function () {}
};
</script>


<style >

    .background{
        background-image: url("https://i.imgur.com/pyPgXyJ.jpeg");
        height: calc(100vh );
    }

     .form{
        position: absolute;
        top: 50%;
        left: 50%;
        background-color:transparent;
        transform: translate(-50%, -50%);
        padding: 80px 50px;
        border-radius: 10px;
        
    }
  
    .form form{
        display: flex;
    flex-direction: column;
    }
    .form input{
        margin-bottom: 25px;
    }
    .form h3{
        text-align: center;
        margin-bottom: 30px;
        text-shadow: #FC0 2px 0 10px;
        font-weight: bolder;
    }

    .error{
        color: red;
        font-size: 15px;
        text-shadow: #FC0 2px 0 10px;
        font-weight: bolder;
    }

    .disabled{
        pointer-events: none;
        opacity: 0.6;
    }

    @media(max-width: 500px){
        .form {
             padding: 40px 25px;
            width: 85%;
        }
    }
</style>