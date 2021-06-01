<template>
    <div class="js-request-collection-edit">
        <wwEditorFormRow label="Javascript code">
            <wwCodeEditor name="js-code" :value="content.js" @input="setProp('js', $event)" />
        </wwEditorFormRow>
    </div>
</template>

<script>
export default {
    props: {
        plugin: { type: Object, required: true },
        config: { type: Object, required: true },
    },
    watch: {
        isSetup: {
            immediate: true,
            handler(value) {
                this.$emit('update-is-valid', value);
            },
        },
    },
    computed: {
        isSetup() {
            return !!this.content.js;
        },
        content() {
            return {
                js: 'return { test: "my code is always working" }',
                ...this.config,
            };
        },
    },
    methods: {
        setProp(key, value) {
            this.$emit('update-config', { ...this.content, [key]: value });
        },
    },
    mounted() {
        this.setProp('js', this.content.js);
    },
};
</script>

<style scoped lang="scss">
.js-request-collection-edit {
    display: flex;
    flex-direction: column;
}
</style>
