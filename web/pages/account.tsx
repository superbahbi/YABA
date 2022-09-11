import React, { useCallback, useEffect, useState } from "react";
import Main from "../layouts/Main";
import formurlencoded from "form-urlencoded";
import {
  AccountProps,
  IAccountsData,
  ILinkTokenData,
} from "../types/interface";
import {
  usePlaidLink,
  PlaidLinkOnSuccess,
  PlaidLinkOnEvent,
  PlaidLinkOnExit,
  PlaidLinkOptions,
  PlaidLinkOnSuccessMetadata,
} from "react-plaid-link";
import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Card from "../components/Card";
async function fetchAccounts(): Promise<ILinkTokenData> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/create_link_token",
    {
      method: "POST",
    }
  );

  return await res.json();
}
const Account: React.FC<AccountProps> = () => {
  const [token, setToken] = useState<ILinkTokenData>();
  const [accounts, setAccounts] = useState();
  const linkToken = useQuery(["linkToken"], fetchAccounts);
  console.log(linkToken.data);
  // const { link_token } = responseLinkToken.data;
  // get a link_token from your API when component mounts
  // useEffect(() => {
  // const createLinkToken = async () => {
  // const response = await fetch(
  //   process.env.NEXT_PUBLIC_API_URL + "/api/create_link_token",
  //   {
  //     method: "POST",
  //   }
  // );
  // const { link_token } = await response.json();
  // setToken(link_token);
  // };
  // createLinkToken();
  // }, []);
  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    (publicToken: string, metadata: PlaidLinkOnSuccessMetadata) => {
      const exchangePublicToken = async () => {
        const exchangeResponse = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/api/exchange_public_token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formurlencoded({
              public_token: publicToken,
              metadata: metadata,
            }),
          }
        );
        const { accounts } = await exchangeResponse.json();
        setAccounts(accounts);
        console.log("accounts", accounts);
      };
      exchangePublicToken();
    },
    []
  );
  const onEvent = useCallback<PlaidLinkOnEvent>((eventName, metadata) => {
    console.log(
      "🚀 ~ file: account.tsx ~ line 42 ~ onEvent ~ metadata",
      metadata
    );
    console.log(
      "🚀 ~ file: account.tsx ~ line 42 ~ onEvent ~ eventName",
      eventName
    );
    console.log(eventName, metadata);
  }, []);
  const onExit = useCallback<PlaidLinkOnExit>((error, metadata) => {
    console.log(error, metadata);
  }, []);

  const config: PlaidLinkOptions = {
    token: token?.data?.link_token,
    onSuccess,
    onEvent,
    onExit,
  };

  const {
    open,
    ready,
    // error,
    // exit
  } = usePlaidLink(config);
  return (
    <>
      <Main>
        <div className="flex w-full">
          <div className="h-screen m-4 p-4">
            <Card title="Connect">
              <button className="btn" onClick={() => open()} disabled={!ready}>
                Add a bank account
              </button>
            </Card>

            {accounts && (
              <Card title="Accounts">
                {/* <pre>{JSON.stringify(accounts, null, 2)}</pre> */}
                {accounts.map((account: IAccountsData) => (
                  <div key={account.account_id}>
                    <div className="flex flex-row">
                      <h2 className="text-xl">
                        {account.name}
                        <span className="badge badge-lg m-2 capitalize">
                          {account.subtype}
                        </span>
                      </h2>
                      <h2 className="flex justify-center items-center text-xl">
                        {new Intl.NumberFormat("en", {
                          style: "currency",
                          currency: "USD",
                        }).format(account.balances.current)}
                      </h2>
                    </div>
                  </div>
                ))}
              </Card>
            )}
          </div>
        </div>
      </Main>
      <ReactQueryDevtools initialIsOpen />
    </>
  );
};
export default Account;
