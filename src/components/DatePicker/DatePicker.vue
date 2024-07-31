<script lang="ts" setup>
import { cn } from '@/utils'
import { Icon } from '@iconify/vue'
import { getLocalTimeZone, today, type DateValue } from '@internationalized/date'
import {
	CalendarCell,
	CalendarCellTrigger,
	CalendarGrid,
	CalendarGridBody,
	CalendarGridHead,
	CalendarGridRow,
	CalendarHeadCell,
	CalendarHeader,
	CalendarHeading,
	CalendarNext,
	CalendarPrev,
	CalendarRoot,
	CalendarRootEmits,
	PopoverContent,
	PopoverPortal,
	PopoverRoot,
	PopoverTrigger,
	useForwardPropsEmits
} from 'radix-vue'
import { computed } from 'vue'
import { DatePickerProps } from '.'
import { Button } from '../Button'
import { SelectContent, SelectItem, SelectRoot, SelectTrigger } from '../Select'

const props = withDefaults(defineProps<DatePickerProps>(), {
	placeholder: 'Pick a date',
	locale: 'en-EN',
	presetsPlaceholder: 'Select preset'
})

const emits = defineEmits<CalendarRootEmits>()

const delegatedProps = computed(() => {
	const { placeholder, formatFn, ...delegated } = props

	return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const btnFallback = computed(() => {
	return props.modelValue
		? props.formatFn((props.modelValue as DateValue).toDate(getLocalTimeZone()))
		: props.placeholder
})

const handlePreset = (value: string) => {
	if (!value) return

	const newDate = today(getLocalTimeZone()).add({ days: Number(value) })

	emits('update:modelValue', newDate)
}
</script>

<template>
	<PopoverRoot>
		<PopoverTrigger as-child>
			<Button :class="cn('w-[280px] justify-start')" variant="outlined">
				<Icon icon="ph:calendar-dots" />
				{{ btnFallback }}
			</Button>
		</PopoverTrigger>
		<PopoverPortal>
			<PopoverContent
				class="box-border flex h-fit w-[296px] flex-col gap-3 rounded-xl border border-fiord-300 p-2 dark:border-fiord-700"
				align="start"
				side="bottom"
				:side-offset="4"
			>
				<div v-if="presets">
					<SelectRoot @update:model-value="handlePreset">
						<SelectTrigger class="w-full" :placeholder="presetsPlaceholder" />
						<SelectContent>
							<SelectItem
								v-for="preset in presets"
								:key="preset.value"
								:value="preset.value.toString()"
							>
								{{ preset.label }}
							</SelectItem>
						</SelectContent>
					</SelectRoot>
				</div>
				<CalendarRoot v-bind="forwarded" v-slot="{ weekDays, grid }" fixed-weeks>
					<CalendarHeader
						class="inline-flex w-full items-center justify-between rounded-lg bg-fiord-100 p-2 dark:bg-fiord-900"
					>
						<CalendarPrev as-child>
							<Button
								class="size-6 bg-white dark:bg-fiord-950 [&_svg]:size-4"
								variant="ghost"
								appearance="icon"
							>
								<Icon icon="ph:caret-left" />
							</Button>
						</CalendarPrev>
						<CalendarHeading class="text-sm text-black dark:text-white" />
						<CalendarNext as-child>
							<Button
								class="size-6 bg-white dark:bg-fiord-950 [&_svg]:size-4"
								variant="ghost"
								appearance="icon"
							>
								<Icon icon="ph:caret-right" />
							</Button>
						</CalendarNext>
					</CalendarHeader>
					<div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
						<CalendarGrid
							class="w-full border-collapse select-none space-y-1"
							v-for="month in grid"
							:key="month.value.toString()"
						>
							<CalendarGridHead>
								<CalendarGridRow class="grid w-full grid-cols-7">
									<CalendarHeadCell
										class="flex size-10 items-center justify-center text-sm font-normal text-fiord-500"
										v-for="day in weekDays"
										:key="day"
									>
										{{ day }}
									</CalendarHeadCell>
								</CalendarGridRow>
							</CalendarGridHead>
							<CalendarGridBody class="grid">
								<CalendarGridRow
									v-for="(weekDates, index) in month.rows"
									:key="`weekDate-${index}`"
									class="grid grid-cols-7"
								>
									<CalendarCell
										v-for="weekDate in weekDates"
										:key="weekDate.toString()"
										:date="weekDate"
									>
										<CalendarCellTrigger
											class="font-sm flex size-10 items-center justify-center rounded-lg text-fiord-700 hover:bg-fiord-200 hover:text-black data-[selected]:border data-[selected]:border-royal-blue-600 data-[selected]:bg-royal-blue-500 data-[today]:bg-fiord-100 data-[today]:data-[selected]:bg-royal-blue-500 data-[outside-view]:text-fiord-400 data-[selected]:text-white data-[outside-view]:hover:text-black dark:text-fiord-400 dark:hover:bg-fiord-800 dark:hover:text-white dark:data-[selected]:border-royal-blue-400 dark:data-[today]:bg-fiord-900 dark:data-[today]:data-[selected]:bg-royal-blue-500 dark:data-[outside-view]:text-fiord-600 dark:data-[selected]:text-white dark:data-[selected]:hover:bg-royal-blue-500 dark:data-[today]:data-[selected]:hover:bg-royal-blue-500 dark:data-[today]:hover:bg-fiord-800 dark:data-[outside-view]:hover:text-white"
											:day="weekDate"
											:month="month.value"
										/>
									</CalendarCell>
								</CalendarGridRow>
							</CalendarGridBody>
						</CalendarGrid>
					</div>
				</CalendarRoot>
			</PopoverContent>
		</PopoverPortal>
	</PopoverRoot>
</template>
