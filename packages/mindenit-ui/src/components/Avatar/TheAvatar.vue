<script lang="ts" setup>
import type { AvatarProps } from '.'
import { AvatarFallback, AvatarImage, AvatarRoot } from 'reka-ui'
import { computed } from 'vue'
import { avatarVariants } from '.'
import { cn } from '../../utils'

const props = withDefaults(defineProps<AvatarProps>(), { size: '32px', fallback: '' })

const computedSize = computed(() => {
	return {
		width: props.size,
		height: props.size,
	}
})

const computedClasses = computed(() => cn(avatarVariants({ size: props.size })))
</script>

<template>
	<AvatarRoot
		class="pointer-events-none inline-flex select-none items-center justify-center overflow-hidden rounded-full bg-fiord-200 align-middle"
		:style="computedSize"
	>
		<AvatarImage class="size-full rounded-[inherit] object-cover" :src="props.url" alt="Avatar" />
		<AvatarFallback
			class="flex size-full items-center justify-center bg-fiord-200 font-medium"
			:class="computedClasses"
			:style="computedSize"
			:delay-ms="600"
		>
			{{ props.fallback }}
		</AvatarFallback>
	</AvatarRoot>
</template>
