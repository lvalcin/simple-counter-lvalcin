let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(count);
}, 1000);

console.log(intervalId)

const SecondsCounter = () => {
    return (
        <div className="text-center">
        counter   

        </div>
    );
};

export default SecondsCounter;