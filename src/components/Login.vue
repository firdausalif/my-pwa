<template>
  <v-app>
    <v-container id="container" fluid>
      <v-layout id="content" row wrap>
        <v-flex xs12 class="text-xs-center" mt-3>
          <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-3" width="50">
          <h2><span style="color: dodgerblue;">&lt;/&gt;</span> with <span style="color:red;">❤</span> by .Native</h2>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <form>
            <v-layout column>
              <v-flex>
                <v-text-field
                  name="login"
                  v-model="login"
                  label="Email or Username"
                  id="login"
                  type="text"
                  required
                  outline
                  autofocus
                  browser-autocomplete="off"
                  ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  :append-icon="passwordVisible ? 'visibility_off' : 'visibility'"
                  :type="passwordVisible ? 'text' : 'password'"
                  name="password"
                  label="Password"
                  outline
                  @click:append="passwordVisible = !passwordVisible"
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-btn
                  style="margin:0 !important;"
                  :loading="signInLoading"
                  :disabled="signInLoading"
                  color="primary"
                  @click.native="loader = 'signInLoading'"
                  large
                  outline
                  block
                >
                  Login
                  <span slot="loader" class="custom-loader">
                    <v-icon light>cached</v-icon>
                  </span>
                </v-btn>
              </v-flex>
            </v-layout>
          </form>
        </v-flex>
      </v-layout>
      <v-flex>
          <v-btn
            v-if="!keyboardOnShow"
            id="registerBtn"
            class="btn-btm"
            color="teal"
            dark
            to="/register/"
            large
            block
          >
            Create an Account
          </v-btn>
        </v-flex>
    </v-container>
  </v-app>
</template>

<script>
  // import axios from 'axios'

  export default {
    data: () => ({
      passwordVisible: false,
      password: '',
      signInLoading: false,
      loader: null,
      windowHeight: 0,
      txt: '',
      login: '',
      keyboardOnShow: false
    }),
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
      windowHeight  (newHeight, oldHeight) {
        if (newHeight < 580) {
          this.keyboardOnShow = true
        } else {
          this.keyboardOnShow = false
        }
      }
    },
    mounted () {
      this.$nextTick(() => {
        window.addEventListener('resize', () => {
          this.windowHeight = window.innerHeight
        })
      })
    }
  }
</script>

<style scoped>
  #container {
    padding: 0;
    height: 100vh !important;
  }
  #content {
    margin: 12px;
  }
  .btn-btm{
    margin:0 !important; 
    height: 50px !important; 
    position: absolute;
    bottom: 0;
  }
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
