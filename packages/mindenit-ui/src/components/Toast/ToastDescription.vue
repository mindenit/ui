<script setup lang="ts">
import { ToastDescription, type ToastDescriptionProps } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '../../utils'

const props = defineProps<ToastDescriptionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props

	return delegated
})
</script>

<template>
	<ToastDescription
		:class="cn('text-sm text-fiord-500 dark:text-fiord-400', props.class)"
		v-bind="delegatedProps"
	>
		<slot />
	</ToastDescription>
</template>
