<template>
  <v-app>
    <v-app-bar :elevation="2">
        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
        <v-spacer></v-spacer>
        <v-app-bar-title>Juan Store</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn to="/login" text>Iniciar Sesión</v-btn>
        <v-btn to="/singup" text>Registrar</v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({

  }),
  methods: {

  }
}
</script>
