export default function Hero({ text }) {
  // learned how to create hero with css from w3 schools: https://www.w3schools.com/howto/howto_css_hero_image.asp
  return (
    <div className="hero-image">
      <div className="text">
        <h1>{text}</h1>
      </div>
    </div>
  );
}
