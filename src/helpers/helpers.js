export const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
    }).format(value);
};

export const formatTimestamp = (value) => {
    return new Intl.DateTimeFormat('es-AR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit',
    }).format(value.toDate());
};

export const convertDateString = (value) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Intl.DateTimeFormat('es-AR', options).format(value.toDate());
};
