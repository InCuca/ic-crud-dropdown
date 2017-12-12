<template lang="html">
  <strong>{{ text }}</strong>
</template>

<script>
/**
 * Component documentation
 */
export default {
  name: 'ic-crud-dropdown',
  props: {
    /**
     * The component text
     */
    text: {
      type: String,
      default: '',
      required: true
    },
  },
}
</script>
