<template>
    <div class="js-collection-edit">
        <wwEditorFormRow label="Javascript code">
            <wwEditorFormInput
                type="text"
                name="js-code"
                placeholder="return [{ test: true }]"
                :value="endpoint.limit"
                @input="updateContent('js', $event)"
                large
            />
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
                js: undefined,
                ...this.config,
            };
        },
    },
    methods: {
        updateContent(key, value) {
            this.$emit('update-config', { ...this.content, [key]: value });
        },
    },
};
</script>

<style scoped lang="scss">
.js-collection-edit {
    display: flex;
    flex-direction: column;
}
</style>
