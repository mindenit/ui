<script lang="ts" setup>
import type { IconButtonProps } from '.'
import { Icon } from '@iconify/vue'
import { Primitive } from 'reka-ui'
import { iconButtonVariants } from '.'
import { cn } from '../../utils'

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
