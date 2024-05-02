<template>
  <v-container>
    <v-card flat>
      <v-card-title class="d-flex align-center pe-2">
        <v-icon icon="mdi-cash-register"></v-icon> &nbsp;
        Ventas del Día

        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          density="compact"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></v-text-field>
      </v-card-title>
      <v-divider></v-divider>
    </v-card>
    <v-data-table :headers="headers" v-model="search" :search="search" :items="items" item-value="ref">
    </v-data-table>
  </v-container>
</template>

<script>

export default {
  name: 'HomeView',
  data () {
    return {
      search: '',
      dialog: false,
      headers: [
        { title: 'N° Referencia', align: 'start', key: 'ref' },
        { title: 'Nombre',  key: 'name' },
        { title: 'Tamaño', key: 'size' },
        { title: 'Precio', key: 'price' },
        { title: 'Cantidad', key: 'quantity' },
        { title: 'Total', key: 'tot' }
      ],
      items: [
        { ref: '000111', name: 'Playera', size: 'CH', price: 250, quantity: 10, tot: 2500 },
        { ref: '000222', name: 'Pantalon', size: '32', price: 359, quantity: 8, tot: 2872 },
        { ref: '000333', name: 'Camisa', size: 'M', price: 299, quantity: 15, tot: 4485 },
        { ref: '000444', name: 'Boxer', size: 'G', price: 50, quantity: 5, tot: 250 },
        { ref: '000555', name: 'Calcetin', size: 'Unitalla', price: 7, quantity: 10, tot: 70 }
      ],
    }
  },
  methods: {

  },
  components: {
    
  },
};
</script>
