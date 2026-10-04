import { ReservationForm } from "@/components/ReservationForm";

export const metadata = {
  title: "Reservations — NOIR & SPICE",
};

export default function ReservationsPage() {
  return (
    <div className="pt-28">
      <ReservationForm />
    </div>
  );
}
