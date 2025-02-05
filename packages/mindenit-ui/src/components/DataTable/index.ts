import type {
	ColumnFiltersState,
	PaginationState,
	Row,
	RowSelectionState,
	SortingState,
	Table,
	VisibilityState,
} from '@tanstack/vue-table'
import { computed, type ComputedRef, ref, type Ref } from 'vue'

export interface DataTableState {
	sorting: SortingState
	columnFilters: ColumnFiltersState
	columnVisibility: VisibilityState
	rowSelection: RowSelectionState
	pagination: PaginationState
}

export interface TableStateReturn {
	sorting: Ref<SortingState>
	columnFilters: Ref<ColumnFiltersState>
	columnVisibility: Ref<VisibilityState>
	rowSelection: Ref<RowSelectionState>
	pagination: Ref<PaginationState>
}

export const createTableState = (initialState?: Partial<DataTableState>): TableStateReturn => {
	return {
		sorting: ref<SortingState>(initialState?.sorting || []),
		columnFilters: ref<ColumnFiltersState>(initialState?.columnFilters || []),
		columnVisibility: ref<VisibilityState>(initialState?.columnVisibility || {}),
		rowSelection: ref<RowSelectionState>(initialState?.rowSelection || {}),
		pagination: ref<PaginationState>({
			pageIndex: 0,
			pageSize: 10,
			...initialState?.pagination,
		}),
	}
}

export interface TableStateUtils<TData> {
	setSorting: (sorting: SortingState) => void
	toggleSorting: (columnId: string, desc?: boolean) => void
	setColumnFilters: (filters: ColumnFiltersState) => void
	setFilter: (columnId: string, value: any) => void
	toggleRowSelection: (rowId: string) => void
	toggleAllRowsSelection: () => void
	setPagination: (pagination: PaginationState) => void
	setPageIndex: (pageIndex: number) => void
	setPageSize: (pageSize: number) => void
	toggleColumnVisibility: (columnId: string, value?: boolean) => void
	nextPage: () => void
	previousPage: () => void
	selectedRows: ComputedRef<Row<TData>[]>
	totalRows: ComputedRef<number>
	pageCount: ComputedRef<number>
	canNextPage: ComputedRef<boolean>
	canPreviousPage: ComputedRef<boolean>
}

export const useTableState = <TData>(
	table: Ref<Table<TData>>,
	state: TableStateReturn,
): TableStateUtils<TData> => {
	const setSorting = (sorting: SortingState): void => {
		state.sorting.value = sorting
	}

	const toggleSorting = (columnId: string, desc?: boolean): void => {
		const column = table.value.getColumn(columnId)
		if (column) {
			column.toggleSorting(desc)
		}
	}

	const setColumnFilters = (filters: ColumnFiltersState): void => {
		state.columnFilters.value = filters
	}

	const setFilter = (columnId: string, value: any): void => {
		const column = table.value.getColumn(columnId)
		if (column) {
			column.setFilterValue(value)
		}
	}

	const toggleRowSelection = (rowId: string): void => {
		const row = table.value.getRow(rowId)
		if (row) {
			row.toggleSelected()
		}
	}

	const toggleAllRowsSelection = (): void => {
		table.value.toggleAllRowsSelected()
	}

	const setPagination = (pagination: PaginationState): void => {
		state.pagination.value = pagination
	}

	const nextPage = (): void => {
		table.value.nextPage()
	}

	const previousPage = (): void => {
		table.value.previousPage()
	}

	const setPageIndex = (pageIndex: number): void => {
		state.pagination.value.pageIndex = pageIndex
	}

	const setPageSize = (pageSize: number): void => {
		state.pagination.value.pageSize = pageSize
	}

	const toggleColumnVisibility = (columnId: string, value?: boolean): void => {
		const column = table.value.getColumn(columnId)
		if (column) {
			column.toggleVisibility(value)
		}
	}

	const selectedRows = computed(() => table.value.getSelectedRowModel().rows)
	const totalRows = computed(() => table.value.getFilteredRowModel().rows.length)
	const pageCount = computed(() => table.value.getPageCount())
	const canNextPage = computed(() => table.value.getCanNextPage())
	const canPreviousPage = computed(() => table.value.getCanPreviousPage())

	return {
		setSorting,
		toggleSorting,
		setColumnFilters,
		setFilter,
		toggleRowSelection,
		toggleAllRowsSelection,
		setPagination,
		setPageIndex,
		setPageSize,
		toggleColumnVisibility,
		nextPage,
		previousPage,
		selectedRows,
		totalRows,
		pageCount,
		canNextPage,
		canPreviousPage,
	}
}

export const valueUpdater = <T>(
	updaterOrValue: T | ((old: T) => T),
	ref: Ref<T>,
): void => {
	ref.value = typeof updaterOrValue === 'function'
		? (updaterOrValue as ((old: T) => T))(ref.value)
		: updaterOrValue
}
