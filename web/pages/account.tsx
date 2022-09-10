import React, { useCallback, useEffect, useState } from "react";
import Main from "../layouts/Main";
import formurlencoded from "form-urlencoded";
import { AccountProps } from "../types/interface";
import {
  usePlaidLink,
  PlaidLinkOnSuccess,
  PlaidLinkOnEvent,
  PlaidLinkOnExit,
  PlaidLinkOptions,
  PlaidLinkOnSuccessMetadata,
} from "react-plaid-link";
import Card from "../components/Card";

const Account: React.FC<AccountProps> = () => {
  const [token, setToken] = useState<string>();
  const [publicToken, setPublicToken] = useState<string>();
  const [accessToken, setAccessToken] = useState<string>();
  const [metadata, setMetadata] = useState<PlaidLinkOnSuccessMetadata>();

  // get a link_token from your API when component mounts
  useEffect(() => {
    const createLinkToken = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/create_link_token",
        {
          method: "POST",
        }
      );
      const { link_token } = await response.json();
      setToken(link_token);
    };
    createLinkToken();
  }, []);

  useEffect(() => {
    if (publicToken) {
      const exchangePublicToken = async () => {
        console.log("publicToken", publicToken);
        const exchangeResponse = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/api/exchange_public_token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formurlencoded({
              public_token: publicToken,
            }),
          }
        );
        const { accessToken } = await exchangeResponse.json();
        console.log("accessToken", accessToken);
        setAccessToken(accessToken);
      };
      exchangePublicToken();
    }
  }, [publicToken]);
  useEffect(() => {
    if (accessToken) {
      const getAccount = async () => {
        console.log("calling balance");
        const accountResponse = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/api/balance",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formurlencoded({
              accessToken: accessToken,
            }),
          }
        );
        const { accounts } = await accountResponse.json();
        console.log("accounts", accounts);
      };
      getAccount();
    }
  }, [accessToken]);
  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    (publicToken: string, metadata: PlaidLinkOnSuccessMetadata) => {
      setPublicToken(publicToken);
      setMetadata(metadata);
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
    token,
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
            {/* {publicToken && (
              <Card title="Public Token">
                <pre>{publicToken}</pre>
              </Card>
            )} */}

            {metadata && (
              <Card title="Metadata">
                <pre>{JSON.stringify(metadata, null, 2)}</pre>
              </Card>
            )}
          </div>
        </div>
      </Main>
    </>
  );
};
export default Account;
