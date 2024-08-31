<script lang="ts" setup>
import { ref } from 'vue'
import { Button } from '../Button'

const props = withDefaults(
	defineProps<{
		acceptedFileTypes?: string[]
		allowMultiple?: boolean
		maxSize?: number
	}>(),
	{ allowMultiple: false, maxSize: 2 * 1024 * 1024 }
)

const emits = defineEmits<{
	'update:files': [files: File[]]
}>()

const elementRef = ref<HTMLInputElement | null>(null)

const handleChange = (e: Event) => {
	const target = e.target as HTMLInputElement

	const files = Array.from(target.files ?? [])

	if (files.some((file) => file.size > props.maxSize)) {
		return
	}

	emits('update:files', files)
}

const handleClick = (e: Event) => {
	e.stopPropagation()

	if (elementRef.value?.value) {
		elementRef.value.value = ''
	}

	elementRef.value?.click()
}
</script>

<template>
	<Button variant="outlined" size="md" @click="handleClick">
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
