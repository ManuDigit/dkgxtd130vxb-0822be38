const Header = () => {
  return (
    <header className="py-6 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-center lg:justify-start">
          <div className="bg-white/75 backdrop-blur-md rounded-full px-6 py-2">
            <img
              src="https://otzivipro.b-cdn.net/logo/klientski-otzivi-balgaria.png"
              alt="OtziviPro - Клиентски отзиви България"
              className="h-10 sm:h-12 w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
