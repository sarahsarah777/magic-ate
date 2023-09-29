import {makeAutoObservable} from 'mobx'

interface YelpItem {
	name: string
	display_phone: string
	rating: number
	price: string
	url: string
	review_count: number
	location: {display_address: string[]}
	categories: {title: string}[]
}

export default class Store {

	constructor() {
		makeAutoObservable(this)
	}

	page = 'Magic Ate'
	term = 'resturant'
	location = 'Claremont'
	displayItem: YelpItem | null = null
	previousIndex = 0

	getRandomIndex = (x: number) => {
		let newIndex = Math.floor(Math.random() * x)
		if (newIndex === this.previousIndex) {
			this.getRandomIndex(x)
		} else {
			return newIndex
		}
	}

}
