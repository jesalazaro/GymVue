<template>
    <div class="reservationContainer">
        <!-- Account -->
        <div class="accountInfo shadow">
            <div class="titleContainer">
               
            <h3>Mi cuenta</h3>
            </div>
            <span class="money"> </span>
            <span><b>Bienvenido: </b> {{username}}</span>
        </div>
        <!-- Creating Reservation -->
         <div class="reservationsSection">
            <h4>Reservaciones</h4>
            <input v-model = "reservation.reservationDate" class="form-control"  placeholder="Escriba una fecha">
             <div class = "form-group">
            <select v-model ="reservation.club" id = "dropdown" name = "role" class = "form-control" required>
                <option disbaled selectred value> Seleccione un club</option>
                <option value = "Club1">Colinas</option>
                <option value = "Club2">Chapinero</option>
                <option value = "Club3">Centro</option>
                <option value = "Club4">Norte</option>
                <option value = "Club5">Sur</option> 
            </select>
        </div>
            <button v-on:click = "createReservation" class="btn btn-primary">Envíar</button>
        </div>

        <!-- Reservations -->

        <table class = "table table-striped reservationsTable">
            <thead>
                <tr>
                    <th> Usuario </th>
                    <th> Fecha </th> 
                    <th> Club </th>
                    <th> Id(recibo) </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="reservation in reservationByUsername" :key="reservation.id" >
                    <td> {{reservation.username}} </td>
                    <td> {{reservation.reservationDate}}</td> 
                    <td> {{reservation.club}}</td> 
                    <td> {{reservation.id}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import gql from "graphql-tag";

export default {
    name: "Reservations",
    data: function(){
        return {
            username: localStorage.getItem("username") || "none",
            accountByUsername: {
                reservationDate: "",
                club: "",
            },
            reservationByUsername: [],
            reservation: {
                reservationDate: "",
                club: "",
            }
        }
    },

    apollo: {
        accountByUsername: {
            query: gql`
                query AccountByUsername($username: String!) {
                    accountByUsername(username: $username) {
                        reservationDate
                        club
                    }
                }
            `,
            variables() {
                return {
                    username: this.username,
                };
            },
        },
    },

    methods: {
        createReservation: async function(){
            await this.$apollo.mutate({
                mutation: gql` 
                    mutation CreateReservation($reservation: ReservationInput!){
                        createReservation(reservation: $reservation){
                            username
                            reservationDate
                            club  
                        }
                    }`,
                    variables: {
                        reservation: this.reservation
                    }
            })
            .then((result) =>{
                this.$apollo.queries.accountByUsername.refetch();
                this.$reservation.reservationDate = ""
                this.$reservation.club = "" 
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    },
    created: function (){
        this.$apollo.queries.accountByUsername.refetch();
    }
};

</script>


<style scoped>
    .reservationContainer{
        width: 70%;
        margin: auto;
        margin-top: 50px;
    }
    .titleContainer{
        display: flex;
    align-items: center;
    margin-bottom: 5px;
    }
    .titleContainer h3{
        margin: 0;
        margin-left: 10px;
    }
    .accountInfo{
            display: flex;
    flex-direction: column;
      padding: 50px 50px;

    }

    .money{
            font-size: 35px;
    }

    .reservationsTable{
        margin-top: 25px;
        color: white;
    }


    .reservationsSection{
        margin-top: 50px;
    }

    .reservationsSection input{
        margin-right: 15px;
        width: 25%;
        display: inline;
    }
    
    .form-control{
        margin-right: 15px;
        width: 25%;
        display: inline;
    }


</style>