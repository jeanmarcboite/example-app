export interface Book {
  id: string
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishDate: string;
    description: string;
    averageRating: number;
    ratingsCount: number;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    }
  }
    "saleInfo": {
        "country": string
        "saleability": string
        "isEbook": boolean,
        "listPrice": {
            "amount": number,
            "currencyCode": string
        },
        "retailPrice": {
            "amount": number,
            "currencyCode": string
        },
        "buyLink": string
        "offers": [
            {
                "finskyOfferType": number,
                "listPrice": {
                    "amountInMicros": number
                    "currencyCode": string
                },
                "retailPrice": {
                    "amountInMicros": number
                    "currencyCode": string
                },
                "giftable": true
            }
        ]
   }
}
