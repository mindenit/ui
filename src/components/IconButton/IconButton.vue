<script lang="ts" setup>
import { IconButtonProps, iconButtonVariants } from '.'
import { cn } from '@/utils'
import { Icon } from '@iconify/vue'
import { Primitive } from 'radix-vue'

const props = withDefaults(defineProps<IconButtonProps>(), { asChild: false })
</script>

<template>
	<Primitive
		v-bind="$attrs"
		as="button"
		:as-child="asChild"
		:class="cn(iconButtonVariants({ variant, size }), props.class)"
	>
		<Icon :icon />
	</Primitive>
</template>
