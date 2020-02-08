//This is a helper file, which contains some helper functions.

// This function takes an array of restaurants and sort it in ascending alphabet order.
export function sortRestaurantsAsc(restaurants){
    //Copy a new array to avoid mutation.
    const copied = restaurants.concat();
    copied.sort((a, b) => { 
        if(a.name.toUpperCase() < b.name.toUpperCase())
            { return -1;} 
        if(a.name.toUpperCase() > b.name.toUpperCase())
            { return 1;} 
        return 0;
    })
    return copied;
}

// This function takes an array of restaurants and sort it in descending alphabet order.
export function sortRestaurantsDes(restaurants){
    //Copy a new array to avoid mutation.
    const copied = restaurants.concat();
    copied.sort((a, b) => { 
        if(a.name.toUpperCase() < b.name.toUpperCase())
            { return 1;} 
        if(a.name.toUpperCase() > b.name.toUpperCase())
            { return -1;} 
        return 0;
    })
    return copied;
}