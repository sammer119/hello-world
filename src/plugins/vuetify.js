import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#03DAC6',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',
                background: '#f57421'
            },
            dark: {
                primary: '#8B008B',
                secondary: '#f57421',
                accent: '#f57421',
                error: '#f57421',
                background: '#f57421'
            }
        }
    }
});
