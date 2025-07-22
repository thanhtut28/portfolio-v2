"use client";

import { useEffect, useState } from "react";
import Home from "./sections";
import PageLoading from "./page-loading";
import { sendDiscordAlert } from "../utils/discordAlert";

function App() {
   const [loading, setLoading] = useState(true);

   // Send Discord alert when user visits the website
   useEffect(() => {
      const notifyDiscord = async () => {
         try {
            await sendDiscordAlert();
         } catch (error) {
            console.error("Failed to send Discord alert:", error);
         }
      };

      notifyDiscord();
   }, []);

   // dummy visitors tracking with firebase realtime database
   useEffect(() => {
      const mutateVisitors = async () =>
         await fetch("https://tracker-9644a-default-rtdb.firebaseio.com/clicks.json", {
            method: "POST",
            headers: {
               "Content-type": "application/json",
            },
            body: JSON.stringify({ date: new Date() }),
         });
      mutateVisitors();
   }, []);

   useEffect(() => {
      const timeout = setTimeout(() => {
         setLoading(false);
      }, 2000);

      return () => clearTimeout(timeout);
   }, []);

   return <>{loading ? <PageLoading isVisible={loading} /> : <Home />}</>;
}

export default App;
