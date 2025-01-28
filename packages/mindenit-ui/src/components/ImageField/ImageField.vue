<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { AvatarImage, AvatarRoot } from 'reka-ui'
import { computed, ref } from 'vue'
import { Button } from '../Button'
import { FileTrigger } from '../FileTrigger'

const props = withDefaults(
	defineProps<{
		title?: string
		description?: string
		fallbackIcon?: string
		acceptedFileFormats?: string[]
		maxSize?: number
	}>(),
	{ fallbackIcon: 'ph:image-fill', maxSize: 2 * 1024 * 1024 },
)

const emits = defineEmits<{
	'update:file': [file: File | null]
}>()

const file = ref<File | null>()

const uploadButtonFallback = computed(() => (file.value ? 'Change' : 'Upload'))

const handleSelect = (files: File[]) => {
	if (files[0].size <= props.maxSize) {
		file.value = files[0]
		emits('update:file', file.value)
	}
}

const handleReset = () => {
	file.value = null
	emits('update:file', file.value)
}

const src = computed(() => URL.createObjectURL(file.value as File))
const hasText = computed(() => props.title && props.description)
</script>

<template>
	<div class="inline-flex justify-start gap-4" :class="{ 'items-center': !hasText }">
		<AvatarRoot
			class="flex size-16 items-center justify-center rounded-full bg-fiord-300 dark:bg-fiord-800"
		>
			<AvatarImage
				v-if="file"
				class="size-full rounded-[inherit] object-cover"
				:src
				alt="Image preview"
			/>
			<Icon v-else class="size-10 text-white dark:text-fiord-400" :icon="fallbackIcon" />
		</AvatarRoot>
		<div class="flex flex-col gap-1">
			<h5 v-if="title" class="text-base leading-6 text-black">
				{{ title }}
			</h5>
			<p v-if="description" class="text-sm leading-5 text-fiord-400">
				{{ description }}
			</p>
			<div class="inline-flex gap-2" :class="{ 'mt-2': hasText }">
				<Button v-if="file" variant="danger" size="md" @click="handleReset">
					Remove
				</Button>
				<FileTrigger :accepted-file-types="acceptedFileFormats" @update:files="handleSelect">
					{{ uploadButtonFallback }}
				</FileTrigger>
			</div>
		</div>
	</div>
</template>
