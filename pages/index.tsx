import { useLoadScript } from "@react-google-maps/api";
import Map from "../components/map";

export default function Home() {
  const { isLoaded } = useLoadScript({
    //insert your api key here
    googleMapsApiKey: "",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
