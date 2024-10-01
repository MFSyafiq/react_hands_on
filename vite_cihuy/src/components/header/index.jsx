// tempat buat naro html dan css nya
export const Header = (props) => {
  const { navbarMenu } = props;
  const { navbarTitle } = props;
  return (
    <>
      <div class="bg-red-700 shadow-md">
        <div class="bg-[url('src/assets/logo_cafe.png')] bg-center bg-no-repeat bg-custom-small">
          <div class="flex justify-between w-full h-[180px] items-center border-b-black px-[20px] md:px-[90px]">
            <div>
              <img
                src="src/assets/logo_cafe2.png"
                alt="mie-cafe"
                class="w-[100px] md:w-[150px]"
              />
            </div>
            <div class="ml-4 space-x-4 md:space-x-8 text-white text-sm md:text-base">
              {navbarMenu.map((item, index) => (
                <span
                  key={index}
                  class={
                    item === "Hubungi Kami"
                      ? "cursor-pointer rounded-lg border border-yellow-500 bg-yellow-500 p-1 md:p-2"
                      : "cursor-pointer"
                  }
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div class="flex items-end justify-center w-full h-[170px]">
            <h1 class="text-3xl md:text-6xl font-bold text-white">
              {navbarTitle[0]}
            </h1>
          </div>
          <div class="flex items-center justify-center w-full space-x-2 text-white text-xs md:text-base">
            <span class="cursor-pointer">{navbarTitle[1]}</span>
          </div>
          <div class="flex items-center justify-center w-full space-x-2 text-white text-xs md:text-base">
            <span class="cursor-pointer">{navbarTitle[2]}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
