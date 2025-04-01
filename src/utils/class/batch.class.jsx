class Batch { 
    constructor(itemName, itemICAId, totalWeight, indications, ingredients, usefulLife){ 
        if (!itemName || !itemICAId || !totalWeight || !indications || !ingredients || usefulLife === undefined) {
            throw new Error(
                "Batch must have a valid item name, item ICA Id, total weight, indications, ingredients, and useful life"
            );
        }

        if (typeof usefulLife !== "number" || usefulLife >= 13 || usefulLife < 0) {
            throw new Error("Useful life must be a number smaller than 13 and non-negative");
        }


        this.itemName = itemName;
        this.itemICAId = itemICAId;
        this.totalWeight = totalWeight;
        this.indications = indications;
        this.ingredients = ingredients; 
        this.usefulLife = usefulLife;
        

        
    }
    
    
}

export default Batch;
