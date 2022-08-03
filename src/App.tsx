import { useEffect, useState } from "react";
import Home from "./components/sections";
import PageLoading from "./components/sections/page-loading";

function App() {
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const timeout = setTimeout(() => {
         setLoading(false);
      }, 2000);

      return () => clearTimeout(timeout);
   }, []);

   return <div>{loading ? <PageLoading isVisible={loading} /> : <Home />}</div>;
}

export default App;
