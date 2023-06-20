<template>
    <footer>
        <p>&copy; {{ currentYear }} My App. All rights reserved.</p>
    </footer>
</template>

<script>
export default {
    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    }
}
</script>

<style lang="scss" scoped>

</style>