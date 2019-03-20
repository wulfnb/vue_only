<template>
    <div id="app">
        <h3>{{title}}</h3>
        <Character />
    </div>
</template>

<script>
import Character from './components/Character.vue'
export default {
    name: 'app',
    data(){
        return {
            title : "generate  your team"
        }
    },
    methods: {
    },
    components: {
        Character
    }
}
</script>