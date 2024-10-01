export const Footer = (props) => {
    const {socialMediaInfo} = props;
    const { openHoursInfo } = props;
    const {extraInfo} = props;
  return (
    <>
      <div class="bg-black h-auto md:h-[505px] grid grid-cols-1 md:grid-cols-3 gap-10 p-8 md:p-24">
        {/* Social Media Section */}
        <div class="flex flex-col space-y-4 md:space-y-10 px-4 md:px-14">
          <p id="social-media" class="text-white text-lg md:text-bold">
            {extraInfo[0]}
          </p>
          <div>
            {socialMediaInfo.map((item, index) => (
              <div class="flex justify-between" key={index}>
                <p class="text-white">{item.label}</p>
                <p class="text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Hours Section */}
        <div class="flex flex-col space-y-4 md:space-y-10 px-4 md:px-14">
          <p class="text-white text-lg md:text-bold">{extraInfo[1]}</p>
          <div>
            {openHoursInfo.map((item, index) => (
              <div class="flex justify-between" key={index}>
                <p class="text-white">{item.label}</p>
                <p class="text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newest Info Section */}
        <div class="flex flex-col space-y-10">
          <p class="text-white text-lg md:text-bold">{extraInfo[2]}</p>
          <p class="text-white">{extraInfo[3]}</p>
          <div class="flex flex-col space-y-3">
            <input
              type="search"
              class="w-full bg-[#2C2B2B] text-center h-[52px] rounded-sm"
              placeholder="Enter Email Address"
            />
            <button
              class="bg-[#F3C063] rounded-sm text-white p-1.5 h-[52px]"
              type="button"
            >
              {extraInfo[4]}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;