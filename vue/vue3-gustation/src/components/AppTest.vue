<template>
    <div>
        <h1>{{ message }}</h1>
        <h2>{{ $store.state.storeValue }}</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    },
    data() {
        return {
            message: 'Hello World, Hi Vue3!' as string,
        }
    },
})
</script>

<style scoped>

</style>