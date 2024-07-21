<script lang="ts" setup>
import { useVModel } from '@vueuse/core'

const props = defineProps<{
	modelValue?: string | number
	defaultValue?: string | number
}>()

const emits = defineEmits<{
	'update:modelValue': [payload: string | number]
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
	passive: true,
	defaultValue: props.defaultValue
})
</script>

<template>
	<input
		v-model="modelValue"
		class="font-regular peer flex w-full items-center border-0 bg-transparent text-sm text-black selection:bg-royal-blue-200 placeholder:text-fiord-500 focus:outline-none disabled:cursor-not-allowed disabled:text-fiord-300 disabled:placeholder:text-fiord-400 dark:text-fiord-300 dark:selection:bg-royal-blue-900 dark:placeholder:text-fiord-500 dark:disabled:text-fiord-600 dark:placeholder:disabled:text-fiord-600 [&:where([type='number'])]:[appearance:textfield]"
	/>
</template>
