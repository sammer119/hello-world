<template>
  <v-card>
    <v-footer fixed padless>
      <v-card flat tile class="primary lighten-1 white--text text-center">
        <v-card-text class="mb-0 pb-0">
          <v-tooltip v-if="!$vuetify.theme.dark" bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                v-on="on"
                color="primary"
                small
                fab
                @click="toggleDarkMode"
              >
                <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
              </v-btn>
            </template>
            <span>Dark Mode On</span>
          </v-tooltip>
          <v-tooltip v-else bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                v-on="on"
                color="primary"
                small
                fab
                @click="toggleDarkMode"
              >
                <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
              </v-btn>
            </template>
            <span>Dark Mode Off</span>
          </v-tooltip>
        </v-card-text>

        <v-card-text class="white--text px-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, incididunt ut labore et dolore. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
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
    items: ["default", "absolute", "fixed"],
    padless: false,
    variant: "default",
  }),

  methods: {
    greet() {
      alert(`Hello Sam!`);
    },
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};
</script>
