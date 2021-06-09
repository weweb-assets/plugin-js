import Vue from 'vue';
/* wwEditor:start */
import './components/CollectionEdit.vue';
import './components/CollectionSummary.vue';
/* wwEditor:end */

export default {
    /*=============================================m_ÔÔ_m=============================================\
        Plugin API
    \================================================================================================*/
    onLoad() {
        Vue.prototype.$pluginJavascript = this;
    },
    /*=============================================m_ÔÔ_m=============================================\
        Collection API
    \================================================================================================*/
    /* wwEditor:start */
    // eslint-disable-next-line no-unused-vars
    async fetchCollection(collection) {
        try {
            return {
                data: await eval(`(async () => {${collection.config.js}})()`),
                error: null,
            };
        } catch (err) {
            return { data: null, error: err };
        }
    },
    /* wwEditor:end */
};
