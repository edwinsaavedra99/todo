<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
const { lgAndUp } = useDisplay();
const sDrawer = ref(false);
</script>

<template>
    <div class="d-flex main-box">
        <div class="left-part" v-if="lgAndUp">
            <perfect-scrollbar style="height: calc(100vh - 50px)">
                <slot name="leftPart"></slot>
            </perfect-scrollbar>
        </div>

        <div class="right-part">
            <v-btn block @click="sDrawer = !sDrawer" variant="text" class="d-lg-none d-md-flex d-sm-flex">
                <Menu2Icon size="20" class="mr-2" /> Menu
            </v-btn>
            <v-divider class="d-lg-none d-block" />
            <slot name="rightPart"></slot>
        </div>
    </div>

    <v-navigation-drawer temporary v-model="sDrawer" width="320" top v-if="!lgAndUp">
        <v-card-text class="pa-0">
            <slot name="mobileLeftContent"></slot>
        </v-card-text>
    </v-navigation-drawer>
</template>

<style lang="scss">
.main-box {
    position: relative;
    overflow: hidden;
}
.left-part {
    width: 620px;
    border-right: 1px solid rgb(var(--v-theme-borderColor));
    min-height: 500px;
    transition: 0.1s ease-in;
    flex-shrink: 0;
}
.v-theme--light {
    .left-part {
        background: white;
    }
}
.v-theme--dark {
    .left-part {
        background: #2b2b2b;
    }
}
.right-part {
    width: 100%;
    min-height: 500px;
    position: relative;
}
</style>
