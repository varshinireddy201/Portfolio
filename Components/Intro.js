/* eslint-disable react/no-unescaped-entities */
function Intro({ bgColor, refer }) {
  return (
    <div
      className={`flex justify-center h-full ${bgColor} items-center text-white px-12 `}
      ref={refer}
    >
      <div className="space-y-3">
        <p>Hey, I am</p>
        <p className="text-5xl">Varshini Nathala</p>
        <p className="max-w-xl">
          Software Engineer and a Computer Science graduate student at California State
          University - Long Beach. I am an experienced Full Stack Developer who's trying to explore the front end world!
        </p>
      </div>
    </div>
  );
}

export default Intro;
