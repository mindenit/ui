<script lang="ts" setup>
import { ref } from 'vue'
import { Button } from '../Button'

withDefaults(
	defineProps<{
		acceptedFileTypes?: string[]
		allowMultiple?: boolean
	}>(),
	{ allowMultiple: false }
)

const emits = defineEmits<{
	select: [files: FileList | null]
}>()

const elementRef = ref<HTMLInputElement | null>(null)

const handleChange = (e: Event) => {
	const target = e.target as HTMLInputElement

	emits('select', target.files)
}

const handleClick = () => {
	if (elementRef.value?.value) {
		elementRef.value.value = ''
	}

	elementRef.value?.click()
}
</script>

<template>
	<Button variant="outlined" @click="handleClick">
		<slot></slot>
	</Button>
	<input
		v-bind="$attrs"
		class="hidden"
		ref="elementRef"
		type="file"
		:accept="acceptedFileTypes?.toString()"
		@change="handleChange"
		:multiple="allowMultiple"
	/>
</template>
