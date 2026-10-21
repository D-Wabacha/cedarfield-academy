import { school } from '../config/school'

export const telHref = (phone: string = school.contact.phone) => `tel:+${phone}`

export const whatsappHref = (message: string = school.contact.whatsappMessage, number: string = school.contact.whatsapp) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`

export const mailHref = (email: string = school.contact.email) => `mailto:${email}`
