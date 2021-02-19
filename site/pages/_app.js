import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";

import { ToastProvider } from "react-toast-notifications";
import {AuthProvider} from '../lib/authentication'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/app.css";

import AsideNav from "../components/AsideNav";
import UserLogin from "../components/UserLogIn";

const MyApp = ({ Component, pageProps, user }) => {
  pageProps = { ...pageProps, user };
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ToastProvider>
      <ApolloProvider client={apolloClient}>
      <AuthProvider>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>

          <div className="row m-0">
            <div className="col-2 p-0">
              <AsideNav />
            </div>
            <div className="col-9 p-0">
              <UserLogin />
              <Component {...pageProps} />
            </div>
          </div>
          </AuthProvider>
      </ApolloProvider>
    </ToastProvider>
  );
};

export default MyApp;
