<script lang="ts" setup>
import type { AlertProps, AlertVariants } from '.'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import { alertVariants } from '.'

const props = withDefaults(defineProps<AlertProps>(), { status: 'feature' })

const iconsMap = new Map<AlertVariants['status'], string>([
	['error', 'lucide:circle-alert'],
	['feature', 'lucide:wand-sparkles'],
	['info', 'lucide:info'],
	['success', 'lucide:circle-check'],
	['warning', 'lucide:triangle-alert'],
])

const icon = computed(() => iconsMap.get(props.status) as string)
</script>

<template>
	<div :class="alertVariants({ status })" role="alert">
		<Icon :icon="icon" />
		<div class="flex w-full flex-col gap-1">
			<slot />
		</div>
	</div>
</template>
