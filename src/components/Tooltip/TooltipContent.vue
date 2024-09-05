<script lang="ts" setup>
import { TooltipArrow, TooltipContent } from 'radix-vue'
</script>
<template>
	<TooltipContent
		class="select-none rounded-[6px] bg-white px-[10px] py-[4px] text-sm text-black shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade dark:bg-fiord-900 dark:text-white"
		:side-offset="5"
	>
		<slot />
		<TooltipArrow class="fill-white dark:fill-fiord-900" :width="8" />
	</TooltipContent>
</template>
