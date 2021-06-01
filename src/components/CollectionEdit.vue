<template>
    <div class="js-collection-edit">
        <wwEditorFormRow label="Javascript code">
            <wwCodeEditor name="js-code" :value="content.js" @input="updateContent('js', $event)" />
        </wwEditorFormRow>
    </div>
</template>

<script>
export default {
    props: {
        plugin: { type: Object, required: true },
        config: { type: Object, required: true },
    },
    data() {
        return {};
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
        updateContent(key, value) {
            this.$emit('update-config', { ...this.content, [key]: value });
        },
    },
    mounted() {
        this.updateContent('js', this.content.js);
    },
};
</script>

<style scoped lang="scss">
.js-collection-edit {
    display: flex;
    flex-direction: column;
}
</style>
