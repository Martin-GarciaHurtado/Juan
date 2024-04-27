<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6">
        <v-card class="elevation-12">
          <v-row>
            <v-col cols="12">
              <v-card-tittle>
                <h1 class="text-center mlt-4">Bienvenido</h1>
              </v-card-tittle>
              <v-card-text>
                <v-form @submit.prevent="Singup">
                  <v-text-field
                    v-model="Name" 
                    label="Nombre"
                    prepend-icon="mdi-account"
                    type="text"
                  />
                  <v-text-field
                    v-model="Email" 
                    label="Correo"
                    prepend-icon="mdi-at"
                    type="text"
                  />
                  <v-text-field 
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    v-model="Password"
                    label="Contraseña"
                    prepend-icon="mdi-lock"
                    @click:append-inner="visible = !visible"
                  />
                  <v-text-field 
                    :append-inner-icon="visible2 ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible2 ? 'text' : 'password'"
                    v-model="Password2"
                    label="Confirmar Contraseña"
                    prepend-icon="mdi-lock"
                    @click:append-inner="visible2 = !visible2"
                  />
                </v-form>
              </v-card-text>
              <div class="text-center mt-3">
                <v-btn rounded type="submit" @click="Singup" :disabled="bloquear"
                >Registrar</v-btn>
              </div>
              <br>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'singupPage',
  data () {
    return {
      Email: '',
      Password: '',
      Password2: '',
      visible: false,
      visible2: false,
      Name: ''
    }
  },
  computed: {
    bloquear(){
      let aux = 0
      //:disabled="bloquear" poner en el boton 
      if(!this.Email.includes('@')){
        aux = 1
        return false
      }
      if(this.Password.length > 5){
        aux = 1
        return false
      }
      else
        aux = 0
      if(this.Password.length > 1){
        aux = 1
        return false
      }
      else
        aux = 0
      if(this.Password == this.Password2){
        aux = 1
        return false
      }
      else
        aux = 0
      if(this.Name.length > 1){
        aux = 1
        return false
      }
      else
        aux = 0

      if ( aux == 1 )
        return true
      else
        return false
    }
  },
  methods: {
    async Singup() {
      let json = {
        "Email" : this.Email,
        "Password" : this.Password,
        "Password2" : this.Password2,
        "Name" : this.Name
      };
      if ( json.Password == json.Password2 ){
        //this.$router.push({ name: 'loginPage' })
        console.log(json)
      }
    }
  },
}
</script>