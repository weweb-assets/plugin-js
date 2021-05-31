<template>
    <div class="js-collection-summary">
        <div class="js-collection-summary__elem caption-s">JS: {{ config.js || '-' }}</div>
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
            return !!this.config.js;
        },
    },
};
</script>

<style lang="scss" scoped>
.js-collection-summary {
    &__elem {
        margin-bottom: var(--ww-spacing-01);
    }
}
</style>
