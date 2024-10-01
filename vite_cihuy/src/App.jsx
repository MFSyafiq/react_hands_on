import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

function App() {
  // ini buat naro component Child dan tempat buat value looping
  const navbarMenu = [
    "Home",
    "Tentang Kami",
    "Menu",
    "Delivery Order",
    "Hubungi Kami",
  ];
  const navbarTitle = [
    "MENU",
    "Warungmie",
    "Mie Terbaik dengan Harga Terbaik",
  ];

  const menuItems = [
    {
      name: "Mie Mantap",
      image: "src/assets/mie_mantap.jpeg",
      orderLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Mie Nagih",
      image: "src/assets/mie_nagih.jpeg",
      orderLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Mie Seafood",
      image: "src/assets/mie_seafood.jpeg",
      orderLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Mie Sosis",
      image: "src/assets/mie_sosis.jpeg",
      orderLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Es Campur Sari",
      image: "src/assets/campur.jpeg",
      orderLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Es Cendol Dawet",
      image: "src/assets/cendol.jpeg",
      orderLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Es Teh Cui",
      image: "src/assets/teh.jpeg",
      orderLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Wedang Uanget",
      image: "src/assets/wedang.jpeg",
      orderLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];

    const menuExtra = [
      "OUR MENU",
      "Pesan Yuk!",
    ];

    const socialMediaInfo = [
      { label: "Email", value: "warungmie@boleh.com" },
      { label: "Instagram", value: "@Warungmie" },
    ];

    const openHoursInfo = [
      { label: "Weekdays", value: "12:00 - 20:00" },
      { label: "Weekends/Holidays", value: "8:00 - 24:00" },
    ];
    const extraInfo = [
      "Our Social Media",
      "Open Hours",
      "Newest Info",
      "Dapatkan informasi dan promo terbaru dari kami.",
      "Subscribe",
    ];


  return (
    <>
      <Header navbarTitle={navbarTitle} navbarMenu={navbarMenu}></Header>
      <Body menuItems={menuItems} menuExtra={menuExtra}></Body>
      <Footer
        socialMediaInfo={socialMediaInfo}
        openHoursInfo={openHoursInfo}
        extraInfo={extraInfo}
      ></Footer>
    </>
  );
}

export default App;
