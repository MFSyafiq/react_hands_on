export const Body = (props) => {
  const { menuItems } = props;
  const { menuExtra } = props;
  return (
    <>
      <div class="bg-white mb-5 md:mb-5">
        <div class="relative flex justify-center my-8 pl-[20px] md:pl-[150px]">
          <h1 class="absolute z-10 top-[3rem] md:top-[5rem] text-4xl md:text-6xl font-bold">
            {menuExtra[0]}
          </h1>
        </div>

        <div class="flex justify-center px-5 md:px-[40px]">
          <div class="grid grid-cols-1 md:grid-cols-4 mt-10 md:mt-[10rem] items-center gap-5">
            {menuItems.map((item, index) => (
              <div key={index}>
                <img src={item.image} alt={item.name} class="w-full" />
                <div class="pl-5 gap-5 flex flex-col">
                  <h1 class="font-bold text-lg">{item.name}</h1>
                  <a href={item.orderLink} target="_blank">
                    <button
                      class="bg-green-400 border rounded-md text-white p-1.5"
                      type="button"
                    >
                      {menuExtra[1]}
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;
