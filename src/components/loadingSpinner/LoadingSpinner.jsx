
import { RingLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <>
      <div className="flex items-center justify-center pt-20">
        <RingLoader color="#00ff6e" size={80} />
      </div>
    </>
    );
};

export default LoadingSpinner;