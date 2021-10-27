
export function debounce(duration, cb) {
	let timer = null
	return function () {
		let context = this
		clearTimeout(timer)
		timer = setTimeout(() => {
			console.log('真正执行')
			cb.apply(context, arguments)
		}, duration)
	}
}
