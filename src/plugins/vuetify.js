import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#3f51b5',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
            dark: {
                primary: '#8B008B',
                secondary: '#f57421',
                accent: '#f57421',
                error: '#f57421',
            }
        }
    }
});
