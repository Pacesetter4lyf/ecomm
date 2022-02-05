 const getDate = () => {
    let date = new Date().toLocaleDateString().replaceAll("/", "-").split("-").reverse()
    let day = date[1]
    date[1] = date[2]
    date[2] = day
    if (date[1].length === 1) {
        date[1] = `0${date[1]}`
    }
    if (date[2].length === 1) {
        date[2] = `0${date[2]}`
    }
    date = date.join("-")
    return date
}


export default getDate