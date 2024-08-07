<script lang="ts" setup></script>
<template>
	<div class="inline-flex" role="group"><slot /></div>
</template>
<style scoped>
::v-deep button {
	@apply rounded-none;
}

::v-deep button:first-child {
	@apply rounded-l-lg;
}

::v-deep button:last-child {
	@apply rounded-r-lg;
}
</style>
