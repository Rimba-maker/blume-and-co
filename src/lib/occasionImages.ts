const occasionPhotoIds: Record<string, number> = {
  wedding: 10838755,
  birthday: 30682919,
  anniversary: 15198293,
  "sympathy-funeral": 4505527,
  newborn: 29801965,
  graduation: 17258001,
  corporate: 30828846,
  "girlfriend-day": 6532856,
  congratulations: 6356146,
};

export function occasionImage(slug: string, width = 700): string {
  const id = occasionPhotoIds[slug];
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}
