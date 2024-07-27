<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { AvatarImage, AvatarRoot } from 'radix-vue'
import { computed } from 'vue'
import { Button } from '../Button'
import { FileTrigger } from '../FileTrigger'

const props = withDefaults(
	defineProps<{
		title?: string
		description?: string
		fallbackIcon?: string
		acceptedFileFormats?: string[]
	}>(),
	{ fallbackIcon: 'ph:image-fill' }
)

const model = defineModel<File | null>()

const uploadButtonFallback = computed(() => (model.value ? 'Change' : 'Upload'))

const handleSelect = (files: FileList | null) => {
	if (files) {
		model.value = files.item(0)
	}
}

const handleReset = () => {
	model.value = null
}

const src = computed(() => URL.createObjectURL(model.value as File))
const hasText = computed(() => props.title && props.description)
</script>

<template>
	<div class="inline-flex justify-start gap-4" :class="{ 'items-center': !hasText }">
		<AvatarRoot
			class="flex size-16 items-center justify-center rounded-full bg-fiord-300 dark:bg-fiord-800"
		>
			<AvatarImage
				v-if="model"
				class="size-full rounded-[inherit] object-cover"
				:src
				alt="Image preview"
			/>
			<Icon v-else class="size-10 text-white dark:text-fiord-400" :icon="fallbackIcon" />
		</AvatarRoot>
		<div class="flex flex-col gap-1">
			<h5 v-if="title" class="text-base leading-6 text-black">{{ title }}</h5>
			<p v-if="description" class="text-sm leading-5 text-fiord-400">{{ description }}</p>
			<div class="inline-flex gap-2" :class="{ 'mt-2': hasText }">
				<Button v-if="model" variant="danger" @click="handleReset">Remove</Button>
				<FileTrigger :accepted-file-types="acceptedFileFormats" @select="handleSelect">
					{{ uploadButtonFallback }}
				</FileTrigger>
			</div>
		</div>
	</div>
</template>
