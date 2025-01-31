<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '../../utils'
import { useFormField } from './useFormField'

const props = defineProps<{
	class?: HTMLAttributes['class']
}>()

const { formDescriptionId } = useFormField()
</script>

<template>
	<p
		:id="formDescriptionId"
		:class="cn('text-sm text-fiord-500 selection:bg-royal-blue-200 dark:selection:bg-royal-blue-900', props.class)"
	>
		<slot />
	</p>
</template>
