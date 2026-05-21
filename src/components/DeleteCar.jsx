"use client";

import { AlertDialog, Button } from "@heroui/react";
import { Delete } from "lucide-react";
import { redirect } from "next/navigation";

export function DeleteCar({ car }) {
  const { _id, carName } = car;

  const handleDelete = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${_id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      },
    );
    const data = await res.json();
    console.log(data);
    redirect("/explore-cars");
  };

  return (
    <AlertDialog>
      <Button variant="danger" className=" w-30">
        <Delete /> Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Car permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete{" "}
                <strong>Your Awesome {carName} car</strong> and all of its data.
                This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={handleDelete}>
                Delete Car
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
