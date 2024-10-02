import CarTemplate from "./CarTemplate";
const HomeIntroduction = () => {
  return (
    <>
      <div>
        <h2 className="mt-5 mb-4 d-flex justify-content-center">Welcome to Bronx Luggage, What Are You Looking For?</h2>
        <div className="container" style={{ maxWidth: "88%" }}>
          <CarTemplate />
        </div>
      </div>
    </>
  );
};

export default HomeIntroduction;
