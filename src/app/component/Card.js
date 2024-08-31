import { Link } from "react-router-dom";

function Cart({ logement }) {
  return (
    <>
      <div className="galleryImage">
        {logement.map((l) => (
          <Link key={l.id} to={`/logement/${l.id}`}>
            <div
              className="boxKey"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${l.cover})`,
              }}
            >
              <p className="boxTitre">{l.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
export default Cart;
