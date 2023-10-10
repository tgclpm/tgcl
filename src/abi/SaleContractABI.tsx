export const SaleContractABI = [
    //Read Only Functions
    'function purchaseEnabled() public view returns (bool)',
    'function preSaleOnly() public view returns (bool)',
    'function salePrice() public view returns (uint256)',
    'function saleRoundName() public view returns (string)',
    'function categories(uint256) public view returns (tuple(uint256 bonus, uint256 tokencount) Category)',
    'function whitelist(address) public view returns (uint256)',
    'function calculateExpectedTokens(uint256 amount) view returns(uint256)',
    'function startingTokensWithoutBonus() view returns(uint256)',
    //Authenticated Functions
    'function purchaseToken(uint256 amount, string referralCode)',
    'function sellTokensForBUSD(uint256 amount)',
    // Events
    'event TokensPurchased(uint256 paidBUSD, uint256 receivedtokens, string referralcode, address account)',
    'event TokensSold(uint256 paidtokens, uint256 receivedBUSD, address account)',
    'event PurchaseEnabled (bool purchaseEnabled)',
    'event ReversePurchaseEnabled (bool reversePurchaseEnabled)',
    'event PresaleEnabled (bool presaleEnabled)',
    'event SaleCreated (Category[3] categories, uint256 salePrice, string saleRoundName)',
];
