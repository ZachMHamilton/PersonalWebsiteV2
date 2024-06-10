import EastIcon from '@mui/icons-material/East';

const Portfolio = () => {
  return (
    <div className="text-text bg-background">
      <div className="flex flex-col items-center p-2">
        <h1 className="border-b-2 border-accent text-white text-5xl">
          Portfolio
        </h1>
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-accent text-lg">Languages&nbsp;</span>
            <p className="text-white">
              &nbsp; JavaScript | TypeScript | SQL | Java
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-accent text-lg">Technologies&nbsp;</span>
            <p className="text-white">
              &nbsp; React | Node | Express | AWS SDK | PostgreSQL | MongoDB |
              Redux | Git | Jest | HTML | CSS | JWT | Heroku
            </p>
          </div>
        </div>
        <div className="features">
          <div className="feature">
            <div className="featureDiscription">
              <h2 className="text-accent text-2xl">Lambda Peeler</h2>
              <p className="text-white">
                Lambda Peeler is an open-source, web-based dashboard tailored
                for AWS Lambda developers. It is meticulously designed to bridge
                the gap between managing Lambda functions and layers,
                simplifying AWS cloud operations. It enhances developing
                efficiency by allowing engineers to test their layer and
                function compatibilities in bulk. Currently, engineers can only
                test one-by-one or set up a very robust CI/CD pipeline through
                AWS. Our product aims to bridge the gap and give engineers an
                easy-to-use alternative.
              </p>
              <a
                href="https://lambda-peeler.onrender.com/"
                className="flex items-center gap-1 text-accent"
              >
                Website <EastIcon className="text-accent" />
              </a>
            </div>
            <img className="gif" src="/connecting.gif" />
          </div>
          <div className="feature">
            <img className="gif" src="/library.png" />
            <div className="featureDiscription">
              <h2 className="text-accent text-2xl">Shelved</h2>
              <p className="text-white">
                Shevled is a digital library app for avid readers, audiobook
                listeners, and e-book enjoyers. It can be hard to keep track of
                all the books you have read/listened to across multiple
                platforms. Shevled allows you to maintain a library of ALL of
                the books you have enjoyed. It is seamlessly integrated with the
                GoogleBooks API that allows users to view more information about
                each book, such as author, genre, and number of pages.
              </p>
              <a
                href="https://github.com/ZachMHamilton/Library-Project"
                className="flex items-center gap-1 text-accent"
              >
                Docs <EastIcon className="text-accent" />
              </a>
            </div>
          </div>
          <div className="feature">
            <div className="featureDiscription">
              <h2 className="text-accent text-2xl">Algo Archive</h2>
              <p className="text-white">
                AlgoArchive is a web-based dashboard that allows users to track
                their algorithm practice in preparation for technical
                interviews. Users can save their algo problems with the question
                and their solution, as well as any notes they would like to
                save, such as difficulty, different strategies used, and
              </p>
              <a
                href="https://github.com/danger-noodle-42/algo-archive"
                className="flex items-center gap-1 text-accent"
              >
                Docs <EastIcon className="text-accent" />
              </a>
            </div>
            <img className="gif" src="/algo.png" />
          </div>
        </div>
        <p className="text-center">
          View my full resume{' '}
          <a
            href="https://drive.google.com/file/d/19ZmLDX3Qo5mCAFUohqiXF2_jg_FuQNiv/view?usp=sharing"
            className="text-accent"
          >
            here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
