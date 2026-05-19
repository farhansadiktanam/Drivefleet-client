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

export function EditCar({ car }) {
  const {
    carName,
    dailyRentPrice,
    carType,
    seatCapacity,
    pickupLocation,
    imageUrl,
  } = car;
  console.log(
    carName,
    dailyRentPrice,
    carType,
    seatCapacity,
    pickupLocation,
    imageUrl,
  );

  return (
    <Modal>
      <Button
        variant="tertiary"
        className=" w-30  font-semibold bg-orange-500/80 hover:bg-orange-500 text-white hover:text-white px-2 py-1 rounded-full transition-all group"
      >
        <Edit /> Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground"></Modal.Icon>
              <Modal.Heading>Edit Car</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                    defaultValue={carName}
                  >
                    <Label>Car Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full">
                    <Label>Car Type</Label>
                    <Select
                      name="carType"
                      defaultValue={carType}
                      isRequired
                      className="w-full"
                      placeholder="Select category"
                    >
                      <Select.Trigger className="rounded-2xl">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="suv" textValue="Beach">
                            SUV
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="luxury" textValue="Mountain">
                            Luxury
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="hatchback" textValue="City">
                            Hatchback
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="sedan" textValue="Adventure">
                            Sedan
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="luxurySUV" textValue="Cultural">
                            Luxury SUV
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="pickupTruck" textValue="Luxury">
                            Pickup Truck
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="minivan" textValue="Luxury">
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
                  >
                    <Label>Image Url</Label>
                    <Input placeholder="Enter image Url" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="seatCapacity"
                    type="number"
                    defaultValue={seatCapacity}
                  >
                    <Label>Seat Capacity</Label>
                    <Input placeholder="Choose seat capacity" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="pickupLocation"
                    defaultValue={pickupLocation}
                  >
                    <Label>Pickup Location</Label>
                    <Input
                      placeholder="Enter your Pickup Location"
                      defaultValue={pickupLocation}
                    />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="dailyRentPrice"
                    defaultValue={dailyRentPrice}
                  >
                    <Label>Daily Rent Price</Label>
                    <Input placeholder="Price" />
                  </TextField>
                  <TextField className="w-full" name="description">
                    <Label>description</Label>
                    <Input placeholder="Description" />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button slot="close">Save</Button>
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
