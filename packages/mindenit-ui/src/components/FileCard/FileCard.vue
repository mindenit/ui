<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { IconButton } from '../IconButton'
import { ProgressBar } from '../ProgressBar'

const props = withDefaults(
	defineProps<{
		title: string
		description: string
		isUploaded?: boolean
		progress?: number
		uploadingFallback?: string
		completedFallback?: string
	}>(),
	{
		progress: 0,
		isUploaded: false,
		uploadingFallback: 'Uploading...',
		completedFallback: 'Completed',
	},
)

defineEmits(['cancel', 'remove'])

const value = ref(props.progress)
</script>

<template>
	<div
		class="flex min-h-[72px] w-full select-none flex-col gap-4 rounded-lg border border-fiord-300 bg-white p-3 dark:border-fiord-700 dark:bg-fiord-950"
	>
		<div class="inline-flex w-full items-start justify-between">
			<div class="inline-flex gap-3">
				<Icon class="size-10 text-fiord-500" icon="mynaui:file" />
				<div class="flex flex-col gap-1">
					<h5 class="text-sm font-medium text-black dark:text-white">
						{{ title }}
					</h5>
					<span class="inline-flex">
						<p class="text-xs text-fiord-500 dark:text-fiord-400">{{ description }}</p>
						<div class="ml-2 inline-flex items-center gap-1">
							<template v-if="isUploaded">
								<Icon class="size-4 text-christi-500" icon="ph:check-circle-fill" />
								<p class="text-xs text-black dark:text-white">{{ completedFallback }}</p>
							</template>
							<template v-else>
								<Icon class="size-3 text-royal-blue-500" icon="icon-park-outline:loading-one" />
								<p class="text-xs text-black dark:text-white">{{ uploadingFallback }}</p>
							</template>
						</div>
					</span>
				</div>
			</div>
			<IconButton
				v-if="isUploaded"
				icon="ph:trash"
				variant="ghost"
				size="sm"
				@click="$emit('remove')"
			/>
			<IconButton v-else icon="ph:x" variant="ghost" size="sm" @click="$emit('cancel')" />
		</div>
		<ProgressBar v-if="!isUploaded" v-model="value" class="w-full" :max="100" />
	</div>
</template>
