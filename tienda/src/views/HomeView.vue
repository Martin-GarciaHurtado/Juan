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
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          class="me-2"
          size="small"
          @click="ver(item)"
        >
          mdi-eye
        </v-icon>
      </template> 
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
      { title: 'N° Ticket', align: 'start', key: 'ticket' },
          { title: 'Fecha', key: 'fecha' },
          { title: 'Cantidad de articulos',  key: 'count' },
          { title: 'Total', key: 'tot' },
          { title: 'Ver Compra', key: 'actions', sortable: false },
      ],
      items: [
        { ticket: '000111', fecha: '12-04-2024', count: '14', tot: 4500 },
        { ticket: '000222', fecha: '13-04-2024', count: '10', tot: 3590 },
        { ticket: '000333', fecha: '14-04-2024', count: '15', tot: 2999 },
        { ticket: '000444', fecha: '15-04-2024', count: '10', tot: 500 },
        { ticket: '000555', fecha: '16-04-2024', count: '5', tot: 350 }
      ],
    }
  },
  methods: {
    ver(item){
      console.log(item)
    }
  },
  components: {
    
  },
};
</script>
