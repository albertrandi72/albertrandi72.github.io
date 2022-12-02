import { ImLinkedin2, ImTwitter, ImGithub } from "react-icons/im";

export default function () {
  return (
    <div>
      <div className='text-center text-3xl font-bold mt-2'>ALBERT RANDI</div>
      <div className='text-center text-xl text-gray-500 mt-1'>
        Web Developer
      </div>
      <div className='mt-1'>
        <div className='flex mx-auto w-40 justify-center space-x-6'>
          <ImLinkedin2 />
          <ImTwitter />
          <ImGithub />
        </div>
      </div>
    </div>
  );
}
