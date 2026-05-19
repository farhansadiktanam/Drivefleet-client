"use client";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
  Card,
} from "@heroui/react";

const AddDestinations = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destinations = Object.fromEntries(formData.entries());
    console.log(destinations);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(destinations),
      },
    );
    const data = await res.json();

    console.log(data);
  };
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center my-4 text-orange-500">
        Add Car
      </h2>
      <Card>
        <form className="p-10 space-y-8 w-3xl shadow-2xl" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="carName" isRequired>
                <Label>Car Name</Label>
                <Input placeholder="Car Name" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            <TextField name="seatCapacity" isRequired>
              <Label>Seat Capacity</Label>
              <Input type="number" placeholder="Seat" className="rounded-2xl" />
              <FieldError />
            </TextField>

            <div>
              <Label>Car Type</Label>
              <Select
                name="carType"
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
            </div>

            {/* Price */}
            <TextField name="dailyRentPrice" type="number" isRequired>
              <Label>Daily Rent Price</Label>
              <Input type="number" placeholder="1299" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Departure Date */}
            <div className="md:col-span-2">
              <TextField name="departureDate" type="date" isRequired>
                <Label>Departure Date</Label>
                <Input type="date" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Image URL - Removed preview */}
            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Buttons */}

          <Button
            type="submit"
            className="w-full h-14 font-semibold bg-orange-500/80 hover:bg-orange-500 text-white hover:text-white px-4 py-2 rounded-full transition-all group"
          >
            Add Car
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddDestinations;
