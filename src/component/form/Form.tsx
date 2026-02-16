import Title from "../Title";

type Props = {
  children: React.ReactNode;
};

function Form({ children }: Props) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Title>Mon Comptable</Title>
      <div className="w-1/3 flex flex-col justify-center items-center rounded-2xl gap-6 bg-base-200 p-12 ">
        {children}
      </div>
    </div>
  );
}

export default Form;
