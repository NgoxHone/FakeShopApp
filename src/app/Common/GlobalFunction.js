export const limitText = (chuoi, gioiHan) => {
  if (chuoi.length > gioiHan) {
    return chuoi.substring(0, gioiHan - 3) + '...';
  }
  return chuoi;
};
