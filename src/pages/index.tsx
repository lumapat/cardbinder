import React from "react";
import graphql from "babel-plugin-relay/macro";
import {
    RelayEnvironmentProvider,
    loadQuery,
    usePreloadedQuery,
  } from 'react-relay/hooks';
import RelayEnvironment from 'utils/RelayEnvironment';

const { Suspense } = React;

const HomePageQuery = graphql`
    query pagesQuery { hello }
`;

const preloadedQuery = loadQuery(RelayEnvironment, HomePageQuery, {});

function HomePage() {
    const data = usePreloadedQuery(HomePageQuery, preloadedQuery);

    return (
        <div>Server returned "{data.hello}"</div>
    );
}

function HomePageRoot() {
    return (
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Suspense fallback={"Loading..."}>
                <HomePage />
            </Suspense>
        </RelayEnvironmentProvider>
    );
}

export default HomePageRoot;