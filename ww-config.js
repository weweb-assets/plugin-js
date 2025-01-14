export default {
    features: {
        datasource: true
    },
    editor: {
        collection: {
            edit: () => import('./src/components/CollectionEdit.vue'),
            summary: () => import('./src/components/CollectionSummary.vue'),
            getIsValid(config) {
                return !!config.js;
            },
            /* wwEditor:start */
            copilot: {
                description: 'Execute a custom JavaScript code to fetch and transform data. The code runs as an async function and must return the data to be used as a collection.',
                returns: 'any',
                schema: {
                    js: {
                        type: 'string',
                        description: 'JavaScript code to execute. You can use async/await and the axios library is available globally.',
                        bindable: false
                    }
                }
            }
            /* wwEditor:end */
        },
    },
};