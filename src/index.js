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
        Vue.prototype.$pluginJS = this;
    },
    /*=============================================m_ÔÔ_m=============================================\
        Collection API
    \================================================================================================*/
    /* wwEditor:start */
    async fetchCollection(collection) {
        try {
            const result = eval(collection.config.js);
            return { data: result, error: null };
        } catch (err) {
            return { data: null, error: err };
        }
    },
    /* wwEditor:end */
};
