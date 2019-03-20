<template>
    <div class="">
        {{character}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            character: {}
        }
    },

    methods: {
        fetchCharecter(){
            fetch('https://swapi.co/api/people', {
                method: 'GET'
            })
            .then(response => response.json())
            .then(json => this.character = json )
        }
    },
    created() {
        this.fetchCharecter()
    }
}
</script>