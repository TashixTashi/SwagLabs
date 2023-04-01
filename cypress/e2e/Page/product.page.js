class Product 
{
    get itemName() {return('.inventory_item_name')}
    get itemPrice() {return ('.inventory_item_price')}
    get sortDropDown() {return ('.product_sort_container')}
    get itemsName() { return ('.inventory_item_name') }
    get itemsPrice() { return ('.inventory_item_price') }
    get selectSortDropDown() { return ('.product_sort_container') }

    get twitter() {return('[class="social_twitter"]')}
    get facebook() {return('[class="social_facebook"]')}
    get linkedIn() {return('[class="social_linked"]')}


    selectSort(sort)
    {
        cy.get(this.selectSortDropDown).select(sort)
    }
}
export default new Product()