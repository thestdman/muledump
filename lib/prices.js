/* Singleton price table object */
var priceTable = {
    /* ID:Lookup Table */
    lookup_table: {
        'Potion of Attack': 'Attack',
        'Potion of Speed': 'Speed',
        'Potion of Vitality': 'Vitality',
        'Potion of Wisdom': 'Wisdom',
        'Potion of Dexterity': 'Dexterity',
        'Potion of Life': 'Life',
        'Potion of Mana': 'Mana',
        'Potion of Attack': 'Attack',
        'Staff of Diabolic Secrets': 'Staff of Diabolical Secrets',
    },
    price_table: null,
    timestamp: 0,
    fetch_url: 'lib/pricesDB.json',
    max_age: 3.6e6, // 1 hour
    warning_age: 24 * 3.6e6, // 1 day

    fetch: function (fetch_url) {
        $.ajax({
            type: 'GET',
            dataType: 'JSON',
            url: priceTable.fetch_url,
            success: function(data){
                console.log("DATA ARRAY: ", data);
                var names = [];
                if(data.length > 0 && data != null){
                    data.forEach(item => {
                        names.push(item.name);
                    });
                }
                console.log("ITEM NAMES: ", names);
            }
        });
    }
}

priceTable.fetch();