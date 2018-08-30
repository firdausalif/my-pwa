<template>
  <v-app>
    <v-layout row>
      <v-flex xs12 sm12 md12>
        <v-card color="grey lighten-4" flat>
          <v-toolbar color="primary" dark>
            <v-btn icon>
              <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
        </v-card>
      </v-flex>
    </v-layout>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs  12 class="text-xs-center" mt-5>
          <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-3" width="80">
          <h1>Login to My-app</h1>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <form>
            <v-layout column>
              <v-flex>
                <v-text-field
                  name="login"
                  label="Email or Username"
                  id="login"
                  type="text"
                  required
                  outline
                  autofocus
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
              <v-btn
                style="margin:0 !important;"
                :loading="signInLoading"
                :disabled="signInLoading"
                color="primary"
                @click.native="loader = 'signInLoading'"
                large
              >
                Login
                <span slot="loader" class="custom-loader">
                  <v-icon light>cached</v-icon>
                </span>
              </v-btn>
            </v-layout>
          </form>
        </v-flex>
      </v-layout>
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
      loader: null
    }),
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    }
  }
</script>

<style scoped>
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
