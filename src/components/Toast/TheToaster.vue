<script setup lang="ts">
import { isVNode } from 'vue'
import {
	Toast,
	ToastClose,
	ToastDescription,
	ToastProvider,
	ToastTitle,
	ToastViewport,
	ToastVariants,
	useToast
} from '.'
import { Icon } from '@iconify/vue'

const { toasts } = useToast()

const iconsMap = new Map<ToastVariants['variant'], string>([
	['error', 'ph:warning-circle-fill'],
	['feature', 'ph:magic-wand-fill'],
	['info', 'ph:info-fill'],
	['success', 'ph:check-circle-fill'],
	['warning', 'ph:warning-fill']
])
</script>

<template>
	<ToastProvider>
		<Toast
			class="flex flex-row items-start justify-start gap-3"
			v-for="toast in toasts"
			:key="toast.id"
			v-bind="toast"
		>
			<Icon class="size-5" :icon="iconsMap.get(toast.variant) as string" />
			<div class="!ml-0 flex flex-col items-start justify-start gap-1">
				<ToastTitle v-if="toast.title">
					{{ toast.title }}
				</ToastTitle>
				<template v-if="toast.description">
					<ToastDescription v-if="isVNode(toast.description)">
						<component :is="toast.description" />
					</ToastDescription>
					<ToastDescription v-else>
						{{ toast.description }}
					</ToastDescription>
				</template>
				<ToastClose />
			</div>
			<component :is="toast.action" />
		</Toast>
		<ToastViewport />
	</ToastProvider>
</template>
