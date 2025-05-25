import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { TiArrowSortedDown } from "react-icons/ti";
import axios from "axios";
import Vehicle_Panel from "../../components/Vehicle_Panel";
import ConfirmRidePanel from "../../components/ConfirmRide";
import LookingForDriver from "../../components/LookingForDriver";
import WaitingForDriver from "../../components/WaitingForDriver";
import SearchPanel from "../../components/SearchPanel";

const Home = () => {
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const VehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const VehicleFoundRef = useRef(null);
  const WaitingForDriverRef = useRef(null);

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [VehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [pickUpSuggestions, setPickUpSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState("");
  const [fare, setFare] = useState({});
  const [vehicleType, setVehicleType] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const handlePickupChange = async (e) => {
    setPickup(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPickUpSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching pickup suggestions:", error);
    }
  };

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDestinationSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching destination suggestions:", error);
    }
  };

  useGSAP(() => {
    if (panelOpen) {
      const screenHeight = window.innerHeight;
      const maxHeight = screenHeight < 600 ? "60%" : "70%";

      gsap.to(panelRef.current, {
        height: maxHeight,
        padding: 24,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);
  useGSAP(() => {
    if (VehiclePanel) {
      gsap.to(VehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(VehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [VehiclePanel]);
  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePanel]);
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(VehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(VehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(WaitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(WaitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  async function findTrip() {
    if (!pickup || !destination) {
      alert("Please enter both pickup and destination locations.");
      return;
    }
    setVehiclePanel(true);
    setPanelOpen(false);
    try {
      console.log("Pickup:", pickup);
      console.log("Destination:", destination);

      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/ride/get-fare`,
        {
          params: {
            pickup: (pickup),
            destination: (destination),
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // console.log(response)
      setFare(response.data);

    } catch (error) {
      console.error("Error fetching fare:", error);
      alert("Failed to fetch fare. Please check your locations and try again.");
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Status:", error.response.status);
      }
    }
  }

  async function createRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/create`,
      {
        pickup,
        destination,
        vehicleType,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    console.log(response.data);
  }

  return (
    <>
      <div className="h-screen relative overflow-hidden">
        <img
          className="w-16 absolute left-5 top-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/800px-Uber_logo_2018.svg.png"
          alt=""
        />

        <div className="h-screen w-screen">
          <img
            className="h-full w-full object-cover"
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-end absolute w-full h-screen top-0 ">
          <div
            className={`relative bg-white p-6 transition-all duration-300 ${
              panelOpen ? "min-h-[300px] max-h-[45vh]" : "h-[35vh] sm:h-[30%]"
            }`}
          >
            <h4 className="font-semibold text-2xl my-2">Find a trip</h4>
            <div
              ref={panelCloseRef}
              className="absolute top-5 right-6 opacity-0"
              onClick={() => {
                setPanelOpen(false);
              }}
            >
              <TiArrowSortedDown size={25} />
            </div>

            <form
              className="relative py-1"
              action=""
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <div className="line absolute h-20 w-1 top-[20%] left-5 bg-gray-700 rounded-full"></div>

              <input
                type="text"
                name="pickup"
                value={pickup}
                onChange={handlePickupChange}
                onClick={() => {
                  setPanelOpen(true);
                  setActiveField("pickup");
                }}
                placeholder="Pickup location"
                className="w-full px-12 py-4 my-2 border border-gray-200 rounded-lg bg-white text-black text-base transition-all focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
              />
              <input
                type="text"
                name="destination"
                value={destination}
                onChange={handleDestinationChange}
                onClick={() => {
                  setPanelOpen(true);
                  setActiveField("destination");
                }}
                placeholder="destination Point"
                className="w-full px-12 py-4 my-2 border border-gray-200 rounded-lg bg-white text-black text-base transition-all focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
              />
              <button
                onClick={findTrip}
                className="bg-black text-white px-4 py-2 rounded-lg mt-3 w-full"
              >
                Find Trip
              </button>
            </form>
          </div>

          <div ref={panelRef} className="relative bg-[#f4f5f6] overflow-y-auto">
            <SearchPanel
              suggestions={
                activeField === "pickup"
                  ? pickUpSuggestions
                  : destinationSuggestions
              }
              setPanelOpen={setPanelOpen}
              setVehiclePanel={setVehiclePanel}
              setPickup={setPickup}
              setDestination={setDestination}
              activeField={activeField}
            />
          </div>

          <div
            ref={VehiclePanelRef}
            className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
          >
            <Vehicle_Panel
              setVehiclePanel={setVehiclePanel}
              setConfirmRidePanel={setConfirmRidePanel}
              fare={fare}
              setFare={setFare}
            />
          </div>

          <div
            ref={confirmRidePanelRef}
            className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
          >
            <ConfirmRidePanel
              setConfirmRidePanel={setConfirmRidePanel}
              setVehicleFound={setVehicleFound}
              setVehiclePanel={setVehiclePanel}
            />
          </div>

          <div
            ref={VehicleFoundRef}
            className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
          >
            <LookingForDriver setVehicleFound={setVehicleFound} />
          </div>

          <div
            ref={WaitingForDriverRef}
            className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
          >
            <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
