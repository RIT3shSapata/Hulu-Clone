import Thumbnail from './Thumbnail';

const Results = ({ results }) => {
    return (
        <div className='px-5 my-10 sm:grid md:grid-cols-2 l:gird-cols-3'>
            {results.map((result) => (
                <div>
                    <Thumbnail key={result.id} result={result} />
                    <Thumbnail key={result.id} result={result} />
                    <Thumbnail key={result.id} result={result} />
                </div>
            ))}
        </div>
    );
};

export default Results;
