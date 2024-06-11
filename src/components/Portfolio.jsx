import EastIcon from '@mui/icons-material/East';

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center text-text bg-background min-h-screen p-4 md:p-8 lg:p-24 gap-12 xl:gap-16">
      <div className="text-text text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        Portfolio
      </div>
      <div className="flex flex-col gap-24">
        {/* Features section starts here */}
        <div className="flex flex-col items-center justify-center gap-24 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-4 lg:gap-16">
            <img
              className="gif w-full lg:w-2/5 hidden lg:block"
              src="../src/assets/connecting.gif"
            />
            <div className="w-full lg:w-2/5">
              <h2 className="text-accent text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Lambda Peeler
              </h2>
              <p className="text-white text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
                An open-source, web-based dashboard tailored for AWS Lambda
                developers. It is meticulously designed to bridge the gap
                between managing Lambda functions and layers, simplifying AWS
                cloud operations. It enhances developing efficiency by allowing
                engineers to test their layer and function compatibilities in
                bulk. Currently, engineers can only test one-by-one or set up a
                very robust CI/CD pipeline through AWS. Our product aims to
                bridge the gap and give engineers an easy-to-use alternative.
              </p>
              <a
                href="https://lambda-peeler.onrender.com/"
                className="flex items-center gap-1 text-accent text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              >
                Website <EastIcon className="text-accent" />
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-4 lg:gap-16">
            <div className="w-full lg:w-2/5">
              <h2 className="text-accent text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Shelved
              </h2>
              <p className="text-white text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
                A digital library app for avid readers, audiobook listeners, and
                e-book enjoyers. It can be hard to keep track of all the books
                you have read/listened to across multiple platforms. Shelved
                allows you to maintain a library of ALL of the books you have
                enjoyed. It is seamlessly integrated with the GoogleBooks API
                that allows users to view more information about each book, such
                as author, genre, and number of pages.
              </p>
              <a
                href="https://github.com/ZachMHamilton/Library-Project"
                className="flex items-center gap-1 text-accent text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              >
                Docs <EastIcon className="text-accent" />
              </a>
            </div>
            <img
              className="gif w-full lg:w-2/5 hidden lg:block"
              src="../src/assets/library.png"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-4 lg:gap-16">
            <img
              className="gif w-full lg:w-2/5 hidden lg:block"
              src="../src/assets/algo.png"
            />
            <div className="w-full lg:w-2/5">
              <h2 className="text-accent text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Algo Archive
              </h2>
              <p className="text-white text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
                A web-based dashboard that allows users to track their algorithm
                practice in preparation for technical interviews. Users can save
                their algo problems with the question and their solution, as
                well as any notes they would like to save, such as difficulty,
                different strategies used, and more.
              </p>
              <a
                href="https://github.com/danger-noodle-42/algo-archive"
                className="flex items-center gap-1 text-accent text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              >
                Docs <EastIcon className="text-accent" />
              </a>
            </div>
          </div>
        </div>
        {/* Features section ends here */}
      </div>
    </div>
  );
};

export default Portfolio;
