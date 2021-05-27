import { createSelector } from 'reselect'

const selectDirectory = state => state.directory;
//esto lo vamos a llamar del directory component
export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)