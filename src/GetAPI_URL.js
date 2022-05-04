
function GetAPI_URL(code = 'en') {
	return `https://fortniteapi.io/v2/shop?lang=${code}`
}
export { GetAPI_URL }