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
        max-width="600"
        persistent=""
      >
        <v-card
          prepend-icon="mdi-account"
          title="User Profile"
        >
          <v-card-text>
            <v-row dense>
              <v-col
                cols="12"
                md="4"
                sm="6"
              >
                <v-text-field
                  label="First name*"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
                sm="6"
              >
                <v-text-field
                  hint="example of helper text only on focus"
                  label="Middle name"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
                sm="6"
              >
                <v-text-field
                  hint="example of persistent helper text"
                  label="Last name*"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
                sm="6"
              >
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
                sm="6"
              >
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
                sm="6"
              >
                <v-text-field
                  label="Confirm Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>

              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  auto-select-first
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>

            <small class="text-caption text-medium-emphasis">*indicates required field</small>
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
