import { useState } from "react";
import "./Login.css";
import Bookings from "./Bookings";
import Rooms from "./Rooms";
import Navbar from "./Navbar";
import BookingsTable from "./BookingsTable.jsx";
import "./Adminview.css"

function Adminview() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <section>
        <div className="admin-view">
            <Bookings />
        </div>
        <div className="admin-view">
            <Rooms />
        </div>
        <div className="admin-view">
            <BookingsTable />
        </div>
      </section>
    </>
  );
}

export default Adminview;
