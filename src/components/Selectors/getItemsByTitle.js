
export const getItemsByTitle = (items , name) => {
    
    if(name.length === 0) {
        return[];
    }
    name = name.toLowerCase();
    return (items.filter(item => item.title.toLowerCase().includes(name)));
}

