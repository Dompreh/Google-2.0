import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

function Search({results}) {
  const router = useRouter()
//console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term}-Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Body(Search results) */}
      <SearchResults results={results}/>
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;
  const startIndex = context.query.start || "0"

  const data = useDummyData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then((response) => response.json());

  //After the SERVER has restored... Pass the results to the client...

  return {
    props: {
      results: data,
    },
  };
}
