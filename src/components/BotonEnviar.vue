<script>

export default {
    props: ['desactivar'],
}
</script>

<template>
    <div class="flex justify-center items-center space-x-4 text-base my-3">
        <button class="h-14 mx-2 sm:h-10 px-7 font-semibold rounded-md bg-pink-900 text-white my-2 justify-center shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" type="button">
            <slot></slot>
        </button>
    </div>
</template>