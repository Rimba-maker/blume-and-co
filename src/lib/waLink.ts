// ponytail: placeholder number, swap before launch (PRD Section 18 open item)
const WA_NUMBER = "62XXXXXXXXXX";

function buildLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const waLink = {
  generic: () =>
    buildLink("Halo Blume & Co, saya mau tanya-tanya soal produk kalian!"),

  product: (name: string, category: string, subcategory: string) =>
    buildLink(
      `Halo Blume & Co, saya mau order ${name} (${category} - ${subcategory}), apakah masih tersedia?`
    ),

  occasion: (name: string, occasion: string) =>
    buildLink(`Halo Blume & Co, saya mau order ${name} untuk ${occasion}.`),

  location: (name: string, city: string) =>
    buildLink(`Halo Blume & Co, saya mau order ${name}, kirim ke ${city}.`),

  customRequest: (category: string) =>
    buildLink(
      `Halo Blume & Co, saya mau custom request untuk ${category}, ceritanya begini...`
    ),
};
