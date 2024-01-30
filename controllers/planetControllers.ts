import db from './database';

export const updateImage = async (planetId: string, imagePath: string) => {
  try {
    await db.none('UPDATE planets SET image=$1 WHERE id=$2', [imagePath, planetId]);
  } catch (error) {
    console.error('Error updating planet image:', error);
    throw error;
  }
};
