<script lang="ts" setup>
import { Label } from 'radix-vue'
import { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

interface Props {
	class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
	<Label :class="cn('text-sm font-medium leading-5 text-black dark:text-white', props.class)">
		<slot></slot>
	</Label>
</template>
