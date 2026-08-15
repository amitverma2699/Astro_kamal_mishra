import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  type ReactNode,
  type FC,
} from 'react';
import { translations, type Language, type Translations } from '@/lib/translations';

const STORAGE_KEY = 'astro-consult-language';

function readStoredLanguage(): Language | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'hi' || stored === 'en') {
      return stored;
    }
  } catch {
    // localStorage can be unavailable (private browsing, blocked storage, etc.)
    // Fall back silently to the default language instead of throwing.
  }
  return null;
}

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'hi';
  }
  return readStoredLanguage() ?? 'hi';
}

interface LanguageContextValue {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore storage write failures -- language still works for this session.
    }
    document.documentElement.lang = language === 'hi' ? 'hi' : 'en';
  }, [language]);

  const setLanguage = (lang: Language) => setLanguageState(lang);
  const toggleLanguage = () => setLanguageState((prev) => (prev === 'hi' ? 'en' : 'hi'));

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      t: translations[language],
      setLanguage,
      toggleLanguage,
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useTranslation(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return ctx;
}
