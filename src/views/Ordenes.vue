<template>
  <div class="about">
    <b-container class="mt-5">
       <h3> Monitor de Ordenes</h3>

    
  <form class="mt-5 mb-5">
  <div class="form-row">
   
    <div class="col" >
       <label for="">Oficina</label><br>
        <b-form-select v-model="selected" :options="options"></b-form-select>
    </div>
    <div class="col">
       <label for="">Estado</label><br>
        <b-form-select v-model="selected" :options="optionss"></b-form-select>
    </div>
    <div class="col">
       <label for="">Fecha de entrega</label><br>
      <input type="text" class="form-control" placeholder="Fecha de inicio">
      
    </div>
     <div class="col">
       <label for=""></label><br>
      <input  type="text" class="form-control mt-2" placeholder="Fecha fin">
    </div>
  </div>
   <div>
     <b-button class="mt-4" variant="primary">Buscar</b-button>
    </div>

</form>
<b-row>
  <b-col cols="12" >
      <table class="table">
        <thead>
          <tr>
            <th>N orden</th>
            <th>Cliente</th>
            <th>Monto de Orden</th>
            <th>Cant de productos</th>
             <th>Fecha de entrega </th>
              <th>Avance Preparacion</th>
               <th>Estado</th>
          </tr>
        </thead>
        <tbody>
      <tr v-for="(orden, index) in ordenes.ordenes" :key="index" >
        <td>{{orden.num_orden}}</td>
        <td>{{orden.cliente}}</td>
        <td>{{orden.monto}}</td>
        <td>{{orden.cant_productos}}</td>
        <td>{{orden.fecha_entrega}}</td>
        <td>{{orden.avance_preparacion}}</td>
        <td>{{orden.estado}}</td>
      <b-button  variant="primary" class="mt-3" size="sm">Detalle</b-button>
      </tr>
    </tbody>
  </table>
  </b-col>

</b-row>


</b-container>
  
  </div> 
</template>


<script>
import { mapState, mapActions } from 'vuex'
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Seleccione' },
          { value: 'a', text: "New York" },
          { value: 'a', text: "Boston" },
          { value: 'b', text: "San Francisco" },
          { value: 'c', text: "Paris" },
          { value: 'c', text: "Tokio" },
          { value: 'c', text: "Sydney" },
          { value: 'd', text: "London", disabled: true }
        ],
         optionss: [
          { value: null, text: 'Seleccione' },
          { value: 'a', text: 'Ingresado' },
          { value: 'b', text: 'Preparacion' },
          { value: 'c', text: 'Entregado' },
           { value: 'c', text: 'Anulado' },
          { value: 'd', text: 'Devuelto', disabled: true }
        ],
        fields: ['Num Orden', 'Cliente', 'Monto Orden', 'Cantidad de Productos', 'Fecha de entrega', 'Avance Preparacion', 'Estado'],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    },
    computed: {
     ...mapState(['ordenes']),

    },
    methods:{
      ...mapActions(['setOrdenes'])

    },
    created(){
      this.setOrdenes()
    }
  }
</script>