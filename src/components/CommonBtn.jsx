const CommonBtn = ({ buttonText }) => {
  return (
    <>
      <a
        href="#_"
        className="relative inline-block px-4 py-2 font-medium group">
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-blue-600 group-hover:bg-blue-600"></span>
        <span className="relative text-blue-700 group-hover:text-white">
          {buttonText}
        </span>
      </a>
    </>
  );
};

export default CommonBtn;
