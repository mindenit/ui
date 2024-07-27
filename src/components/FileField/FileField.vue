<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { FileTrigger } from '../FileTrigger'
import { ref } from 'vue'
import { useDropZone } from '@vueuse/core'

const props = withDefaults(
	defineProps<{
		title?: string
		description?: string
		fallback: string
		allowMultiple?: boolean
		acceptedFileFormats?: string[]
	}>(),
	{ allowMultiple: false }
)

const emits = defineEmits<{
	select: [files: File[]]
	overflow: [count: number]
}>()

const elementRef = ref<HTMLInputElement | null>()

const { isOverDropZone } = useDropZone(elementRef, {
	dataTypes: props.acceptedFileFormats,
	onDrop: (files) => {
		if (files && files.length > 1 && props.allowMultiple) {
			emits('overflow', files.length)
		} else if (files) {
			emits('select', files)
		}
	}
})
</script>

<template>
	<!-- eslint-disable tailwindcss/no-contradicting-classname -->
	<div
		v-bind="$attrs"
		ref="elementRef"
		class="box-border flex min-h-20 w-full flex-col items-center justify-center gap-5 rounded-lg border border-dashed border-fiord-300 p-8 data-[hovered=true]:border-fiord-500 data-[hovered=true]:border-fiord-600 data-[hovered=true]:bg-fiord-100 dark:border-fiord-700 dark:data-[hovered=true]:bg-fiord-900"
		:data-hovered="isOverDropZone"
	>
		<Icon class="size-8 text-fiord-500 dark:text-fiord-400" icon="ph:cloud-arrow-up" />
		<div class="flex flex-col gap-1 text-center">
			<h5 v-if="title" class="text-sm text-black dark:text-white">{{ title }}</h5>
			<p v-if="description" class="text-xs text-fiord-500">{{ description }}</p>
		</div>
		<FileTrigger
			:allow-multiple="allowMultiple"
			:accepted-file-types="acceptedFileFormats"
			@select="(files) => $emit('select', files)"
		>
			{{ fallback }}
		</FileTrigger>
	</div>
</template>
