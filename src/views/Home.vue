<template>
  <div class="home">
    <b-jumbotron  class="text-white pl-4" header="CLASSIC MODELS" lead="Los mejores modelos están aquí">
    </b-jumbotron>
      <b-container>
      <h2> Bienvenid@</h2>
      <h4> Bienvenid@ al sistema de Ordenes e inventarios de ClassicModels</h4>
       </b-container>
       <div class="m-5"> 
       <b-row>
         <b-col cols="12" md="7">
           <h2>Ultimas Ordenes</h2>
          <table class="table">
            <thead>
              <tr>
                <th>N orden</th>
                <th>Cliente</th>
                <th>Fecha de entrega</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
            <tr v-for="(orden, index) in dashboard.ultimas_ordenes" :key="index" >
              <td>{{orden.num_orden}}</td>
              <td>{{orden.cliente}}</td>
              <td>{{orden.fecha_entrega}}</td>
              <td>{{orden.estado}}</td>
            <b-button  variant="primary" class="mt-3" size="sm">Detalle</b-button>
            </tr>
          </tbody>
         </table>
         </b-col>
         <b-col cols="12" md="5">
            <h2>Ultimas Devoluciones</h2>
              <table class="table">
                <thead>
                  <tr>
                    <th>N orden</th>
                    <th>Cliente</th>
                    <th>Fecha de entrega</th>
                  </tr>
                </thead>
                <tbody>
              <tr v-for="(orden, index) in dashboard.ultimas_devoluciones" :key="index" >
                <td>{{orden.num_orden}}</td>
                <td>{{orden.cliente}}</td>
                <td>{{orden.fecha_entrega}}</td>
              <b-button  variant="primary" class="mt-3" size="sm">Detalle</b-button>
              </tr>
            </tbody>
          </table>
         </b-col>
       </b-row>
  </div>
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
     ...mapState(['dashboard']),

    },
    methods:{
      ...mapActions(['setUltimasOrdenes'])

    },
    created(){
      this.setUltimasOrdenes()
    }
   
}
</script>




<style lang="scss" scoped>
  .jumbotron {
    height:550px;
    border-radius: 0;
    background-image: url("/assets/img/auto.jpg");
    background-size: cover;
    background-position: center;
   
  }
</style>

