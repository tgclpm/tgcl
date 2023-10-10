export interface IGetNumberOfTokensForBUSDResult {
    tokens: number;
    tokensWithBonus: number;
    availableTokens: number;
}

function getNumberOfTokensForBUSD(
    amount: number,
    categories: Array<any>,
    saledata: any,
): IGetNumberOfTokensForBUSDResult {
    const cats = [{...categories[0]}, {...categories[1]}, {...categories[2]}];
    const isPresale = saledata[1];
    // const salePrice = saledata[2] ? parseInt(saledata[2]._hex, 16) * 10 ** -18 : 0;
    const purchasedTokens = amount;

    // eslint-disable-next-line no-console
    // console.log('purchasedTokens', purchasedTokens);
    // eslint-disable-next-line no-console
    // console.log('salePrice', salePrice);
    // eslint-disable-next-line no-console
    // console.log('saledata', saledata);

    const result: IGetNumberOfTokensForBUSDResult = {
        tokens: amount,
        tokensWithBonus: 0,
        availableTokens: 0,
    };

    if (isPresale) {
        const catBonus = parseInt(cats[0].bonus._hex, 16);
        result.tokensWithBonus = (purchasedTokens * (100 + catBonus)) / 100; //Get total tokens, including bonus tokens
    } else {
        let purchasedTokens = amount;
        let tokensWithBonus = 0;

        cats.forEach(cat => {
            const categoryTokenCount: number = parseInt(cat.tokencount._hex, 16) * 10 ** -18;
            const catBonus = parseInt(cat.bonus._hex, 16);

            result.availableTokens += categoryTokenCount;

            if (categoryTokenCount !== 0 && categoryTokenCount >= purchasedTokens) {
                tokensWithBonus = tokensWithBonus + (purchasedTokens * (100 + catBonus)) / 100;
                cat.tokencount = categoryTokenCount - purchasedTokens;
                purchasedTokens = 0;
            } else {
                tokensWithBonus = tokensWithBonus + (categoryTokenCount * (100 + catBonus)) / 100;
                purchasedTokens = purchasedTokens - categoryTokenCount;
                cat.tokencount = 0;
            }
        });

        result.tokensWithBonus = tokensWithBonus;
    }

    return result;
}

export default getNumberOfTokensForBUSD;
