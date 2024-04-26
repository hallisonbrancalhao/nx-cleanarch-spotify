import { sharedDataAccess } from '@nx-cleanarch-spotify/shared-data-access';
export function dataAccess(): string {
  const sharedDataAccessValue = sharedDataAccess();
  return `dataAccess: ${sharedDataAccessValue}`;
}
