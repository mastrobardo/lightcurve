import ReactLoading from 'react-loading';
import './loader.style.scss';

export const Loader = () => {
  return (
        <div className="loader__wrapper">
            <ReactLoading type={'bars'} color={'#314097'} height={300} width={400} />
        </div>
  );
};