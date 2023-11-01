import Button from "../Components/atoms/Button";

const Homepage = () => {
  return (
    <div>
      <Button
        onClick={() => {
          console.log("Test");
        }}
      >
        Tekst gumba
      </Button>
    </div>
  );
};

export default Homepage;
