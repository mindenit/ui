export interface LinkProps {
	asChild: boolean
}

export type LinkPropsWithHref = {
	default: string
	asChild: boolean
	href: string
}

export { default as Link } from './TheLink.vue'
