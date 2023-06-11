import { persisted } from 'svelte-local-storage-store';
import type { LogInReturnProps } from 'othent';
import { writable, type Writable } from 'svelte/store';

export const userData: Writable<LogInReturnProps | null> = persisted('othent:userData', null);
export const isLoading = writable(false);
