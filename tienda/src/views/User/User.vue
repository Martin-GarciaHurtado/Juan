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
  
          <v-spacer></v-spacer>
  
          <v-btn
            prepend-icon="mdi-cart-plus"
            text="Nueva Venta"
            @click="dialog = true"
            color="purple-darken-3"
          ></v-btn>
        </v-card-title>
  
        <v-divider></v-divider>
      </v-card>
      <v-data-table :headers="headers" v-model:search="search" :items="items" item-value="ref">
        
      </v-data-table>
  
      <div class="pa-4 text-center">
        <v-dialog
          v-model="dialog"
          max-width="800"
          persistent=""
        >
          <v-card>
            <br>
            <v-card-title>
              <v-row>
                <v-icon>mdi-cash-register</v-icon>Venta
                <v-spacer></v-spacer>
                <v-btn 
                  icon="mdi-plus"
                  color="green"
                  variant="plain"
                  @click="dialog = false"
                ></v-btn>
              </v-row>
            </v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col
                  cols="12"
                  md="3"
                  sm="4"
                >
                  <v-select
                    v-model="articulo"
                    :items="articulos"
                    label="Prenda"
                  ></v-select>
                </v-col>
  
                <v-col
                  cols="12"
                  md="3"
                  sm="4"
                >
                  <v-select
                    v-model="talla"
                    :items="tallas"
                    label="Talla"
                  ></v-select>
                </v-col>
  
                <v-col
                  cols="12"
                  md="3"
                  sm="4"
                >
                  <v-text-field
                    label="Cantidad"
                    required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="3"
                  sm="4"
                >
                  <v-text-field
                    label="249.99"
                    required
                    disabled="true"
                  ></v-text-field>
                </v-col>
              </v-row>
              
              <small class="text-caption text-medium-emphasis">*Se requiere llenar todos los campos.</small>
            </v-card-text>
  
            <v-divider></v-divider>
  
            <v-card-actions>
              <v-spacer></v-spacer>
  
              <v-btn
              color="red"
                text="Close"
                variant="plain"
                @click="dialog = false"
              ></v-btn>
  
              <v-btn
                color="green"
                text="Save"
                variant="tonal"
                @click="dialog = false"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-container>
  </template>
  
  <script>
  
  export default {
    name: 'UserPage',
    data () {
      return {
        articulos: [
            'Playera',
            'Mangas',
            'Shorts',
            'Bandana',
            'Goggles',
            'Guantes'
        ],
        articulo: 'Playera',
        tallas: [
            'CH',
            'M',
            'G',
            'XL',
            'XXL',
            'XXXL'
        ],
        talla: 'CH',
        venta: [],
        search: '',
        dialog: false,
        headers: [
          { title: 'N° Ticket', align: 'start', key: 'ref' },
          { title: 'Fecha', key: 'fecha' },
          { title: 'Cantidad de articulos',  key: 'count' },
          { title: 'Total', key: 'tot' }
        ],
        items: [
          { ref: '000111', fecha: '12-04-2024', count: 10, tot: 3500 },
          { ref: '000222', fecha: '15-04-2024', count: 8, tot: 2872 },
          { ref: '000333', fecha: '19-04-2024', count: 15, tot: 4485 },
          { ref: '000444', fecha: '22-04-2024', count: 2, tot: 250 },
          { ref: '000555', fecha: '28-04-2024', count: 1, tot: 70 }
        ],
      }
    },
    methods: {
  
    },
    components: {
      
    },
  };
  </script>  