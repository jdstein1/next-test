module.exports = {

    api: {
        current: 'https://api.coindesk.com/v1/bpi/currentprice.json',
        countryPre: 'https://api.coindesk.com/v1/bpi/currentprice/',
        countryCode: 'USD',
        countryPost: '.json',
        historical: 'https://api.coindesk.com/v1/bpi/historical/close.json'
    },
    getBPI: ( { args } ) => {

        if (!args.url) {
            args.url = args.pre + args.code + args.post;
        } else {
            args.url = args.url;
        }
        
        fetch( args.url ).then( res => {
            return res.json();
        }).then( data => {
            // console.log('data.res: ', data.res);
            
        })

    },
    getCurrent: this.getBPI( {'url':this.api.current} ),
    getCountry: this.getBPI( {'pre':this.api.countryPre, 'code':this.api.countryCode, 'post':this.api.countryPost} ),
    getHistorical: this.getBPI( {'url':this.api.historical} )

/* 

Historical API options

?index=[USD/CNY] // The index to return data for. Defaults to USD

?currency=<VALUE> // The currency to return the data in, specified in ISO 4217 format. Defaults to USD.

?start=<VALUE>&end=<VALUE> // Allows data to be returned for a specific date range. Must be listed as a pair of start and end parameters, with dates supplied in the YYYY-MM-DD format, e.g. 2013-09-01 for September 1st, 2013.

?for=yesterday // Specifying this will return a single value for the previous day. Overrides the start/end parameter.

*/

};