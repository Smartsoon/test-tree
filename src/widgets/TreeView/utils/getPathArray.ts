export const getPathArray = (id: string) => {
    return id.replaceAll('@', '@children@').split('@')
}