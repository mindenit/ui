<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { DialogDescription, DialogTitle } from 'reka-ui'
import { DialogClose } from '.'
import { Button } from '../Button'

interface DialogHeaderProps {
	title: string
	description?: string
	icon?: string
}

defineProps<DialogHeaderProps>()
</script>

<template>
	<header
		class="inline-flex w-full items-start justify-between border-b border-b-fiord-200 p-4 dark:border-b-fiord-800"
	>
		<div class="inline-flex gap-3">
			<span
				v-if="icon"
				class="flex size-10 items-center justify-center rounded-full border border-fiord-200 bg-transparent dark:border-fiord-800"
			>
				<Icon class="text-xl text-fiord-500 dark:text-fiord-400" :icon />
			</span>
			<div class="flex flex-col gap-1">
				<DialogTitle class="text-sm font-medium text-black dark:text-white">
					{{ title }}
				</DialogTitle>
				<DialogDescription v-if="description" class="text-xs text-fiord-500 dark:text-fiord-400">
					{{ description }}
				</DialogDescription>
			</div>
		</div>
		<DialogClose>
			<Button variant="ghost" appearance="icon" class="size-7 [&_svg]:size-4">
				<Icon icon="ph:x" />
			</Button>
		</DialogClose>
	</header>
</template>
