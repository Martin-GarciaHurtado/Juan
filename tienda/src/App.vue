<template>
  <v-app>
    <v-app-bar :elevation="2">
        <template v-slot:prepend>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
        <v-spacer></v-spacer>
        <v-row align="end" justify="end">
          <v-col cols="auto">
            <v-btn to="/login" text="Iniciar Sesión" variant="tonal" color="purple-lighten-3" v-if="login == 0"></v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn to="/singup" text="Registrar" variant="tonal" color="purple-lighten-3" v-if="login == 0"></v-btn>
          </v-col>
          <br>
        </v-row>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        :title="name"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home" title="Inicio" value="home" to="/userpage" v-if="rol != 1"></v-list-item>
        <v-list-item prepend-icon="mdi-home" title="Inicio" value="home" to="/" v-else></v-list-item>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Inventario" value="admin" to="/adminpage" v-if="rol == 1"></v-list-item>
        <v-list-item prepend-icon="mdi-cash" title="Ganancias" value="cash" to="/ganancias" v-if="rol == 1"></v-list-item>
        <v-list-item prepend-icon="mdi-logout" title="Cerrar Sesion" value="logout" @click="SingOut()"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import router from "@/router";

export default {
  name: 'App',

  data () {
    return {
      drawer: null,
      rol: sessionStorage.getItem('Rol'),
      name: sessionStorage.getItem('User'),
      login: sessionStorage.length
    }
  },
  methods: {
    async SingOut() {
      sessionStorage.removeItem('User')
      sessionStorage.removeItem('Rol')
      await router.push({ name: 'loginPage' })
      
    },

  }
}
</script>
