<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { DateFormatter, getLocalTimeZone, today, type DateValue } from '@internationalized/date'
import {
	CalendarCell,
	CalendarCellTrigger,
	CalendarGrid,
	CalendarGridBody,
	CalendarGridHead,
	CalendarGridRow,
	CalendarHeadCell,
	CalendarHeader,
	CalendarNext,
	CalendarPrev,
	CalendarRoot,
	CalendarRootEmits,
	CalendarRootProps,
	PopoverContent,
	PopoverPortal,
	PopoverRoot,
	PopoverTrigger,
	useForwardPropsEmits
} from 'radix-vue'
import { computed } from 'vue'
import { Button } from '../Button'
import { cn } from '@/utils'

interface DatePickerProps extends Omit<CalendarRootProps, 'placeholder' | 'fixedWeeks'> {
	placeholder?: string
	formatFn: (value: Date) => string
}

const props = withDefaults(defineProps<DatePickerProps>(), {
	placeholder: 'Pick a date',
	locale: 'en-EN'
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

const df = new DateFormatter(props.locale, {
	month: 'long',
	year: 'numeric'
})

const header = computed(() => {
	return df.format(
		(props.modelValue ? (props.modelValue as DateValue) : today(getLocalTimeZone())).toDate(
			getLocalTimeZone()
		)
	)
})
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
				class="box-border flex h-fit w-[296px] flex-col rounded-lg border border-fiord-300 p-2"
				align="start"
				side="bottom"
				:side-offset="4"
			>
				<CalendarRoot v-bind="forwarded" v-slot="{ weekDays, grid }" fixed-weeks>
					<CalendarHeader class="inline-flex w-full items-center justify-between">
						<CalendarPrev as-child>
							<Button variant="ghost" appearance="icon">
								<Icon icon="ph:caret-left" />
							</Button>
						</CalendarPrev>
						<CalendarHeader class="text-sm">{{ header }}</CalendarHeader>
						<CalendarNext as-child>
							<Button variant="ghost" appearance="icon">
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
											class="font-sm flex size-10 items-center justify-center rounded-lg text-fiord-700 hover:bg-fiord-200 hover:text-black data-[selected]:border data-[selected]:border-royal-blue-600 data-[selected]:bg-royal-blue-500 data-[today]:bg-fiord-100 data-[selected]:text-white"
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
