<script lang="ts" setup>
import { computed } from 'vue'
import { cn } from '@/utils'
import { textVariants, type TextProps } from '.'

const props = defineProps<TextProps>()

const tag = computed(() => {
	return props.type === 'link' ? 'a' : 'p'
})
</script>

<template>
	<component :is="tag" :class="cn(textVariants({ type }), props.class)"><slot /></component>
</template>
