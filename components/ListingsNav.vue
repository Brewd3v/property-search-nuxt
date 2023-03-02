<script setup>
defineProps({
    tab: {
        type: String,
        required: true,
    },
    length: {
        type: Number,
        default: 0,
        required: true,
    },
    pending: {
        type: Boolean,
        required: true,
    },
    refresh: {
        type: Function,
        required: true,
    },
})

</script>

<template>
    <div class="mt-4 flex items-baseline justify-between">
        <h2 class="text-sm tracking-wide font-semibold text-gray-900 uppercase">
            Total first page results: {{ length }}
        </h2>
        <button @click.prevent="() => refresh()" type="button"
            class="duration-300 inline-flex items-center rounded-md border border-transparent bg-teal-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-5 h-5 mr-2" :class="{
                    'animate-spin': pending,
                }">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            <span v-if="isPending">Loading...</span>
            <span v-else class="capitalize">Refresh {{ tab }}</span>
        </button>
    </div>
</template>