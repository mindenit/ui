<script lang="ts" setup>
import { computed } from 'vue'
import { AlertProps, AlertVariants, alertVariants } from '.'
import { Icon } from '@iconify/vue'

const props = withDefaults(defineProps<AlertProps>(), { status: 'feature' })

const iconsMap = new Map<AlertVariants['status'], string>([
	['error', 'ph:warning-circle-fill'],
	['feature', 'ph:magic-wand-fill'],
	['info', 'ph:info-fill'],
	['success', 'ph:check-circle-fill'],
	['warning', 'ph:warning-fill']
])

const icon = computed(() => iconsMap.get(props.status) as string)
</script>

<template>
	<div :class="alertVariants({ status })" role="alert">
		<Icon :icon="icon" />
		<div class="flex w-full flex-col gap-1">
			<slot></slot>
		</div>
	</div>
</template>
