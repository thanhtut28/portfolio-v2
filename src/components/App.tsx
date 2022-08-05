import { useEffect, useState } from "react";
import Home from "./sections";
import PageLoading from "./sections/page-loading";

function App() {
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const timeout = setTimeout(() => {
         setLoading(false);
      }, 2000);

      return () => clearTimeout(timeout);
   }, []);

   return <>{loading ? <PageLoading isVisible={loading} /> : <Home />}</>;
}

export default App;
