<template>
  <v-app>
    <content>
      <section>
        <v-parallax :src="require('@/assets/hero.jpeg')"  height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="white--text mb-2 display-1 text-xs-center">Welcome</h1>
            <div class="subheading mb-3 text-xs-center">Powered by .Native</div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              to="/login/"
            >
              Login
            </v-btn>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              to="/register/"
            >
              Register
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
    </content>
  </v-app>
</template>