
import { Request, Response } from "express";
import {
  Configuration,
  CountryCode,
  DepositoryAccountSubtype,

  LinkTokenCreateRequest,
  LinkTokenGetRequest,
  PlaidApi,
  PlaidEnvironments,
  Products,
} from "plaid";

const configuration: Configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_SECRET,
    },
  },
});

const plaidClient = new PlaidApi(configuration);

const createLinkToken = async (_: Request, res: Response) => {
  const createLinkRokenRequest: LinkTokenCreateRequest = {
    user: {
      client_user_id: "user-id",
    },
    client_name: "Plaid Test App",
    products: [Products.Auth, Products.Transactions],
    country_codes: [CountryCode.Us],
    language: "en",
    webhook: "https://sample-web-hook.com",
    // redirect_uri: "https://localhost:3010",
    account_filters: {
      depository: {
        account_subtypes: [
          DepositoryAccountSubtype.Checking,
          DepositoryAccountSubtype.Savings,
        ],
      },
    },
  };
  try {
    const linkTokenCreateResponse = await plaidClient.linkTokenCreate(createLinkRokenRequest);
    const getrequest: LinkTokenGetRequest = {
      link_token: linkTokenCreateResponse.data.link_token
    };
    try {
      const data = await plaidClient.linkTokenGet(getrequest);
      res.status(200).send(data.data);
    } catch (e) {
      // TODO: handle error
      console.log(e);
    }
  } catch (e) {
    // TODO: handle error
    console.log(e);
  }
}
export default { createLinkToken };
