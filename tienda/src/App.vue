<template>
  <v-app>
    <v-app-bar :elevation="2">
        <template v-slot:prepend>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
        <v-spacer></v-spacer>
        <v-row align="end" justify="end">
          <v-col cols="auto">
            <v-btn to="/login" text="Iniciar Sesión" variant="tonal" color="purple-lighten-3"></v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn to="/singup" text="Registrar" variant="tonal" color="purple-lighten-3"></v-btn>
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
        title="Martin Garcia Hurtado"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home" title="Inicio" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Inventario" value="admin"></v-list-item>
        <v-list-item prepend-icon="mdi-cash-register" title="Ganancias" value="cash"></v-list-item>
        <v-list-item prepend-icon="mdi-logout" title="Cerrar Sesion" value="logout"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data () {
    return {
      drawer: null,
    }
  },
  methods: {

  }
}
</script>
