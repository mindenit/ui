<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { Label } from 'reka-ui'
import { cn } from '../../utils'

interface Props {
	class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
	<Label
		:class="cn('text-sm font-medium leading-5 text-black dark:text-white, selection:bg-royal-blue-200 dark:selection:bg-royal-blue-900', props.class)"
	>
		<slot />
	</Label>
</template>
