import dotenv from 'dotenv';
dotenv.config();
import { Request, Response } from "express";

import {
  AccountsGetRequest,
  Configuration,
  CountryCode,
  DepositoryAccountSubtype, LinkTokenCreateRequest, PlaidApi,
  PlaidEnvironments,
  Products,
  Transaction,
  TransactionsGetRequest,
  TransactionsGetResponse
} from "plaid";

const configuration: Configuration = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV as string],
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_SECRET,
      "Plaid-Version": "2020-09-14",
    },
  },
});

const plaidClient = new PlaidApi(configuration);

/**
 * @route   POST /api/create_link_token
 * @desc    Create a link token for Plaid Link to initialize the Link flow for the user to connect their bank account to Plaid
 * @access  Public
 * @params  none
 * @return  link_token
 * @see https://plaid.com/docs/api/tokens/#linktokencreate
 */
export const createLinkToken = async (_: Request, res: Response) => {
  const createLinkRokenRequest: LinkTokenCreateRequest = {
    user: {
      // TODO: use req.sessionID
      client_user_id: "user-id",
    },
    client_name: process.env.PLAID_CLIENT_NAME as string,
    products: [

      Products.Auth,
      Products.Transactions,

    ],
    country_codes: [CountryCode.Us],
    language: "en",
    webhook: "https://sample-web-hook.com",
    redirect_uri: process.env.PLAID_REDIRECT_URL as string,
    account_filters: {
      depository: {
        account_subtypes: [
          DepositoryAccountSubtype.All,
        ],
      },
    },
  };
  try {
    const linkTokenCreateResponse = await plaidClient.linkTokenCreate(createLinkRokenRequest);

    try {
      const response = await plaidClient.linkTokenGet({
        link_token: linkTokenCreateResponse.data.link_token
      });
      console.log("🚀[Log]: ~ file: plaid.controllers.ts ~ line 66 ~ createLinkToken")
      res.status(200).send(response.data);
    } catch (e) {
      // TODO: handle error
      console.log(e);
    }
  } catch (e) {
    // TODO: handle error
    console.log(e);
  }
}

/**
 * @route   POST /api/exchange_public_token
 * @desc    Exchange a public token for an access token to use with Plaid's API endpoints to access the user's account data and perform other actions on the user's behalf (e.g. transactions, balance, identity, etc.) 
 * @access  Public
 * @params  public_token
 * @return  access_token
 * @see https://plaid.com/docs/api/tokens/#exchange-token-flow
 */
export const exchangePublicToken = async (req: Request, res: Response) => {
  try {
    const exchangeResponse = await plaidClient.itemPublicTokenExchange({
      public_token: req.body.public_token,
    });

    const accessToken = exchangeResponse.data.access_token;
    // const itemId = exchangeResponse.data.item_id;
    // FOR DEMO PURPOSES ONLY
    // Store access_token in DB instead of session storage
    // req.session.access_token = exchangeResponse.data.access_token;
    // the public_token is ephemeral and expires after 30 minutes. An access_token does not expire, but can be revoked by calling /item/remove.
    try {
      const response = await plaidClient.transactionsGet({
        access_token: accessToken as string,
        start_date: '2018-01-01',
        end_date: '2022-10-22'
      });
      const transactionResponse: TransactionsGetResponse = response.data;
      const total_transactions = transactionResponse.total_transactions;
      let transactions: Transaction[] = transactionResponse.transactions;
      // Manipulate the offset parameter to paginate
      // transactions and retrieve all available data
      while (transactions.length < total_transactions) {
        const paginatedRequest: TransactionsGetRequest = {
          access_token: accessToken,
          start_date: '2018-01-01',
          end_date: '2020-02-01',
          options: {
            offset: transactions.length,
          },
        };
        const paginatedResponse = await plaidClient.transactionsGet(paginatedRequest);
        transactions = transactions.concat(
          paginatedResponse.data.transactions,
        );
      }
      console.log("total_transactions: ", total_transactions);
      console.log("transactions: ", transactions);
      res.status(200).json({ transactions, total_transactions });
    } catch (error) {
      console.log(error)
    }
  } catch (err) {
    console.log(err)
  }
};


/**
 * @route   POST /api/balance
 * @desc    Get accounts associated with an Item by access_token 
 * @access  Public
 * @params  access_token
 * @return  accounts
 * @see https://plaid.com/docs/api/accounts/#accountsget
 */
export const balance = async (req: Request, res: Response) => {
  // Pull real-time balance information for each account associated
  // with the Item
  const accessToken = req.body.accessToken;
  console.log("balance", accessToken)

  const request: AccountsGetRequest = {
    access_token: accessToken as string,
  };
  try {
    const response = await plaidClient.accountsBalanceGet(request);
    const accounts = response.data.accounts;
    console.log("balance", accounts)
    res.status(200).json(accounts);
  } catch (error) {
    console.log(error)
  }
};
