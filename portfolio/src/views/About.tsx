const About = () => {
  return (
    <div className="container my-5">
      <div className="flex justify-center">
        <div className="w-3/4 text-center">
          <img 
            src="/images/about/headshot.jpg" 
            alt="Headshot" 
            className="w-full max-w-md mx-auto object-cover"
          />
          <p className="my-4 text-sm text-gray-600 leading-relaxed">
            My passion for design started at a young age, inspired by the show Trading Spaces. As a child I never knew that being able to transform spaces could turn into a lifelong career;
            it just seemed to fun to be a professional career. With a natural eye for colour, texture and current trends, pursuing a career in the design industry was a must!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
