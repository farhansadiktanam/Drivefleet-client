"use client";

import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";
import { Edit } from "lucide-react";
import { useRef } from "react";

export function EditCar({ car }) {
  const {
    _id,
    carName,
    dailyRentPrice,
    carType,
    seatCapacity,
    pickupLocation,
    imageUrl,
  } = car;

  const closeRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const car = Object.fromEntries(formData.entries());
    console.log(car);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(car),
      },
    );
    const data = await res.json();
    console.log(data);
  };

  return (
    <Modal>
      <Button
        variant="tertiary"
        className="w-30 font-semibold bg-orange-500/80 hover:bg-orange-500
          text-white px-2 py-1 rounded-full transition-all"
      >
        <Edit /> Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit Car</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                {/* ✅ Modal.Footer is now INSIDE the form */}
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                  <TextField
                    className="w-full"
                    name="carName"
                    type="text"
                    defaultValue={carName}
                    aria-label="Car Name"
                  >
                    <Label>Car Name</Label>
                    <Input placeholder="Enter car name" />
                  </TextField>

                  <TextField className="w-full">
                    <Label>Car Type</Label>
                    <Select
                      name="carType"
                      isRequired
                      className="w-full"
                      placeholder="Select category"
                      aria-label="Car Type"
                    >
                      <Select.Trigger className="rounded-2xl">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="SUV">
                            SUV
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Luxury">
                            Luxury
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Hatchback">
                            Hatchback
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Sedan">
                            Sedan
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Luxury SUV">
                            Luxury SUV
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Pickup Truck">
                            Pickup Truck
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Minivan">
                            Minivan
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </TextField>

                  <TextField
                    className="w-full"
                    name="imageUrl"
                    type="url"
                    defaultValue={imageUrl}
                    aria-label="Image URL"
                  >
                    <Label>Image URL</Label>
                    <Input placeholder="Enter image URL" />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="seatCapacity"
                    type="number"
                    defaultValue={seatCapacity}
                    aria-label="Seat Capacity"
                  >
                    <Label>Seat Capacity</Label>
                    <Input placeholder="Choose seat capacity" />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="pickupLocation"
                    defaultValue={pickupLocation}
                    aria-label="Pickup Location"
                  >
                    <Label>Pickup Location</Label>
                    <Input placeholder="Enter pickup location" />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="dailyRentPrice"
                    defaultValue={dailyRentPrice}
                    aria-label="Daily Rent Price"
                  >
                    <Label>Daily Rent Price</Label>
                    <Input placeholder="Price" />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="description"
                    aria-label="Description"
                  >
                    <Label>Description</Label>
                    <Input placeholder="Description" />
                  </TextField>

                  {/* ✅ Footer inside form, Cancel uses slot="close", Save is type="submit" */}
                  <Modal.Footer>
                    <Button slot="close" variant="secondary" type="button">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      {" "}
                      {/* ✅ no slot="close" */}
                      Save
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
