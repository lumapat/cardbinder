import React from "react";
import fetchGraphQL from "../src/fetchGraphQL";

const {useState, useEffect} = React;

function HomePage() {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        fetchGraphQL(`query { hello }`, []).then(response => {
            setResponse(response.data.hello);
        }).catch(error => {
            console.log(error);
        });
    });

    return <div>Server returned ${response}</div>;
}

export default HomePage;