<template>
  <v-card>
    <!-- to make the footer fixed at the bottom of the page with no padding -->
    <v-footer fixed padless>
      <!-- have as primary colour -->
      <v-card
        flat
        tile
        class="primary lighten-1 text-center"
        :height="
          $vuetify.breakpoint.xs
            ? '33vh'
            : $vuetify.breakpoint.sm
            ? '28vh'
            : $vuetify.breakpoint.md
            ? '24vh'
            : '22vh'
        "
      >
        <v-card-text class="mb-0 pb-0">
          <!-- if vuetify theme is light then display this -->
          <v-tooltip v-if="!$vuetify.theme.dark" bottom>
            <!-- "on" prop is passed in from the activator. -->
            <template v-slot:activator="{ on }">
              <!-- click -->
              <v-btn v-on="on" color="accent" small fab @click="toggleDarkMode">
                <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
              </v-btn>
            </template>
            <span>Dark Mode On</span>
          </v-tooltip>
          <!-- if vuetify theme is dark then display this -->
          <v-tooltip v-else bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" color="accent" small fab @click="toggleDarkMode">
                <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
              </v-btn>
            </template>
            <span>Dark Mode Off</span>
          </v-tooltip>
        </v-card-text>

        <v-card-text class="px-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, incididunt ut labore et dolore. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          {{ new Date().getFullYear() }} — <strong>{{ title }}</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>
<script>
export default {
  name: "HelloWorld",
  props: ["title"],

  data: () => ({
    variant: "default",
  }),

  methods: {
    greet() {
      alert(`Hello Sam!`);
    },
    // toggle function to change the theme to the opposite of what it currently is ie. dark or light
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
