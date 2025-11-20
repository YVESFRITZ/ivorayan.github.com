const products = [
  {
    name: "Solitaire Classique",
    category: "rings",
    material: "Or blanc 14K • taille brillant",
    image: "assets/products/ring-solitaire-classique.webp",
  },
  {
    name: "Asscher Hexa",
    category: "rings",
    material: "Monture graphique • taille Asscher",
    image: "assets/products/ring-hex-asscher.webp",
  },
  {
    name: "Émeraude Élancée",
    category: "rings",
    material: "Émeraude sur corps micro-pavé",
    image: "assets/products/ring-emerald-slim.webp",
  },
  {
    name: "Trio Poire Lumière",
    category: "rings",
    material: "Centre poire • côtés demi-lune",
    image: "assets/products/ring-pear-trio.webp",
  },
  {
    name: "Halo Cœur Signature",
    category: "rings",
    material: "Halo pavé intégral",
    image: "assets/products/ring-heart-halo.webp",
  },
  {
    name: "Coussin Baguettes",
    category: "rings",
    material: "Baguettes latérales + panier double",
    image: "assets/products/ring-cushion-baguette.webp",
  },
  {
    name: "Ovale Scallop",
    category: "rings",
    material: "Anneau perlé serti clos",
    image: "assets/products/ring-oval-scallop.webp",
  },
  {
    name: "Halo Coussin Haute Joaillerie",
    category: "rings",
    material: "Halo carré + pavage sur corps",
    image: "assets/products/ring-cushion-halo.webp",
  },
  {
    name: "Studs Asscher",
    category: "earrings",
    material: "Griffes angulaires • VS",
    image: "assets/products/studs-asscher.webp",
  },
  {
    name: "Studs Émeraude",
    category: "earrings",
    material: "Quatre griffes brillantes",
    image: "assets/products/studs-emerald.webp",
  },
  {
    name: "Studs Poire",
    category: "earrings",
    material: "Monture trois griffes",
    image: "assets/products/studs-pear.webp",
  },
  {
    name: "Studs Cœur",
    category: "earrings",
    material: "Profil romantique serti panier",
    image: "assets/products/studs-heart.webp",
  },
  {
    name: "Studs Double Poire",
    category: "earrings",
    material: "Motif coeur inversé",
    image: "assets/products/studs-double-pear.webp",
  },
  {
    name: "Studs Princesse",
    category: "earrings",
    material: "Structure graphique minimaliste",
    image: "assets/products/studs-princesse.webp",
  },
  {
    name: "Studs Mosaic",
    category: "earrings",
    material: "Composition multi-tailles",
    image: "assets/products/studs-mosaic.webp",
  },
  {
    name: "Tennis Classique 3 mm",
    category: "bracelets",
    material: "Serti griffes continu",
    image: "assets/products/bracelet-tennis-classique.webp",
  },
  {
    name: "Ligne Cœurs",
    category: "bracelets",
    material: "Motif coeur articulé",
    image: "assets/products/bracelet-coeur-ligne.webp",
  },
  {
    name: "Serti Clos Continu",
    category: "bracelets",
    material: "Pierres rondes 360°",
    image: "assets/products/bracelet-serti-clos.webp",
  },
  {
    name: "Charms Célestes",
    category: "bracelets",
    material: "Lune pavée + étoile",
    image: "assets/products/bracelet-charms-celeste.webp",
  },
  {
    name: "Hearts Minimal",
    category: "bracelets",
    material: "Micro-cœurs pavés",
    image: "assets/products/bracelet-coeur-articule.webp",
  },
  {
    name: "Tennis 3 mm Deluxe",
    category: "bracelets",
    material: "Pierres calibrées 3 mm",
    image: "assets/products/bracelet-tennis-3mm.webp",
  },
  {
    name: "Chaîne Cœurs Argent",
    category: "bracelets",
    material: "Double rang texturé",
    image: "assets/products/bracelet-chain-coeurs.webp",
  },
  {
    name: "Trèfles Chromatiques",
    category: "bracelets",
    material: "Pierres colorées taille ronde",
    image: "assets/products/bracelet-multi-gems.webp",
  },
  {
    name: "Tennis XL",
    category: "necklaces",
    material: "Prong set 4 pts",
    image: "assets/products/necklace-tennis-luxe.webp",
  },
  {
    name: "Riviera Graduée",
    category: "necklaces",
    material: "Dégradé subtil VS",
    image: "assets/products/necklace-riviera.webp",
  },
  {
    name: "Prong Set Éclat",
    category: "necklaces",
    material: "Monture griffes 6 pt",
    image: "assets/products/necklace-prong.webp",
  },
  {
    name: "Couronne Lumineuse",
    category: "necklaces",
    material: "Serti couronne 2 pt",
    image: "assets/products/necklace-crown-set.webp",
  },
  {
    name: "Miracle Set",
    category: "necklaces",
    material: "Effet loupe 2 pt",
    image: "assets/products/necklace-miracle-set.webp",
  },
  {
    name: "Miami Chic",
    category: "necklaces",
    material: "Maille cuban scintillante",
    image: "assets/products/necklace-miami.webp",
  },
  {
    name: "Pendentif Jésus",
    category: "pendants",
    material: "Sculpture pavée",
    image: "assets/products/pendant-jesus.webp",
  },
  {
    name: "Logo ICE_TECH",
    category: "pendants",
    material: "Lettrage pavé VS",
    image: "assets/products/pendant-logo.webp",
  },
  {
    name: "Croix Émeraude",
    category: "pendants",
    material: "Baguettes taille émeraude",
    image: "assets/products/pendant-cross-emerald.webp",
  },
  {
    name: "Croix Slim Pavée",
    category: "pendants",
    material: "Micro-sertissage blanc",
    image: "assets/products/pendant-cross-slim.webp",
  },
];
const productsGrid = document.getElementById("productsGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

const createProductCard = (product) => {
  const card = document.createElement("article");
  card.className = "product-card";

  const pictureWrapper = document.createElement("div");
  pictureWrapper.className = "product-image";

  const picture = document.createElement("img");
  picture.src = product.image;
  picture.alt = product.name;
  picture.loading = "lazy";
  picture.onerror = () => {
    picture.src = placeholder;
  };

  pictureWrapper.appendChild(picture);

  const title = document.createElement("h3");
  title.textContent = product.name;

  const meta = document.createElement("p");
  meta.className = "product-meta";
  meta.textContent = product.material;

  card.append(pictureWrapper, title, meta);
  return card;
};

const renderProducts = (filter = "all") => {
  if (!productsGrid) return;
  productsGrid.innerHTML = "";
  const visible =
    filter === "all"
      ? products
      : products.filter((item) => item.category === filter);

  visible.forEach((item) => {
    productsGrid.appendChild(createProductCard(item));
  });
};

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.dataset.filter);
  });
});

renderProducts();

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

