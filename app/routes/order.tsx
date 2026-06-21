import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "~/components/sections/Navbar";
import { Order } from "~/components/sections/Order";
import { Footer } from "~/components/sections/Footer";

export const Route = createFileRoute("/order")({
  component: OrderPage,
});

function OrderPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20 md:pt-24">
        <Order />
      </div>
      <Footer />
    </>
  );
}
