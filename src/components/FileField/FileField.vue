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
		maxSize?: number
		fileLimit?: number
	}>(),
	{ allowMultiple: false, maxSize: 2 * 1024 * 1024, fileLimit: 1 }
)

const emits = defineEmits<{
	'update:files': [files: File[]]
}>()

const elementRef = ref<HTMLInputElement | null>()

const { isOverDropZone } = useDropZone(elementRef, {
	dataTypes: props.acceptedFileFormats,
	onDrop: (files) => {
		if (files && files.length > 1 && props.allowMultiple) {
			return
		}

		if (files) {
			if (files.length > props.fileLimit) {
				return
			}

			if (files.some((file) => file.size > props.maxSize)) {
				return
			}

			emits('update:files', files)
		}
	}
})
</script>

<template>
	<!-- eslint-disable tailwindcss/no-contradicting-classname -->
	<label
		v-bind="$attrs"
		ref="elementRef"
		class="box-border flex min-h-20 w-full flex-col items-center justify-center gap-5 rounded-lg border border-dashed border-fiord-300 p-8 hover:cursor-pointer hover:border-fiord-500 hover:bg-fiord-100 data-[hovered=true]:cursor-pointer data-[hovered=true]:border-fiord-500 data-[hovered=true]:bg-fiord-100 dark:border-fiord-700 dark:hover:border-fiord-600 dark:hover:bg-fiord-900 dark:data-[hovered=true]:border-fiord-600 dark:data-[hovered=true]:bg-fiord-900"
		for="file-trigger"
		:data-hovered="isOverDropZone"
	>
		<Icon class="size-8 text-fiord-500 dark:text-fiord-400" icon="ph:cloud-arrow-up" />
		<div class="flex flex-col gap-1 text-center">
			<h5 v-if="title" class="text-sm text-black dark:text-white">{{ title }}</h5>
			<p v-if="description" class="text-xs text-fiord-500">{{ description }}</p>
		</div>
		<FileTrigger
			id="file-trigger"
			:allow-multiple="allowMultiple"
			:accepted-file-types="acceptedFileFormats"
			@update:files="(files) => $emit('update:files', files)"
		>
			{{ fallback }}
		</FileTrigger>
	</label>
</template>
