export const formatDate = (dateString: string) => {
    const cleanedDateString = dateString.split(' (')[0]

    const date = new Date(cleanedDateString);
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
}