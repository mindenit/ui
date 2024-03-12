<script lang="ts" setup>
import { computed } from 'vue'
import { cn } from '@/utils'
import { headingVariants, type HeadingProps } from '.'

const props = defineProps<HeadingProps>()

const sizes = {
	large: '1',
	medium: '2',
	small: '3',
	tiny: '4'
}

const tag = computed(() => {
	return `h${sizes[props.size!]}`
})
</script>

<template>
	<component :is="tag" :class="cn(headingVariants({ size }), props.class)"><slot /></component>
</template>
