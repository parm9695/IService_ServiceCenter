import { parseISO, format } from 'date-fns'
import th from 'date-fns/locale/th'
function convertThaiDate(inputDate) {
  // Parse the input date string in ISO format (YYYYMMDD)
  const parsedDate = parseISO(inputDate)

  // Format the date in the desired Thai date format
  const thaiDate = format(parsedDate, 'd MMMM yyyy', {
    locale: th,
  })

  return thaiDate
}

export { convertThaiDate }
