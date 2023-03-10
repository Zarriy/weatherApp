import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import { useEffect, useState } from "react";
import { resultUpdater } from "@/store/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateMapSize } from "@/store/mapSlice";
import Forcast from "@/components/Weekly/Forcast";
import { forcastUpdater } from "@/store/searchSlice";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const tempScale = useSelector((state) => state.tempReducer.unit);
  const result = useSelector((state) => state.searchReducer.searchResult);
  const forcastResult = useSelector(
    (state) => state.searchReducer.forcastResult
  );

  const dispatch = useDispatch();
  let city = result?.name;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        dispatch(updateMapSize(false));
      } else {
        dispatch(updateMapSize(true));
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    async function fetchForcast() {
      const fetchingForcast = fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${
          city ? city.toLowerCase() : "gujrat"
        }&appid=33acfda1b05f90c39d450da10e3d77e3&units=${tempScale}`
      )
        .then((res) => res.json())
        .then((data) => dispatch(forcastUpdater(data)));
    }

    fetchForcast();
  }, [city, tempScale]);

  useEffect(() => {
    async function fetchData() {
      const fetching = fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          city ? city.toLowerCase() : "gujrat"
        }&appid=33acfda1b05f90c39d450da10e3d77e3&units=${tempScale}`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(resultUpdater(data));
        });
    }

    fetchData();
  }, [tempScale]);

  return (
    <>
      <Head>
        <title>Weather APP</title>
        <meta name="description" content="Get accurate weather data" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {result && <Hero />}
      {forcastResult && <Forcast />}
    </>
  );
}
