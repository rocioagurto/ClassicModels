<template>
  <div class="my-5 mx-3 login">
   <b-alert v-model="alert.snackbar" variant='success' dismissible  >
        {{ alert.message}}
      </b-alert>
      <b-alert v-model="alerta.alerta" variant='danger' dismissible  >
        {{ alert.message}}
      </b-alert>
  <b-container>
    <b-row>
     <b-form  cols="12" md="8" class="container form p-4 bg-dark text-white"  @reset="onReset" v-if="show">
     <!-- Titulo formulario -->
       <h1 class="text-center text-white mb-4">Login Users</h1>
       <b-form-group id="input-group-1" label-for="input-1">
         <b-label> Correo Electronico: </b-label>
        <b-form-input class="mt-2" id="input-1" data-testId="form-user" v-model="credentials.email" type="email" required
          placeholder="chao@mail.com">
        </b-form-input>
       </b-form-group>
       <b-label> Contraseña: </b-label>
        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input class="mt-2" type="password" id="text-password" aria-describedby="password-help-block" placeholder="*************"
            v-model="credentials.password">
          </b-form-input>
        </b-form-group>
        <div class="d-flex justify-content-between mt-5">
          <b-button variant="secondary"  v-b-modal.modal-1 @click="login">Iniciar Sesión</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </div>
       </b-form>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
      alert: {
      message: '',
      snackbar: false,   
    },
    alerta: {
      alerta: false,   
    },
      formHasErrors: false,
      show: true,
    }
   },
  methods: {
    //Boton reset
    onReset(e) {
      e.preventDefault()
      //Restablece valores del formulario
      this.credentials.email = ''
      this.credentials.password = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    //Boton iniciar sesion
    login(e) {
      e.preventDefault()
      this.formHasErrors = this.credentials.email === '' || this.credentials.password === ''
      if (!this.formHasErrors) {
        Firebase.auth()
        //Iniciar sesion con correo electronico y contraseña
        .signInWithEmailAndPassword(
          this.credentials.email,
          this.credentials.password
        )
        .then(() => {
          let user = this.credentials.email
          this.$store.dispatch('updateUser', user)
         this.alert.snackbar = true
          this.alert.message = `Bienvenid@, ${user}`
          setTimeout(() => {
            this.$router.push('/')
          }, 2000)
        })
        .catch(() => {
          this.alerta.alerta = true
          this.alert.message = 'Usuario no autenticado, intente nuevamente...'
          setTimeout(() => {
            this.alert.message = ''
            this.input.email= ''
             this.input.password= ''
          }, 1000)
        })
      }else {
        this.alerta.alerta = true
        this.alert.message = 'Debe llenar campos'
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.form{
  width: $ancho;
  box-shadow: $sombra;
  border-radius: $border
}
.login{
  height: 67vh;
}
</style>