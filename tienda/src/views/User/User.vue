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
      <v-data-table :headers="headers" v-model="search" :search="search" :items="compras">
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

      <div class="pa-4 text-center">
        <v-dialog
          v-model="dialog"
          max-width="800"
          persistent
        >
          <v-card>
            <br>
            <v-card-title class="d-flex align-center pe-2">
              <v-row>
                &nbsp; <v-icon>mdi-cash-register</v-icon> &nbsp;
                Venta
                <v-spacer></v-spacer>
                <v-btn 
                  icon="mdi-plus"
                  color="green"
                  variant="plain"
                  @click="addArt()"
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
                    rounded
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
                    rounded
                  ></v-select>
                </v-col>
  
                <v-col
                  cols="12"
                  md="3"
                  sm="4"
                >
                  <v-text-field
                    v-model="cantidad"
                    label="Cantidad"
                    required
                    rounded
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="3"
                  sm="4"
                >
                  <v-text-field
                    label="$"
                    required
                    rounded
                    v-model="price"
                  ></v-text-field>
                </v-col>
              </v-row>
              
              <small class="text-caption text-medium-emphasis">*Se requiere llenar todos los campos.</small>
              <v-data-table :headers="head" :items="venta" no-data-text="Por el momento no se encuentra ningun articulo en la lista.">
              </v-data-table>
            </v-card-text>
  
            <v-divider></v-divider>
  
            <v-card-actions>
              <v-spacer></v-spacer>
  
              <v-btn
              color="red"
                text="Close"
                variant="plain"
                @click="close()"
              ></v-btn>
  
              <v-btn
                color="green"
                text="Save"
                variant="tonal"
                @click="save()"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <div class="pa-4 text-center">
        <v-dialog
          v-model="dialogVer"
          max-width="800"
          persistent
        >
          <v-card>
            <v-card-title class="d-flex align-center pe-2">
              <br>
              <v-row>
                &nbsp; <strong>Venta N° {{ tick }}</strong>
                <v-spacer></v-spacer>
                <v-btn 
                  icon="mdi-alpha-x"
                  color="red"
                  variant="plain"
                  @click="closeVer()"
                ></v-btn>
              </v-row>
            </v-card-title>
            <v-card-text>
              <v-data-table :headers="headList" :items="lista">

              </v-data-table>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </v-container>
  </template>
  
  <script>
//import { computed } from 'vue';

  
  export default {
    name: 'UserPage',
    data () {
      return {
        aux: 0,
        aux2: 0,
        tick: 0,
        price: '',
        articulos: [
          'Playera',
          'Mangas',
          'Shorts',
          'Bandana',
          'Goggles',
          'Guantes'
        ],
        articulo: '',
        tallas: [
            'CH',
            'M',
            'G',
            'XL',
            'XXL',
            'XXXL'
        ],
        talla: '',
        cantidad: '',
        venta: [],
        search: '',
        dialog: false,
        dialogVer: false,
        totalC: 0,
        headers: [
          { title: 'N° Ticket', align: 'start', key: 'ticket' },
          { title: 'Fecha', key: 'fecha' },
          { title: 'Cantidad de articulos',  key: 'count' },
          { title: 'Total', key: 'tot' },
          { title: 'Ver Compra', key: 'actions', sortable: false },
        ],
        compras: [],
        head: [
            { title: 'ID', align: 'start', key:'id' },
            { title: 'Nombre', key:'prenda' },
            { title: 'Talla', key: 'size' },
            { title: 'Cantidad', key: 'cant' },
            { title: 'Prescio', key: 'cost' },
            { title: 'Total', key: 'total' }
        ],
        headList: [
          { title: 'ID', align: 'start', key: 'id' },
          { title: 'Articulo', key: 'prenda' },
          { title: 'Talla', key: 'size' },
          { title: 'Cantidad', key: 'cant' },
          { title: 'Precio Uniario', key: 'cost' },
          { title: 'Precio Total', key: 'total' },
        ],
        lista: [],
      }
    },
    methods: {
      addArt(){
        this.aux++
        const totalPrice = this.price*this.cantidad
        this.venta.push({ id: this.aux, prenda: this.articulo, size: this.talla, cant: this.cantidad, cost: this.price, total: totalPrice }) 
        this.articulo = ''
        this.talla = ''
        this.price = ''
        this.cantidad = ''
      },
      close(){
        this.dialog = false
        this.venta = []
        this.aux = 0
      },
      ver(item){
        this.dialogVer = true
        //console.log(JSON.stringify(item.ticket))
        this.tick = JSON.stringify(item.ticket)
        this.lista = item.list
        //const fec = Date()
        //console.log(fec)
      },
      closeVer(){
        this.dialogVer = false
        this.lista = []
      },
      save(){
        this.dialog = false
        this.aux2++
        console.log(JSON.stringify(this.venta))
        for( var i = 0; i < this.venta.length; i++ ){
            this.totalC+=this.venta[i].total
        }
        console.log(this.totalC)
        this.compras.push({ ticket:  this.aux2, fecha: '12-04-2024', count: this.aux, tot: this.totalC, list: this.venta })
        this.venta = []
        this.aux = 0
        this.totalC = 0
        console.log(JSON.stringify(this.compras))
      },
      
    },
    //computed: {
      
    //},
    components: {
      
    },
  };
  </script>  