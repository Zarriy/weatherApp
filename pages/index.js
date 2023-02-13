import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import { useEffect } from "react";
import { resultUpdater } from "@/store/searchSlice";
import { useDispatch, useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const tempScale = useSelector((state) => state.tempReducer.unit);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const fetching = fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=gujrat&appid=33acfda1b05f90c39d450da10e3d77e3&units=${tempScale}`
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
      <Hero />
    </>
  );
}
