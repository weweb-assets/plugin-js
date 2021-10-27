/* wwEditor:start */
import './components/CollectionEdit.vue';
import './components/CollectionSummary.vue';
/* wwEditor:end */

export default {
    /*=============================================m_ÔÔ_m=============================================\
        Collection API
    \================================================================================================*/
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
};
