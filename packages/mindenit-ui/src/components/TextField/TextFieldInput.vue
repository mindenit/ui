<script lang="ts" setup>
import { useVModel } from '@vueuse/core'
import { ref } from 'vue'

const props = defineProps<{
	modelValue?: string | number
	defaultValue?: string | number
}>()

const emits = defineEmits<{
	'update:modelValue': [payload: string | number]
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
	passive: true,
	defaultValue: props.defaultValue,
})

const textFieldInput = ref<HTMLInputElement | null>(null)

defineExpose({
	ref: textFieldInput,
})
</script>

<template>
	<input
		v-bind="$attrs"
		ref="textFieldInput"
		v-model="modelValue"
		class="mindenit-text-field-input font-regular peer flex w-full items-center border-0 bg-transparent text-sm text-black selection:bg-royal-blue-200 placeholder:text-fiord-500 focus:outline-none disabled:cursor-not-allowed disabled:text-fiord-300 disabled:placeholder:text-fiord-400 dark:text-fiord-300 dark:selection:bg-royal-blue-900 dark:placeholder:text-fiord-500 dark:disabled:text-fiord-600 dark:placeholder:disabled:text-fiord-600 [&:where([type='number'])]:[appearance:textfield]"
	>
</template>

<style lang="css" scoped>
.mindenit-text-field-input[type='search']::-ms-clear,
.mindenit-text-field-input[type='search']::-ms-reveal {
	display: none;
	width: 0;
	height: 0;
}

.mindenit-text-field-input[type='search']::-webkit-search-decoration,
.mindenit-text-field-input[type='search']::-webkit-search-cancel-button,
.mindenit-text-field-input[type='search']::-webkit-search-results-button,
.mindenit-text-field-input[type='search']::-webkit-search-results-decoration {
	display: none;
}

.mindenit-text-field-input::-webkit-outer-spin-button,
.mindenit-text-field-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.mindenit-text-field-input[type='number'] {
	-moz-appearance: textfield;
}
</style>
