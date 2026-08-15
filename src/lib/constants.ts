import { FC } from 'react';

const WHATSAPP_NUMBER = "917988296018";
const WHATSAPP_MESSAGE = "नमस्ते गुरुजी, मुझे ज्योतिष परामर्श चाहिए।";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const PHONE_URL = `tel:+917988296018`;

export const getWhatsAppUrl = (customMessage?: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customMessage || WHATSAPP_MESSAGE)}`;
};
