<template>
    <section>
        <div class="characters">
            <h2>Characters</h2>
            <div class="characters__item" v-for="character in characters" :key="character.id">
                {{ character.name }}
            </div>
        </div>
    </section>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()
        const characters = computed(() => {
            return store.state.charactersFilter
        })
        onMounted(() => {
            store.dispatch('getCharacters')
        })
        return {
            characters
        }
    }
}
</script>

<style>

</style>