<template>
  <v-card>
    <!-- to make the footer fixed at the bottom of the page with no padding -->
    <v-footer fixed padless>
      <!-- have as primary colour, flex, then flex-column so children form a column -->
      <v-card
        flat
        tile
        class="primary lighten-1 text-center d-flex flex-column"
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
        <!-- breakpoints for padding, not a fan of this solution but if I removed the text on here for smaller screens the background sizing would go funny and not entirely sure why - maybe do with the parent? -->
        <v-card-text 
        :class="$vuetify.breakpoint.xs 
                ? 'px-1' 
                : ($vuetify.breakpoint.sm
                    ? 'px-4' 
                    : ($vuetify.breakpoint.md
                        ? 'px-8'
                        : 'px-16'
                    )
                )"
        >
        Lorem ipsum dolor sit amet. Et tempore voluptatem aut unde magnam quo voluptates maiores aut architecto veniam non doloremque iure et animi consectetur rem voluptatem saepe. Id quas iure ut exercitationem autem vel officiis illum non repudiandae neque.
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
