import { performance } from 'perf_hooks'

let fuc = 0

function parseLineParameters(line: string): Record<string, string | boolean> {
	// https://newbedev.com/javascript-split-string-by-space-but-ignore-space-in-quotes-notice-not-to-split-by-the-colon-too
	const match = line.match(/\\?.|^$/g)
	const fragments = match
		? match.reduce(
				(p, c) => {
					if (c === '"') {
						p.quote ^= 1
					} else if (!p.quote && c === ' ') {
						p.a.push('')
					} else {
						p.a[p.a.length - 1] += c.replace(/\\(.)/, '$1')
					}
					return p
				},
				{ a: [''], quote: 0 }
		  ).a
		: []

	const res: Record<string, string | boolean> = {}

	for (const fragment of fragments) {
		const [key, value] = fragment.split('=')
		res[key] = value === undefined ? true : value
	}

	return res
}

function parseLineParameters2(line: string): Record<string, string | boolean> {
	let fragments: string[] = ['']
	let quotes = 0

	for (let i = 0; i < line.length; i++) {
		let c = line[i]
		if (c == '\\') {
			i++
			c += line[i]
		}

		if (c === '"') {
			quotes ^= 1
		} else if (!quotes && c === ' ') {
			fragments.push('')
		} else {
			fragments[fragments.length - 1] += c.length === 2 ? c[1] : c
		}
	}

	const res: Record<string, string | boolean> = {}

	for (const fragment of fragments) {
		const [key, value] = fragment.split('=', 2)
		res[key] = value === undefined ? true : value
	}

	// Target:
	// [ 'KEY-STATE', 'abc=aa', 'ccc=rr', 'ff', 'buffer=a " bc' ]

	return res
}

function makeSafe(index: number): number {
	if (index === -1) return Number.POSITIVE_INFINITY
	return index
}

function parseLineParameters3(line: string): Record<string, string | boolean> {
	let fragments: string[] = ['']
	let quotes = 0

	let i = 0
	while (i < line.length) {
		// Find the next characters of interest
		const spaceIndex = makeSafe(line.indexOf(' ', i))
		const slashIndex = makeSafe(line.indexOf('\\', i))
		const quoteIndex = makeSafe(line.indexOf('"', i))

		// Find which is closest
		let o = Math.min(spaceIndex, slashIndex, quoteIndex)
		if (!isFinite(o)) {
			// None were found, copy the remainder and stop
			const slice = line.substring(i)
			fragments[fragments.length - 1] += slice

			break
		} else {
			// copy the slice before this character
			const slice = line.substring(i, o)
			fragments[fragments.length - 1] += slice

			const c = line[o]
			if (c == '\\') {
				// If char is a slash, the character following it is of interest
				// Future: does this consider non \" chars?
				fragments[fragments.length - 1] += line[o + 1]

				i = o + 2
			} else {
				i = o + 1

				// Figure out what the char was
				if (c === '"') {
					quotes ^= 1
				} else if (!quotes && c === ' ') {
					fragments.push('')
				} else {
					fragments[fragments.length - 1] += c
				}
			}
		}
	}

	const res: Record<string, string | boolean> = {}

	for (const fragment of fragments) {
		const [key, value] = fragment.split('=', 2)
		res[key] = value === undefined ? true : value
	}

	// console.log(fragments)

	// Target:
	// [ 'KEY-STATE', 'abc=aa', 'ccc=rr', 'ff', 'buffer=a " bc' ]

	return res
}

function parseLineParameters4(line: string): Record<string, string | boolean> {
	let fragments: string[] = ['']
	let quotes = 0

	let i = 0
	while (i < line.length) {
		let nextIndex = i
		for (; nextIndex < line.length; nextIndex++) {
			const c = line[nextIndex]
			if (c === ' ' || c === '\\' || c === '"') break
		}
		// // Find the next characters of interest
		// const spaceIndex = makeSafe(line.indexOf(' ', i))
		// const slashIndex = makeSafe(line.indexOf('\\', i))
		// const quoteIndex = makeSafe(line.indexOf('"', i))

		// // Find which is closest
		// let o = Math.min(spaceIndex, slashIndex, quoteIndex)
		let o = nextIndex
		// if (!isFinite(o)) {
		if (nextIndex === line.length) {
			// None were found, copy the remainder and stop
			const slice = line.substring(i)
			fragments[fragments.length - 1] += slice

			break
		} else {
			// copy the slice before this character
			const slice = line.substring(i, o)
			fragments[fragments.length - 1] += slice

			const c = line[o]
			if (c == '\\') {
				// If char is a slash, the character following it is of interest
				// Future: does this consider non \" chars?
				fragments[fragments.length - 1] += line[o + 1]

				i = o + 2
			} else {
				i = o + 1

				// Figure out what the char was
				if (c === '"') {
					quotes ^= 1
				} else if (!quotes && c === ' ') {
					fragments.push('')
				} else {
					fragments[fragments.length - 1] += c
				}
			}
		}
	}

	const res: Record<string, string | boolean> = {}

	for (const fragment of fragments) {
		const [key, value] = fragment.split('=', 2)
		res[key] = value === undefined ? true : value
	}

	// console.log(fragments)

	// Target:
	// [ 'KEY-STATE', 'abc=aa', 'ccc=rr', 'ff', 'buffer=a " bc' ]

	return res
}

// const buf = '"aa \\" \\t b"' //Buffer.alloc(72 * 72 * 3).toString('base64')
const buf = Buffer.alloc(72 * 72 * 3).toString('base64')
const input = `KEY-STATE abc=aa ccc=rr ff buffer=${buf}`

const count = 100
const t = performance.now()
let a = null
for (let i = 0; i < count; i++) {
	a = parseLineParameters(input)
}
console.log(`parseLineParameters took ${performance.now() - t}ms for ${count} runs`)

const t2 = performance.now()
let b = null
for (let i = 0; i < count; i++) {
	b = parseLineParameters2(input)
}
console.log(`parseLineParameters2 took ${performance.now() - t2}ms for ${count} runs`)

const t3 = performance.now()
let c = null
for (let i = 0; i < count; i++) {
	c = parseLineParameters3(input)
}
console.log(`parseLineParameters3 took ${performance.now() - t3}ms for ${count} runs`)

const t4 = performance.now()
let d = null
for (let i = 0; i < count; i++) {
	d = parseLineParameters4(input)
}
console.log(`parseLineParameters4 took ${performance.now() - t4}ms for ${count} runs`)

console.log(
	`verify `,
	JSON.stringify(a) === JSON.stringify(b),
	JSON.stringify(a) === JSON.stringify(c),
	JSON.stringify(a) === JSON.stringify(d)
)
// console.log(b, c)

console.log(fuc)
