const displayImages = (images = []) => {
	const body = document.body
	images.forEach(image => Img(image, body))
}

document.addEventListener("DOMContentLoaded", () => {
	displayImages(images)
})