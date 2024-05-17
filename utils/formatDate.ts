export const formatDate = (dateString?: Date | string): string => {
    if (!dateString) return "error";

    const date = new Date(dateString).toLocaleDateString();
    const time = new Date(dateString).toLocaleTimeString();
    
    return `${date} - ${time}`
};