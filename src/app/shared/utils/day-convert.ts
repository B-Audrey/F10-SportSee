/**
 * Convert day from number to string
 * @param day
 */
export const convertDay = (day: string): string => {
    const days  = new Map ()
    days.set('1', "L")
    days.set('2', "M")
    days.set('3', "M")
    days.set('4', "J")
    days.set('5', "V")
    days.set('6', "S")
    days.set('7', "D")
    return days.get(day)
}
