<template>
    <div class="character">
        <img :src="character.image" :alt="character.name">
        <div class="character__info">
            <h3>{{ character.name }}</h3> 
            <div class="status"></div>
            <span
                :class="
                    character.status === 'Alive' ? 'alive' :     
                    character.status === 'Dead' ? 'dead' :  
                    'defaul'        
                "
            ></span>
            <span>{{ character.status }} - {{ character.species }}</span>
            <div class="origin">
                <span>
                    Origin:
                    {{ character.origin.name }}
                </span>
            </div>
            <div class="location">
                Location:
                {{ character.location.name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['character']
}
</script>

<style>

</style>