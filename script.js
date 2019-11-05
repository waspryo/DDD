public Money calculateShippingCost(Cart cart, ShippingOption selectedOption) {
    if (cart.getTotalPrice().lessThan(THRESHOLD_FOR_FREE_SHIPPING)) {
        Money shippingCost = getBaseShipmentCost(cart);
        for (Item item : cart.getItems()) {
            if (selectedOption == REGULAR) {
                shippingCost = shippingCost.add(RegularShipping.getCostForItem(item));
            } eles if (selectedOption == PRIME) {
                shippingCost = shippingCost.add(PrimeShipping.getCostForItem(item));
            }
        }
        return shippingCost;
    }
    return Money.ZERO;
}
