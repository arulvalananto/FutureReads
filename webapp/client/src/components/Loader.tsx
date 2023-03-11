import loader from '../assets/pendulum.gif';

const Loader = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-[200px] h-[80px]">
          <img
            src={loader}
            alt="Future Reads loader"
            className="object-cover"
          />
        </div>
        <p>Loading</p>
      </div>
    </div>
  );
};

export default Loader;
