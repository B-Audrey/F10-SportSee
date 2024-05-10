export const translate = (text: string): string => {
    text.toString().trim().toLowerCase()
    const translations = new Map()
    translations.set('cardio', 'Cardio')
    translations.set('energy', 'Energie')
    translations.set('endurance', 'Endurance')
    translations.set('strength', 'Force')
    translations.set('speed', 'Vitesse')
    translations.set('intensity', 'Intensité')
    translations.set('unknown', 'Pas de valeur')
    return translations.get(text)
}

