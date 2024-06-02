<template>
    <div v-if="currentUser.id" class="min-h-full bg-gray-200 flex">

        <!-- Siderbar -->
       <Sidebar :class="{'-ml-[200px]': !sidebarOpened}"></Sidebar>
        <!-- sidebar -->
        <div class="flex-1">
           <Navbar @toggle-sidebar="toggleSidebar"></Navbar>

            <!-- content -->

            <main class="p-6">
                <div class="p-4 rounded bg-white">
                    <router-view></router-view>
                </div>
            </main>

            <!--  Content -->

        </div>
    </div>
    <div v-else class="min-h-full flex items-center justify-center bg-gray-200">
        <Spinner />
    </div>
</template>

<script setup>
    import Sidebar from "./Sidebar.vue";
    import Navbar from "./Navbar.vue";
    import {ref, onMounted, onUnmounted, computed} from "vue";
    import store from "../store/index.js";
    import {getUser} from "../store/actions.js";
    import Spinner from "./core/Spinner.vue";

    const {title} = defineProps({
        title: String
    })

    const sidebarOpened = ref(true);

    const currentUser = computed(()=>store.state.user.data);

    function toggleSidebar(){
        sidebarOpened.value = !sidebarOpened.value;
    }

    function handleSidebarOpened() {
        sidebarOpened.value = window.outerWidth > 768;
    }

    onMounted(() => {
        store.dispatch('getUser')
        handleSidebarOpened();
        window.addEventListener('resize', handleSidebarOpened)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', handleSidebarOpened)
    })

</script>

<style scoped>

</style>
