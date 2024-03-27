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
		class="font-regular peer flex w-full items-center border-0 bg-transparent pl-2 text-sm text-black selection:bg-royal-blue-200 focus:outline-none disabled:cursor-not-allowed dark:text-fiord-300 dark:selection:bg-royal-blue-900 dark:placeholder:text-fiord-500 [&:where([type='number'])]:[appearance:textfield]"
	/>
</template>
