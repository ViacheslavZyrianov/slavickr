export default function (params) {
	let paramsString = ''
	for (const key in params) {
		paramsString += `${key}=${params[key]}&`
	}
	return paramsString.slice(0, -1)
}
