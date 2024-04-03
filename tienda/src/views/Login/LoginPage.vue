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
                  <v-form @submit.prevent="Login">
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
                  </v-form>
                </v-card-text>
                <div class="text-center mt-3">
                  <v-btn rounded type="submit" @click="Login" :disabled="bloquear"
                  >Iniciar Sesión</v-btn>
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
    name: 'loginPage',
    data () {
      return {
        Email: '',
        Password: '',
        visible: false,
      }
    },
    computed: {
      bloquear(){
        //:disabled="bloquear" poner en el boton 
        if(!this.Email.includes('@')){
          return true
        }
        if(this.Password.length > 5){
          return false
        }
        return true
      }
    },
    methods: {
      async Login() {
        let json = {
          "Email" : this.Email,
          "Password" : this.Password
        };
        if ( json.Email == 'prueba@ugto.mx' && json.Password == 'Prueba123' ){
          this.$router.push({ name: 'home' })
          console.log(json)
        }
      }
    },
  }
</script>