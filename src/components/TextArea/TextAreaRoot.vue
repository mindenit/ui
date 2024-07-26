<script lang="ts" setup>
import { cn } from '@/utils'
import { computed } from 'vue'
import { TextAreaProps, TextAreaVariant, textAreaVariants } from '.'

const props = withDefaults(defineProps<TextAreaProps>(), { class: '', error: false })

const variant = computed((): TextAreaVariant['variant'] => {
	return props.error ? 'error' : 'default'
})
</script>

<template>
	<div :class="cn(textAreaVariants({ variant: variant }), props.class)" :data-variant="variant">
		<slot></slot>
	</div>
</template>
