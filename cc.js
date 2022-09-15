function updatePanelElements(item, attr, value) {
    PAGE.appGroups.forEach(function(index) { 
        index.items.forEach(function(element) { 
            if (element.itemdesc == item) {  
                element[attr] = value;
            }
        });
});
}

changeElements.forEach(function(index) {
    updatePanelElements(index.item, index.attr, index.value)
});
