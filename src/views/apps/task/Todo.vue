<script setup lang="ts">
import AppBaseCard from '@/components/shared/AppBaseCard.vue';
import NotesListing from '@/components/apps/notes/NotesListing.vue';
import NotesContent from '@/components/apps/notes/NotesContent.vue';
</script>

<template>
    <v-card class='ma-5' elevation="10">
        <AppBaseCard>
            <template v-slot:leftPart>
                <NotesListing/>
            </template>
            <template v-slot:rightPart>
                <NotesContent/>
            </template>
            <template v-slot:mobileLeftContent>
                <NotesListing/>
            </template>
        </AppBaseCard>
    </v-card>
</template>

<style scoped lang="scss">
.v-card {
    width: auto!important;
}
@media (max-width: 1279px) {
    .v-card {
        position: unset;
    }
}
</style>