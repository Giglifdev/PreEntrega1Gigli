import React from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const products = {
    audio: [
      {
        id: 1,
        name: "Razer Barracuda Pro",
        price: 250000,
        stock: 10,
        image: "/public/Images/Audio/razer1.webp",
      },
      {
        id: 2,
        name: "Hyperx Cloud Flight Headset",
        price: 95231,
        stock: 20,
        image: "/public/Images/Audio/audio_hyperxcloud_wireless.jpg",
      },
      {
        id: 3,
        name: "Logitech G G635 LightSync Headset",
        price: 74063,
        stock: 25,
        image: "/public/Images/Audio/audio_logitech_lightsyncrgb.png",
      },
      {
        id: 4,
        name: "Logitech Astro A10 Gen2 Headset",
        price: 47615,
        stock: 25,
        image: "/public/Images/Audio/audio_logitech_astro_a10.png",
      },
      {
        id: 5,
        name: "Redragon H120 Ares Headset",
        price: 13551,
        stock: 30,
        image: "/public/Images/Audio/audio_redragon_ares.jpg",
      },
      {
        id: 6,
        name: "Samsung Galaxy buds2 Wireless",
        price: 105919,
        stock: 15,
        image:
          "/public/Images/Audio/audio_wireless_samsung_galaxy_buds2pro.jpg",
      },
    ],
    keyboards: [
      {
        id: 1,
        name: "Razer BlackWidow V4 Pro",
        price: 22999,
        stock: 5,
        image: "/public/Images/Keyboards/RAZER_BLACKWIDOW_V4.jpg",
      },
      {
        id: 2,
        name: "Razer BlackWidow V3 - Yellow Switch",
        price: 13999,
        stock: 10,
        image: "/public/Images/Keyboards/RAZER_BLACKWIDOW_V4.jpg",
      },
      {
        id: 3,
        name: "Logitech G PRO TKL LOL Edition",
        price: 70543,
        stock: 35,
        image: "/public/Images/Keyboards/keyboard_logitech_g_pro.png",
      },
      {
        id: 4,
        name: "Hyperx Alloy Origins HX RED",
        price: 65247,
        stock: 35,
        image: "/public/Images/Keyboards/keyboard_hyperx_alloy_red.png",
      },
      {
        id: 5,
        name: "Logitech G 6413 SE Gaming",
        price: 58191,
        stock: 30,
        image: "/public/Images/Keyboards/keyboard_logitech_g413_gaming.png",
      },
      {
        id: 6,
        name: "Redragon K616 RGB Pro Pink",
        price: 42319,
        stock: 25,
        image: "/public/Images/Keyboards/keyboard_redragon_rgb_propink.png",
      },
      {
        id: 7,
        name: "Genesis Thor 300 TKL RGB Switch Red",
        price: 30847,
        stock: 25,
        image: "/public/Images/Keyboards/keyboard_genesis_thor_rgbswitch.png",
      },
      {
        id: 8,
        name: "Redragon K585  RGB One-Handed",
        price: 14095,
        stock: 25,
        image: "/public/Images/Keyboards/keyboard_redragon_rgb_one_handed.png",
      },
      {
        id: 9,
        name: "Philips K254 Black",
        price: 4223,
        stock: 25,
        image: "/public/Images/Keyboards/keyboard_philips_negro.png",
      },
    ],

    mouse: [
      {
        id: 1,
        name: "Razer Basilisk V3 Pro",
        price: 115000,
        stock: 10,
        image: "/public/Images/Mouse/mouse_razer_basilisk_v3_pro.png",
      },
      {
        id: 2,
        name: "Logitech G Pro x Superlight Black",
        price: 112879,
        stock: 10,
        image:
          "/public/Images/Mouse/mouse_logitech_wireless_pro_superlightblack.png",
      },
      {
        id: 3,
        name: "Logitech G G502X White",
        price: 72303,
        stock: 30,
        image: "/public/Images/Mouse/mouse_logitech_g_white.png",
      },
      {
        id: 4,
        name: "Logitech G300S Gaming Optical",
        price: 23263,
        stock: 25,
        image: "/public/Images/Mouse/mouse_logitech_g300s_gaming.png",
      },
    ],

    mousepads: [
      {
        id: 1,
        name: "HyperX Fury S Pro , price:33935",
        stock: 10,
        image: "/public/Images/Mousepad/mousepad_hyperx_fury_pro.png",
      },
      {
        id: 2,
        name: "Logitech G G840 KDA",
        price: 29071,
        stock: 15,
        image:
          "/public/Images/Mousepad/mousepad_logitech_league_of_legends.png",
      },
      {
        id: 3,
        name: "Cooler Master MP511 Limited Edition",
        price: 24143,
        stock: 32,
        image: "/public/Images/Mousepad/mousepad_cooler_master.png",
      },
      {
        id: 4,
        name: "Genius G-Pad 800S",
        price: 8127,
        stock: 44,
        image: "/public/Images/Mousepad/mousepad_genius_png",
      },
    ],

    notebooks: [
      {
        id: 1,
        name: "Gigabyte Aero 5",
        price: 1763999,
        stock: 5,
        image: "/public/Images/Notebooks/notebook_gigabyte_aero_5_i7.png",
      },
      {
        id: 2,
        name: "Gigabyte Aoros 17G",
        price: 1675775,
        stock: 5,
        image: "/public/Images/Notebooks/notebook_gigabyte_aorus_i7.png",
      },
      {
        id: 3,
        name: "Asus Zenbook Duo 14",
        price: 1552303,
        stock: 5,
        image: "/public/Images/Notebooks/notebook_asus_zenbook_i7.png",
      },
      {
        id: 4,
        name: "Apple Macbook Pro M1",
        price: 1499375,
        stock: 5,
        image: "/public/Images/Notebooks/notebook_apple_macbook_pro.png",
      },
      {
        id: 5,
        name: "Lenovo Thinkpad E14 G2",
        price: 1220671,
        stock: 5,
        image: "/public/Images/Notebooks/notebook_lenovo_thinkpad_i7.png",
      },
      {
        id: 6,
        name: "Bangho Max L5",
        price: 582095,
        stock: 5,
        image: "/public/Images/Notebooks/notebook_bangho_max_i7.png",
      },
      {
        id: 7,
        name: "CX 30282",
        price: 437455,
        stock: 5,
        image: "/public/Images/Notebooks/notebook_cx_i5.png",
      },
      {
        id: 8,
        name: "Lenovo V15 Pentium",
        price: 317519,
        stock: 5,
        image: "/public/Images/Notebooks/notebook_lenovo_v15_pentium.png",
      },
    ],
  };
  const { category } = useParams();

  const filteredProducts = products[category] || [];
  return (
    <div>
      <ItemList products={filteredProducts} />
    </div>
  );
};
export default ItemListContainer;
