import profileImage from "./profileImage.jpg";
export default function () {
  return (
    <div className='relative'>
      <div className='mx-auto h-52 w-52 -mt-24 bg-white rounded-full p-1'>
        <div className='absolute h-[200px] w-[200px] rounded-full overflow-hidden z-10'>
          <img src={profileImage} />
        </div>
      </div>
    </div>
  );
}
