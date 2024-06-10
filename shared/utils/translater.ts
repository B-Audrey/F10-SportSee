/**
 * Translates the text to the corresponding value
 * if the text is not found, it returns an empty string
 * @param text
 */
export const translater = (text: string): string => {
    text.toString().trim().toLowerCase();
    const translations = new Map();
    translations.set('cardio', 'Cardio');
    translations.set('energy', 'Energie');
    translations.set('endurance', 'Endurance');
    translations.set('strength', 'Force');
    translations.set('speed', 'Vitesse');
    translations.set('intensity', 'Intensité');
    translations.set('unknown', '');
    return translations.get(text);
};
