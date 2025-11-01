export interface PersistedUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  isAnonymous?: boolean;
  lastLogin: string;
}

const STORAGE_KEY = 'anonxUser';

export const persistSessionUser = (user: Omit<PersistedUser, 'lastLogin'>) => {
  if (typeof window === 'undefined') return;

  const payload: PersistedUser = {
    ...user,
    lastLogin: new Date().toISOString(),
  };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
};

export const clearPersistedUser = () => {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(STORAGE_KEY);
};

export const getPersistedUser = (): PersistedUser | null => {
  if (typeof window === 'undefined') return null;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as PersistedUser) : null;
  } catch (error) {
    console.error('Failed to parse persisted user', error);
    clearPersistedUser();
    return null;
  }
};

