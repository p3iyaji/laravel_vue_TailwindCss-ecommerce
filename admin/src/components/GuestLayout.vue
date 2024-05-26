<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <!--            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />-->
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 py-6">
            {{ title }}
            </h2>
            <slot> </slot>
<!--            <form class="space-y-6" @submit.prevent="emit('submit')" method="POST">-->
<!--                <slot></slot>-->
<!--            </form>  THIS CAN BE USED IF WE WANT TO EMIT FORM ACTIONS FROM THE GUEST LAYOUT-->
        </div>

    </div>
</template>

<script setup>
    const {title} = defineProps({
        title: String
    })
    // PROPS TO BE USED TO EMIT FORM ACTION FROM GUESTLAYOUT
    //const emit = defineEmits(['submit'])
</script>

<style scoped>

</style>
