<template>
  <slot-scope></slot-scope>
</template>

<script>
import SlotScope from './slot3'
export default {
  name: 'slot-index',
  components: { SlotScope }
}
</script>
