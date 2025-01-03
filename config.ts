import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Car Auction dApp",
    chainId: "galileo-4",
    createdDate: "2025-01-02T22:56:36.706Z",
    modifiedDate: "2025-01-02T22:56:36.706Z",
    id: "andromeda",
    collections: [
        {
            cw721: "andr1rln2rr8g0xm6nt42yztaa20w6fj4dkua2fauwd9syxfuxvd8djyspq6dn7",
            auction: "andr1khf2whxr2m6nl94ejeskzctn0kz3gc3galgph57azsf5gq8txtzqknmazj",
            name: "Car Collection",
           type: ICollectionType.AUCTION,
            id: "auction",
            featured: "ANDR1"
        }
    ],
};

export default CONFIG;
