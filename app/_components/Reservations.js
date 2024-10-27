import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservations({ cabin }) {
  const [settings, bookedDates] = await Promise.all(
    [getSettings()],
    getBookedDatesByCabinId(cabin.id)
  );

  return (
    <>
      <div>
        <div className="flex border border-primary-800 min-h-[400px]">
          <DateSelector
            settings={settings}
            bookedDates={bookedDates}
            cabin={cabin}
          />
          <ReservationForm cabin={cabin} />
        </div>
      </div>
    </>
  );
}

export default Reservations;
