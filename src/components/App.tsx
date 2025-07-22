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

   useEffect(() => {
      const timeout = setTimeout(() => {
         setLoading(false);
      }, 2000);

      return () => clearTimeout(timeout);
   }, []);

   return <>{loading ? <PageLoading isVisible={loading} /> : <Home />}</>;
}

export default App;
