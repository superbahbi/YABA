import React, { useCallback, useState } from "react";
import Main from "../layouts/Main";
import formurlencoded from "form-urlencoded";
import { AccountProps, IAccountsData } from "../types/interface";
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
const Account: React.FC<AccountProps> = () => {
  const [accounts, setAccounts] = useState();

  const { data, isFetching } = useQuery(["linkToken"], () =>
    fetch(process.env.NEXT_PUBLIC_API_URL + "/api/create_link_token").then(
      (res) => res.json()
    )
  );
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
      };
      exchangePublicToken();
    },
    []
  );
  const onEvent = useCallback<PlaidLinkOnEvent>((eventName, metadata) => {
    console.log(eventName, metadata);
  }, []);
  const onExit = useCallback<PlaidLinkOnExit>((error, metadata) => {
    console.log(error, metadata);
  }, []);

  const config: PlaidLinkOptions = {
    token: data.link_token,
    onSuccess,
    onEvent,
    onExit,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <>
      <Main>
        <div className="flex w-full">
          <div className="h-screen m-4 p-4">
            <Card title="Connect">
              <button className="btn" onClick={() => open()} disabled={!ready}>
                <div>{isFetching ? "Updating..." : "Add a bank account"}</div>
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
