import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axios";
import { toast } from "sonner";

import { useSelector } from "react-redux";

const WishlistPage = () => {
  const counterSelector = useSelector((store) => store.counter);
  const messageSelector = useSelector((store) => store.message);

  const [wishListInput, setWishListInput] = useState("");
  const [wishListItems, setWishListItems] = useState([]);

  // Get Data From API
  const fetchWishlistItems = async () => {
    try {
      const response = await axiosInstance.get("/wishlist-item");
      setWishListItems(response.data);
    } catch (error) {
      toast.error("Cannot Display Data, Try Again Later. Thank You");
    }
  };

  useEffect(() => {
    fetchWishlistItems();
  }, []);

  // Post Data From Api
  const addWishList = async () => {
    try {
      await axiosInstance.post("/wishlist-item", {
        name: wishListInput,
      });
      fetchWishlistItems();
      toast.success(
        `Add Wishlist ( ${wishListInput} ) SUCCESS!, Data No: ${
          wishListItems.length + 1
        }`
      );
      setWishListInput("");
    } catch (error) {
      toast.error(
        "Server Error, Please Wait For A Moment. Thankyou for waiting patiently"
      );
    }
  };

  return (
    <>
      <div className="container mx-auto max-w-[800px] flex items-center p-4 gap-3 mt-2">
        <Input
          value={wishListInput}
          onChange={(event) => {
            if (event.target.value.length <= 100) {
              setWishListInput(event.target.value);
            }
          }}
          label="Wishlist Item"
          color="secondary"
        ></Input>
        <Button onClick={addWishList} color="danger">
          Add
        </Button>
      </div>
      <ul className="list-decimal list-inside text-center font-bold">
        {wishListItems.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
      <p className="text-center mb-2 font-bold font-sans mt-20 bg-cyan-700 text-white p-2">
        {counterSelector.name} : {counterSelector.count}
      </p>
      <p className="text-center mb-2 font-bold font-sans bg-cyan-600 text-white p-2">
        {messageSelector.username} | {messageSelector.position}
      </p>
    </>
  );
};

export default WishlistPage;
