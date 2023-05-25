import { persisted } from 'svelte-local-storage-store';
import type { LogInReturnProps } from 'othent';
import type { Writable } from 'svelte/store';

export const userData: Writable<LogInReturnProps | null> = persisted('userData', null);
